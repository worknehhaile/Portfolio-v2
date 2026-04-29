const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Save to MongoDB
    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    await resend.emails.send({
  from: "Portfolio Contact <onboarding@resend.dev>",
  to: process.env.EMAIL_USER,
  subject: "New Portfolio Contact Message",
  html: `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
});
    res.status(201).json({
      message: "Message saved and email sent successfully",
    });
  } catch (error) {
  console.error(error);
  return res.status(500).json({
    error: error.message,
    stack: error.stack,
  });
}
});

module.exports = router;