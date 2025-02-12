/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Import product images
import product1 from "../../../assets/product1.png";

//outdoor signage
import mwe601 from "../../../assets/digitalSignage/mwe601.jpg";
import mwe603 from "../../../assets/digitalSignage/mwe603.jpg";
import mwe604 from "../../../assets/digitalSignage/mwe604.jpg";
import mwe662 from "../../../assets/digitalSignage/mwe662.jpg";
import mwe701 from "../../../assets/digitalSignage/mwe701.jpg";
import mwe763 from "../../../assets/digitalSignage/mwe763.jpg";
import mwe804 from "../../../assets/digitalSignage/mwe804.jpg";
import mwe861 from "../../../assets/digitalSignage/mwe861.jpg";
import mwe863 from "../../../assets/digitalSignage/mwe863.jpg";
import mwe912 from "../../../assets/digitalSignage/mwe912.jpg";
import mwe915 from "../../../assets/digitalSignage/mwe915.jpg";
import mwe930 from "../../../assets/digitalSignage/mwe930.jpg";
import mwe957 from "../../../assets/digitalSignage/mwe957.jpg";
import mwe986 from "../../../assets/digitalSignage/mwe986.jpg";
import mweCharging from "../../../assets/digitalSignage/mweCharging.jpg";
import taxiTopOutdoor from "../../../assets/digitalSignage/taxiTopOutdoor.png";

