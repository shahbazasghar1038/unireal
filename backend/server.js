/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs"); // File system module for logging
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a write stream for logging to a file
const logStream = fs.createWriteStream("logs.txt", { flags: "a" });

// Sequelize Database Connection (MySQL)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectModule: require("mysql2"),
  logging: (msg) => {
    console.log(`[Sequelize Query]: ${msg}`);
    logStream.write(`${new Date().toISOString()} - ${msg}\n`); 
  },
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    timezone: "Z",
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected successfully!");
    logStream.write(`${new Date().toISOString()} - Database connected successfully!\n`);
  })
  .catch((err) => {
    console.error(" Database connection failed:", err.message);
    logStream.write(`${new Date().toISOString()} - Database connection failed: ${err.message}\n`);
  });

// Define Models
const Newsletter = sequelize.define(
  "Newsletter",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },
  { tableName: "newsletters", timestamps: false }
);

const Contact = sequelize.define(
  "Contact",
  {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
  },
  { tableName: "contact_us", timestamps: false }
);

// Sync Models with Database
sequelize
  .sync({ alter: true })
  .then(() => console.log("✅ Database models synced!"))
  .catch((err) => console.error(" Error syncing models:", err));

// API Routes

// API Route to Save Newsletter Email
app.post("/ur-be/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }
    const subscription = await Newsletter.create({ email });
    res.status(201).json({ message: "Subscribed successfully", id: subscription.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// API Route to Save Contact Us Query
app.post("/ur-be/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const contact = await Contact.create({ firstName, lastName, email, subject, message });
    res.status(201).json({ message: "Query submitted successfully.", id: contact.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  logStream.write(`${new Date().toISOString()} - 🚀 Server running on http://localhost:${PORT}\n`);
});

module.exports = sequelize;
