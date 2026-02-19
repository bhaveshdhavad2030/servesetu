/**
 * Message/Chat Type Definitions
 * Defines all message and chat-related types for TypeScript
 */

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  senderType: 'customer' | 'technician';
  recipientId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  attachments?: Attachment[];
  status: 'sent' | 'delivered' | 'read';
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Attachment {
  id: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface ChatSession {
  id: string;
  bookingId: string;
  customerId: string;
  technicianId: string;
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage extends Message {
  senderName: string;
  senderAvatar?: string;
}

export interface MessageFilter {
  bookingId?: string;
  senderId?: string;
  startDate?: string;
  endDate?: string;
  type?: 'text' | 'image' | 'file';
  page?: number;
  pageSize?: number;
}

export interface MessageListResponse {
  success: boolean;
  data: {
    messages: Message[];
    total: number;
    page: number;
    pageSize: number;
  };
}

export interface SendMessageData {
  bookingId: string;
  recipientId: string;
  content: string;
  type?: 'text' | 'image' | 'file';
  attachments?: File[];
}

export interface TypingIndicator {
  bookingId: string;
  userId: string;
  isTyping: boolean;
}

export interface OnlineStatus {
  userId: string;
  isOnline: boolean;
  lastSeen?: string;
}