const products = [
  {
    id: 1,
    name: "Stand Alone Digital Signage",
    image: product1,
    specifications: [
      {
        id: 1,
        label: "Panel Brand",
        value: "Full New 100% A+ Grand Brand Panel",
      },
      { id: 2, label: "Display Size", value: "1209mm(H) x 680mm(V)" },
      { id: 3, label: "Panel Ratio", value: "16:09" },
      { id: 4, label: "Resolution", value: "1920 x 1080 / 4K Optional" },
      { id: 5, label: "Viewing Angle", value: "178°/178° (H/V)" },
      { id: 6, label: "Color", value: "16.7M" },
      { id: 7, label: "Back Light", value: "LCD" },
      { id: 8, label: "Brightness", value: "2500 cd/m" },
      { id: 9, label: "Dynamic Contrast Ratio", value: "1000000:1" },
      { id: 10, label: "Connectivity", value: "WiFi, Ethernet, HDMI, USB" },
    ],
  },
  {
    id: 2,
    name: "MWE863",
    image: mwe863,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },

  {
    id: 3,
    name: "MWE986",
    image: mwe986,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 4,
    name: "MWE662",
    image: mwe662,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 5,
    name: "MWE957",
    image: mwe957,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 6,
    name: "MWE Charging Station Outdoor",
    image: mweCharging,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 7,
    name: "MWE701",
    image: mwe701,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 8,
    name: "MWE915",
    image: mwe915,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 9,
    name: "MWE763",
    image: mwe763,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 10,
    name: "MWE930",
    image: mwe930,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 11,
    name: "MWE861",
    image: mwe861,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 12,
    name: "MWE804",
    image: mwe804,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 13,
    name: "MWE601",
    image: mwe601,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 14,
    name: "MWE603",
    image: mwe603,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 15,
    name: "MWE912",
    image: mwe912,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 16,
    name: "MWE604",
    image: mwe604,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },

  {
    id: 17,
    name: "Taxi Top Outdoor",
    image: taxiTopOutdoor,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },

  // {
  //   id: 3,
  //   name: "Multimedia Kiosk",
  //   image: product3,
  //   specifications: [
  //     { id: 1, label: "Touch Screen", value: "Capacitive 10-Point Touch" },
  //     { id: 2, label: "Screen Size", value: "43-inch / 55-inch Options" },
  //     { id: 3, label: "Resolution", value: "1920 x 1080 (FHD)" },
  //     { id: 4, label: "CPU", value: "Intel Core i5 / i7 Optional" },
  //     { id: 5, label: "Operating System", value: "Windows 10 / Android 11" },
  //     { id: 6, label: "Speakers", value: "Built-in 10W Stereo" },
  //     { id: 7, label: "Camera", value: "8MP with Face Recognition" },
  //     { id: 8, label: "Storage", value: "128GB SSD, Expandable" },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Hand Sanitizer Kiosk",
  //   image: product4,
  //   specifications: [
  //     { id: 1, label: "Screen Size", value: "21.5-inch LED Display" },
  //     { id: 2, label: "Sanitizer Capacity", value: "1000ml Refillable Tank" },
  //     { id: 3, label: "Resolution", value: "1080p Full HD" },
  //     { id: 4, label: "Power Supply", value: "Rechargeable Battery / Plug-in" },
  //     { id: 5, label: "Motion Sensor", value: "Auto Hand Detection" },
  //     { id: 6, label: "OS", value: "Android 9.0 / Windows 10" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Face Recognition Kiosk",
  //   image: product5,
  //   specifications: [
  //     { id: 1, label: "Screen Size", value: "15-inch IPS Display" },
  //     { id: 2, label: "Camera", value: "Dual-Lens Infrared & RGB" },
  //     {
  //       id: 3,
  //       label: "AI Algorithm",
  //       value: "Facial Recognition (0.3s Speed)",
  //     },
  //     { id: 4, label: "Storage", value: "256GB SSD, Expandable" },
  //     { id: 5, label: "Security", value: "Mask Detection, Temperature Check" },
  //     { id: 6, label: "Power", value: "DC 12V 5A Adapter" },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Window Advertising LCD",
  //   image: product6,
  //   specifications: [
  //     { id: 1, label: "Brightness", value: "4000 cd/m (Super High)" },
  //     { id: 2, label: "Display Type", value: "Double-Sided LCD Panel" },
  //     { id: 3, label: "Resolution", value: "4K UHD" },
  //     { id: 4, label: "Thickness", value: "Ultra-Thin 9mm Frame" },
  //     { id: 5, label: "Installation", value: "Hanging / Stand Mount" },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: "LCD in Bus Station",
  //   image: product7,
  //   specifications: [
  //     { id: 1, label: "Weatherproof", value: "IP67 Certified" },
  //     { id: 2, label: "Power", value: "Solar-Powered Battery Backup" },
  //     { id: 3, label: "Connectivity", value: "4G LTE, WiFi" },
  //     { id: 4, label: "Screen Size", value: "55-inch Outdoor Panel" },
  //     { id: 5, label: "Operating System", value: "Linux / Android" },
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Touch Screen Table",
  //   image: product8,
  //   specifications: [
  //     { id: 1, label: "Screen Type", value: "Multi-Touch Interactive Table" },
  //     { id: 2, label: "Material", value: "Tempered Glass + Metal Frame" },
  //     { id: 3, label: "Processor", value: "Intel Core i7" },
  //     { id: 4, label: "Connectivity", value: "WiFi, Bluetooth, HDMI" },
  //     { id: 5, label: "Storage", value: "512GB SSD, Expandable" },
  //   ],
  // },
  // {
  //   id: 9,
  //   name: "Taxi Top LCD",
  //   image: product9,
  //   specifications: [
  //     { id: 1, label: "Brightness", value: "4000 cd/m for Daylight" },
  //     { id: 2, label: "Resolution", value: "Full HD / 4K" },
  //     { id: 3, label: "Power", value: "12V Car Battery Powered" },
  //     { id: 4, label: "Connectivity", value: "4G / GPS Tracking" },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: "LCD Video Wall",
  //   image: product10,
  //   specifications: [
  //     { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
  //     { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
  //     { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
  //     { id: 4, label: "Power Supply", value: "AC 220V" },
  //   ],
  // },
  // {
  //   id: 11,
  //   name: "Wall Mount LCD",
  //   image: product11,
  //   specifications: [
  //     { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
  //     { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
  //     { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
  //     { id: 4, label: "Power Supply", value: "AC 220V" },
  //   ],
  // },
  // {
  //   id: 12,
  //   name: "Stretched LCD",
  //   image: product11,
  //   specifications: [
  //     { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
  //     { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
  //     { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
  //     { id: 4, label: "Power Supply", value: "AC 220V" },
  //   ],
  // },
];

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentProductId = location.state?.currentProductId; // Get selected product ID
  const category = location.state?.category;
  // Find the selected product
  const currentIndex = products.findIndex((p) => p.id === currentProductId);
  const product = products[currentIndex];

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  // State to track the active image index, initialized to the selected product
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [selectedProduct, setSelectedProduct] = useState(
    location.state?.selectedProduct || sessionStorage.getItem("selectedProduct")
  );

  useEffect(() => {
    if (location.state?.category) {
      // Store selected product in session storage when the user navigates
      sessionStorage.setItem("selectedProduct", location.state?.category);
    }
  }, [location.state?.category]);
  // Handle Previous & Next Image
  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto max-w-[1400px] bg-white p-6">
      {/* Breadcrumb */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span
          className="cursor-pointer whitespace-nowrap text-xs text-gray-500 sm:text-sm md:text-base"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <span
          className="cursor-pointer whitespace-nowrap text-xs text-gray-500 sm:text-sm md:text-base"
          onClick={() => navigate("/products")}
        >
          Products
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <Link
          to="/categories"
          state={{ selectedProduct: category }}
          className="cursor-pointer whitespace-nowrap text-xs text-gray-500 sm:text-sm md:text-base"
        >
          {category}
        </Link>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <span className="whitespace-nowrap text-xs font-semibold text-black sm:text-sm md:text-base">
          {product.name}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-[0.5fr_2fr_1fr]">
        {/* Left Side: Larger Thumbnails */}
        <div className="hidden max-h-[750px] flex-row items-center space-x-2 overflow-x-auto md:flex-col md:space-x-0 md:space-y-6 md:overflow-y-auto lg:flex">
          {/* Previous Image Button */}
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center rounded-full p-2 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 15l-6-6-6 6"></path>
            </svg>
          </button>

          {/* Thumbnails for image navigation */}
          {[
            products[(activeIndex - 1 + products.length) % products.length], // Previous
            products[activeIndex], // Current
            products[(activeIndex + 1) % products.length], // Next
          ].map((imgProduct, index) => (
            <img
              key={imgProduct.id}
              src={imgProduct.image}
              alt={`Thumbnail ${index}`}
              className={`h-40 w-32 cursor-pointer rounded-md border object-cover transition ${
                index === 1 ? "border-gray-600 scale-105" : "border-gray-300"
              }`}
              onClick={() =>
                setActiveIndex(
                  products.findIndex((p) => p.id === imgProduct.id)
                )
              }
            />
          ))}

          {/* Next Image Button */}
          <button
            onClick={handleNext}
            className="flex items-center justify-center rounded-full p-2 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>
        </div>

        {/* Main Image (Larger) */}
        <div className="flex max-h-[500px] w-full flex-1 items-center justify-center rounded-lg bg-gray-100 p-4 shadow-lg md:max-h-[750px] md:p-10">
          <img
            src={products[activeIndex].image} // Corrected to use selected product image
            alt={products[activeIndex].name}
            className="h-[350px] max-h-[510px] w-full object-contain sm:h-auto"
          />
        </div>
        <div className="relative flex max-w-full items-center justify-center lg:hidden">
          {/* Previous Image Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-[-15px] z-10 flex items-center justify-center rounded-full bg-white p-2 shadow hover:bg-gray-300"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>

          <div className="flex w-full justify-center gap-4">
            {[
              products[(activeIndex - 1 + products.length) % products.length], // Previous
              products[activeIndex], // Current
              products[(activeIndex + 1) % products.length], // Next
            ].map((imgProduct, index) => (
              <img
                key={imgProduct.id}
                src={imgProduct.image}
                alt={`Thumbnail ${index}`}
                className={`h-[130px] md:h-[170px] sm:max-h-none max-w-[150px] w-24 lg:h-40 md:w-32 cursor-pointer rounded-md border p-3 object-cover transition ${
                  index === 1 ? "border-gray-600 scale-105" : "border-gray-300"
                }`}
                onClick={() =>
                  setActiveIndex(
                    products.findIndex((p) => p.id === imgProduct.id)
                  )
                }
              />
            ))}
          </div>

          {/* Next Image Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-15px] z-10 flex items-center justify-center rounded-full bg-white p-2 shadow hover:bg-gray-300"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
        {/* Right Side: Product Information (Smaller) */}
        <div className="flex w-full flex-col space-y-6 md:w-[500px]">
          <h1 className="text-3xl font-bold">{products[activeIndex].name}</h1>

          {/* Available Sizes */}
          <div>
            <h3 className="text-lg font-semibold">Available Sizes</h3>
            <div className="mt-3 flex flex-wrap gap-1">
              {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                <span
                  key={size}
                  className="border-gray text-md mx-1 cursor-pointer rounded-md border px-4 py-1 font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <h3 className="mb-2 font-semibold">Specifications:</h3>
          <div className="md: rounded-lg bg-gray-100 px-4 py-4 shadow-md sm:px-6 md:min-h-[440px] md:px-5">
            <div className="text-md flex justify-between pb-2">
              <span className="font-medium">Screen</span>
            </div>

            {products[activeIndex].specifications
              ?.slice(0, undefined)
              .map((spec) => (
                <div
                  key={spec.id}
                  className="text-md my-1.5 flex justify-between sm:my-3"
                >
                  <span className="w-[40%] text-sm font-medium sm:w-1/2 sm:text-base">
                    {spec.label}
                  </span>
                  <span className="w-[60%] text-left text-sm text-gray-600 sm:w-1/2 sm:text-base">
                    {spec.value}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
