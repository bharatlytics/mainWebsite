import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatbotSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { createTransport } from "nodemailer";

// Create a nodemailer transporter
const transporter = createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: fromZodError(result.error).message 
        });
      }

      const submission = await storage.createContact(result.data);
      res.status(201).json(submission);
    } catch (error) {
      console.error("Failed to handle contact submission:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  app.post("/api/chatbot", async (req, res) => {
    try {
      const result = insertChatbotSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: fromZodError(result.error).message 
        });
      }

      const submission = await storage.createChatbotSubmission(result.data);

      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "sahil@bharatlytics.com",
        subject: "New Chatbot Lead",
        text: `New lead from chatbot:\nEmail: ${submission.email}\nTimestamp: ${submission.timestamp}`,
        html: `
          <h2>New Lead from Website Chatbot</h2>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Timestamp:</strong> ${submission.timestamp}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json(submission);
    } catch (error) {
      console.error("Failed to handle chatbot submission:", error);
      res.status(500).json({ message: "Failed to submit chatbot form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}