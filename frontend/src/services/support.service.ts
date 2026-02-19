import api from './api';
import { apiEndpoints } from '../config/api.config';
import type { ApiSuccessResponse, PaginatedResponse } from '../types';

/**
 * Support Service
 * Handles all customer support and ticket management-related API calls including:
 * - Support ticket creation and management
 * - FAQ and help articles
 * - Live chat support
 * - Feedback and surveys
 */

export const supportService = {
  // =====================
  // Support Tickets
  // =====================

  /**
   * Create support ticket
   */
  createTicket: async (data: {
    category: string;
    subject: string;
    description: string;
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    attachments?: string[];
    relatedId?: string;
  }): Promise<{ ticketId: string; status: string }> => {
    const response = await api.post<ApiSuccessResponse<{ ticketId: string; status: string }>>(
      apiEndpoints.support.createTicket,
      data
    );
    return response.data;
  },

  /**
   * Get ticket details
   */
  getTicketDetail: async (ticketId: string): Promise<any> => {
    const response = await api.get<ApiSuccessResponse<any>>(
      apiEndpoints.support.getTicketDetail.replace(':id', ticketId)
    );
    return response.data;
  },

  /**
   * List support tickets
   */
  getTickets: async (filters?: {
    status?: string;
    category?: string;
    priority?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.support.listTickets,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Update ticket
   */
  updateTicket: async (
    ticketId: string,
    data: {
      status?: string;
      priority?: string;
      message?: string;
    }
  ): Promise<any> => {
    const response = await api.put<ApiSuccessResponse<any>>(
      apiEndpoints.support.updateTicket.replace(':id', ticketId),
      data
    );
    return response.data;
  },

  /**
   * Close ticket
   */
  closeTicket: async (ticketId: string, data?: { reason?: string }): Promise<any> => {
    const response = await api.post<ApiSuccessResponse<any>>(
      apiEndpoints.support.closeTicket.replace(':id', ticketId),
      data || {}
    );
    return response.data;
  },

  /**
   * Reopen ticket
   */
  reopenTicket: async (ticketId: string, data: { reason: string }): Promise<any> => {
    const response = await api.post<ApiSuccessResponse<any>>(
      apiEndpoints.support.reopenTicket.replace(':id', ticketId),
      data
    );
    return response.data;
  },

  // =====================
  // Ticket Messages
  // =====================

  /**
   * Add message to ticket
   */
  addTicketMessage: async (
    ticketId: string,
    data: {
      message: string;
      attachments?: string[];
    }
  ): Promise<{ messageId: string }> => {
    const response = await api.post<ApiSuccessResponse<{ messageId: string }>>(
      apiEndpoints.support.addTicketMessage.replace(':id', ticketId),
      data
    );
    return response.data;
  },

  /**
   * Get ticket messages
   */
  getTicketMessages: async (
    ticketId: string,
    filters?: {
      limit?: number;
      offset?: number;
    }
  ): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.support.getTicketMessages.replace(':id', ticketId),
      { params: filters }
    );
    return response.data;
  },

  /**
   * Upload attachment to ticket
   */
  uploadTicketAttachment: async (ticketId: string, file: File): Promise<{ fileUrl: string }> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<ApiSuccessResponse<{ fileUrl: string }>>(
      apiEndpoints.support.uploadTicketAttachment.replace(':id', ticketId),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  // =====================
  // FAQ & Help
  // =====================

  /**
   * Search FAQ
   */
  searchFAQ: async (query: string): Promise<
    Array<{
      id: string;
      question: string;
      answer: string;
      category: string;
      helpful: number;
      views: number;
    }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<
        Array<{
          id: string;
          question: string;
          answer: string;
          category: string;
          helpful: number;
          views: number;
        }>
      >
    >(apiEndpoints.support.searchFAQ, { params: { query } });
    return response.data;
  },

  /**
   * Get FAQ by category
   */
  getFAQByCategory: async (
    category: string
  ): Promise<
    Array<{
      id: string;
      question: string;
      answer: string;
      helpful: number;
      views: number;
    }>
  > => {
    const response = await api.get<
      ApiSuccessResponse<
        Array<{
          id: string;
          question: string;
          answer: string;
          helpful: number;
          views: number;
        }>
      >
    >(apiEndpoints.support.getFAQByCategory.replace(':category', category));
    return response.data;
  },

  /**
   * Mark FAQ as helpful
   */
  markFAQHelpful: async (faqId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.support.markFAQHelpful.replace(':id', faqId),
      {}
    );
    return response.data;
  },

  /**
   * Get help articles
   */
  getHelpArticles: async (filters?: {
    category?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<any>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<any>>>(
      apiEndpoints.support.getHelpArticles,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get article detail
   */
  getArticleDetail: async (articleId: string): Promise<any> => {
    const response = await api.get<ApiSuccessResponse<any>>(
      apiEndpoints.support.getArticleDetail.replace(':id', articleId)
    );
    return response.data;
  },

  // =====================
  // Live Chat Support
  // =====================

  /**
   * Start live chat session
   */
  startLiveChat: async (data: {
    category?: string;
    message?: string;
  }): Promise<{ sessionId: string; agentName?: string }> => {
    const response = await api.post<
      ApiSuccessResponse<{ sessionId: string; agentName?: string }>
    >(apiEndpoints.support.startLiveChat, data);
    return response.data;
  },

  /**
   * Send live chat message
   */
  sendChatMessage: async (
    sessionId: string,
    data: { message: string }
  ): Promise<{ messageId: string }> => {
    const response = await api.post<ApiSuccessResponse<{ messageId: string }>>(
      apiEndpoints.support.sendChatMessage.replace(':sessionId', sessionId),
      data
    );
    return response.data;
  },

  /**
   * Get chat history
   */
  getChatHistory: async (sessionId: string): Promise<any[]> => {
    const response = await api.get<ApiSuccessResponse<any[]>>(
      apiEndpoints.support.getChatHistory.replace(':sessionId', sessionId)
    );
    return response.data;
  },

  /**
   * End live chat session
   */
  endLiveChat: async (sessionId: string): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.support.endLiveChat.replace(':sessionId', sessionId),
      {}
    );
    return response.data;
  },

  /**
   * Get agent availability
   */
  getAgentAvailability: async (): Promise<{
    isAvailable: boolean;
    estimatedWaitTime?: number;
    activeAgents?: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        isAvailable: boolean;
        estimatedWaitTime?: number;
        activeAgents?: number;
      }>
    >(apiEndpoints.support.getAgentAvailability);
    return response.data;
  },

  // =====================
  // Feedback & Surveys
  // =====================

  /**
   * Submit ticket feedback
   */
  submitTicketFeedback: async (
    ticketId: string,
    data: {
      rating: number;
      comment?: string;
    }
  ): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.support.submitTicketFeedback.replace(':id', ticketId),
      data
    );
    return response.data;
  },

  /**
   * Get survey
   */
  getSurvey: async (): Promise<any> => {
    const response = await api.get<ApiSuccessResponse<any>>(
      apiEndpoints.support.getSurvey
    );
    return response.data;
  },

  /**
   * Submit survey response
   */
  submitSurveyResponse: async (data: {
    surveyId: string;
    responses: Record<string, any>;
  }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.support.submitSurveyResponse,
      data
    );
    return response.data;
  },

  /**
   * Get contact information
   */
  getContactInfo: async (): Promise<{
    email: string;
    phone?: string;
    address?: string;
    supportHours?: string;
    socialMedia?: Record<string, string>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        email: string;
        phone?: string;
        address?: string;
        supportHours?: string;
        socialMedia?: Record<string, string>;
      }>
    >(apiEndpoints.support.getContactInfo);
    return response.data;
  },

  /**
   * Get support statistics
   */
  getSupportStatistics: async (): Promise<{
    averageResponseTime: number;
    resolutionRate: number;
    satisfactionScore: number;
    totalTicketsResolved: number;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        averageResponseTime: number;
        resolutionRate: number;
        satisfactionScore: number;
        totalTicketsResolved: number;
      }>
    >(apiEndpoints.support.getSupportStatistics);
    return response.data;
  },
};
