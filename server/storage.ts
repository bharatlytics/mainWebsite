import { users, type User, type InsertUser } from "@shared/schema";
import type { InsertContact, ContactSubmission, InsertChatbot, ChatbotSubmission } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  createChatbotSubmission(submission: InsertChatbot): Promise<ChatbotSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private chatbotSubmissions: Map<number, ChatbotSubmission>;
  currentId: number;
  private currentContactId: number;
  private currentChatbotId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.chatbotSubmissions = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentChatbotId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { ...contact, id };
    this.contacts.set(id, submission);
    return submission;
  }

  async createChatbotSubmission(submission: InsertChatbot): Promise<ChatbotSubmission> {
    const id = this.currentChatbotId++;
    const chatbotSubmission: ChatbotSubmission = { ...submission, id };
    this.chatbotSubmissions.set(id, chatbotSubmission);
    return chatbotSubmission;
  }
}

export const storage = new MemStorage();