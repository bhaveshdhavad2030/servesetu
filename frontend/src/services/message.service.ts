import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  Message,
  ChatSession,
  Attachment,
  OnlineStatus,
  TypingIndicator,
  ApiSuccessResponse,
  PaginatedResponse,
} from '../types';

/**
 * Message Service
 * Handles all messaging and chat-related API calls including:
 * - Message sending and retrieval
 * - Chat session management
 * - Typing indicators
 * - Online status
 * - Message attachments
 */

export const messageService = {
  // =====================
  // Messages
  // =====================

  /**
   * Send a message
   */
  sendMessage: async (data: {
    sessionId: string;
    content: string;
    attachments?: Attachment[];
  }): Promise<Message> => {
    const response = await api.post<ApiSuccessResponse<Message>>(
      apiEndpoints.messages.sendMessage,
      data
    );
    return response.data;
  },

  /**
   * Get messages for a chat session
   */
  getMessages: async (
    sessionId: string,
    filters?: {
      limit?: number;
      offset?: number;
      beforeTimestamp?: string;
    }
  ): Promise<PaginatedResponse<Message>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Message>>>(
      apiEndpoints.messages.getMessages.replace(':sessionId', sessionId),
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get message detail
   */
  getMessageDetail: async (messageId: string): Promise<Message> => {
    const response = await api.get<ApiSuccessResponse<Message>>(
      apiEndpoints.messages.getMessageDetail.replace(':id', messageId)
    );
    return response.data;
  },

  /**
   * Edit message
   */
  editMessage: async (messageId: string, data: { content: string }): Promise<Message> => {
    const response = await api.put<ApiSuccessResponse<Message>>(
      apiEndpoints.messages.editMessage.replace(':id', messageId),
      data
    );
    return response.data;
  },

  /**
   * Delete message
   */
  deleteMessage: async (messageId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.deleteMessage.replace(':id', messageId)
    );
    return response.data;
  },

  /**
   * Mark message as read
   */
  markAsRead: async (messageId: string): Promise<Message> => {
    const response = await api.post<ApiSuccessResponse<Message>>(
      apiEndpoints.messages.markAsRead.replace(':id', messageId),
      {}
    );
    return response.data;
  },

  /**
   * Mark all messages in session as read
   */
  markSessionAsRead: async (sessionId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.markSessionAsRead.replace(':sessionId', sessionId),
      {}
    );
    return response.data;
  },

  /**
   * Search messages
   */
  searchMessages: async (
    sessionId: string,
    query: string,
    filters?: {
      limit?: number;
      offset?: number;
    }
  ): Promise<PaginatedResponse<Message>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Message>>>(
      apiEndpoints.messages.searchMessages.replace(':sessionId', sessionId),
      { params: { query, ...filters } }
    );
    return response.data;
  },

  // =====================
  // Chat Sessions
  // =====================

  /**
   * Create or get chat session
   */
  createSession: async (data: {
    userId: string;
    type?: 'direct' | 'group';
  }): Promise<ChatSession> => {
    const response = await api.post<ApiSuccessResponse<ChatSession>>(
      apiEndpoints.messages.createSession,
      data
    );
    return response.data;
  },

  /**
   * Get chat session details
   */
  getSessionDetail: async (sessionId: string): Promise<ChatSession> => {
    const response = await api.get<ApiSuccessResponse<ChatSession>>(
      apiEndpoints.messages.getSessionDetail.replace(':id', sessionId)
    );
    return response.data;
  },

  /**
   * List chat sessions
   */
  getSessions: async (filters?: {
    unreadOnly?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<ChatSession>> => {
    const response = await api.get<
      ApiSuccessResponse<PaginatedResponse<ChatSession>>
    >(apiEndpoints.messages.listSessions, { params: filters });
    return response.data;
  },

  /**
   * Update chat session
   */
  updateSession: async (
    sessionId: string,
    data: { name?: string; description?: string }
  ): Promise<ChatSession> => {
    const response = await api.put<ApiSuccessResponse<ChatSession>>(
      apiEndpoints.messages.updateSession.replace(':id', sessionId),
      data
    );
    return response.data;
  },

  /**
   * Archive chat session
   */
  archiveSession: async (sessionId: string): Promise<ChatSession> => {
    const response = await api.post<ApiSuccessResponse<ChatSession>>(
      apiEndpoints.messages.archiveSession.replace(':id', sessionId),
      {}
    );
    return response.data;
  },

  /**
   * Delete chat session
   */
  deleteSession: async (sessionId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.deleteSession.replace(':id', sessionId)
    );
    return response.data;
  },

  // =====================
  // Typing Indicators & Status
  // =====================

  /**
   * Send typing indicator
   */
  sendTypingIndicator: async (sessionId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.typingIndicator.replace(':sessionId', sessionId),
      {}
    );
    return response.data;
  },

  /**
   * Update online status
   */
  updateOnlineStatus: async (status: OnlineStatus): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.updateStatus,
      { status }
    );
    return response.data;
  },

  /**
   * Get online status of users
   */
  getOnlineStatus: async (userIds: string[]): Promise<Record<string, OnlineStatus>> => {
    const response = await api.post<
      ApiSuccessResponse<Record<string, OnlineStatus>>
    >(apiEndpoints.messages.getStatus, { userIds });
    return response.data;
  },

  // =====================
  // Attachments
  // =====================

  /**
   * Upload attachment
   */
  uploadAttachment: async (data: FormData): Promise<Attachment> => {
    const response = await api.post<ApiSuccessResponse<Attachment>>(
      apiEndpoints.messages.uploadAttachment,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data;
  },

  /**
   * Delete attachment
   */
  deleteAttachment: async (attachmentId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.deleteAttachment.replace(':id', attachmentId)
    );
    return response.data;
  },

  /**
   * Download attachment
   */
  downloadAttachment: async (attachmentId: string): Promise<Blob> => {
    const response = await api.get<Blob>(
      apiEndpoints.messages.downloadAttachment.replace(':id', attachmentId),
      { responseType: 'blob' }
    );
    return response;
  },

  // =====================
  // Notifications
  // =====================

  /**
   * Get unread message count
   */
  getUnreadCount: async (): Promise<{
    total: number;
    bySession: Record<string, number>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        total: number;
        bySession: Record<string, number>;
      }>
    >(apiEndpoints.messages.getUnreadCount);
    return response.data;
  },

  /**
   * Clear unread status for session
   */
  clearUnreadStatus: async (sessionId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.messages.clearUnread.replace(':sessionId', sessionId),
      {}
    );
    return response.data;
  },
};
