import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull()
});

export const chatbotSubmissions = pgTable("chatbot_submissions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  timestamp: timestamp("timestamp").notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  message: true
}).extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export const insertChatbotSchema = createInsertSchema(chatbotSubmissions).pick({
  email: true,
  timestamp: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertChatbot = z.infer<typeof insertChatbotSchema>;
export type ChatbotSubmission = typeof chatbotSubmissions.$inferSelect;