
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "SIT313 P5 backend is running!"
  });
});

// Newsletter subscription route
app.post("/subscribe", (req, res) => {
  try {
    const { email } = req.body || {};

    // Validate email
    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        message: "Please provide your email address."
      });
    }

    const normalizedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address."
      });
    }

    // Read Mailgun configuration from .env
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const from = process.env.MAILGUN_FROM;

    if (!apiKey || !domain || !from) {
      console.error("Mailgun configuration is incomplete.");

      return res.status(500).json({
        message: "Email service configuration is incomplete."
      });
    }

    // Prepare the welcome email
    const formData = new URLSearchParams({
      from: from,
      to: normalizedEmail,
      subject: "Thank you for subscribing!",
      text: "Thank you for subscribing to my newsletter!"
    }).toString();

    const options = {
      hostname: "api.mailgun.net",
      path: `/v3/${domain}/messages`,
      method: "POST",
      auth: `api:${apiKey}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(formData)
      }
    };

    // Send email through Mailgun
    const mailgunRequest = https.request(options, (mailgunResponse) => {
      let responseData = "";

      mailgunResponse.on("data", (chunk) => {
        responseData += chunk;
      });

      mailgunResponse.on("end", () => {
        console.log("Mailgun Status Code:", mailgunResponse.statusCode);
        console.log("Mailgun Response:", responseData);

        if (
          mailgunResponse.statusCode >= 200 &&
          mailgunResponse.statusCode < 300
        ) {
          return res.status(200).json({
            message: "Welcome email sent successfully!"
          });
        }

        return res.status(502).json({
          message: "The email service could not send your email."
        });
      });
    });

    mailgunRequest.on("error", (error) => {
      console.error("Mailgun request error:", error.message);

      if (!res.headersSent) {
        return res.status(502).json({
          message: "Could not connect to the email service."
        });
      }
    });

    mailgunRequest.write(formData);
    mailgunRequest.end();
  } catch (error) {
    console.error("Subscription error:", error.message);

    return res.status(500).json({
      message: "An internal server error occurred."
    });
  }
});

// Handle invalid JSON requests
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400) {
    return res.status(400).json({
      message: "Invalid JSON request."
    });
  }

  return res.status(500).json({
    message: "An internal server error occurred."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
