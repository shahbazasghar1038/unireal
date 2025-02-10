/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection

const db = mysql.createConnection({
  host: "server211.orangehost.com",
  user: "tieronix_unireal", // Replace with your MySQL username
  password: "unireal1234", // Replace with your MySQL password
  database: "tieronix_unireal", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully.");
  }
  db.end(); // Close the connection
});

// API Route to Save Newsletter Email
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const query = "INSERT INTO newsletters (email) VALUES (?)";
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error." });
    }
    res
      .status(200)
      .json({ message: "Email saved successfully.", id: result.insertId });
  });
});

// API Route to Save Contact Us Query
app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const query =
    "INSERT INTO contact_us (first_name, last_name, email, subject, message) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [firstName, lastName, email, subject, message],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error." });
      }
      res.status(200).json({
        message: "Query submitted successfullyyy.",
        id: result.insertId,
      });
    }
  );
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
