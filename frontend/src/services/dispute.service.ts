import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  Dispute,
  DisputeEvidence,
  DisputeResolution,
  DisputeMessage,
  ApiSuccessResponse,
  PaginatedResponse,
} from '../types';

/**
 * Dispute Service
 * Handles all dispute and conflict resolution-related API calls including:
 * - Dispute creation and management
 * - Evidence submission
 * - Dispute resolution
 * - Communication between parties
 */

export const disputeService = {
  // =====================
  // Dispute CRUD
  // =====================

  /**
   * Create a dispute for a booking
   */
  createDispute: async (data: {
    bookingId: string;
    type: 'quality' | 'payment' | 'cancellation' | 'technician_no_show' | 'other';
    title: string;
    description: string;
    claimedAmount?: number;
  }): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.createDispute,
      data
    );
    return response.data;
  },

  /**
   * Get dispute details
   */
  getDisputeDetail: async (disputeId: string): Promise<Dispute> => {
    const response = await api.get<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.getDisputeDetail.replace(':id', disputeId)
    );
    return response.data;
  },

  /**
   * List disputes with filters
   */
  getDisputes: async (filters?: {
    status?: 'open' | 'under_review' | 'resolved' | 'closed';
    type?: string;
    role?: 'initiator' | 'respondent' | 'admin';
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Dispute>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Dispute>>>(
      apiEndpoints.disputes.listDisputes,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Update dispute status (for admin)
   */
  updateDispute: async (
    disputeId: string,
    data: { status?: string; notes?: string }
  ): Promise<Dispute> => {
    const response = await api.put<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.updateDispute.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  /**
   * Close dispute (only if resolved or rejected)
   */
  closeDispute: async (disputeId: string): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.closeDispute.replace(':id', disputeId),
      {}
    );
    return response.data;
  },

  // =====================
  // Dispute Evidence
  // =====================

  /**
   * Submit evidence for dispute
   */
  submitEvidence: async (
    disputeId: string,
    data: {
      type: 'document' | 'image' | 'video' | 'audio' | 'text';
      title: string;
      description?: string;
      file?: File;
      content?: string;
    }
  ): Promise<DisputeEvidence> => {
    const formData = new FormData();
    if (data.file) {
      formData.append('file', data.file);
    }
    formData.append('type', data.type);
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (data.content) formData.append('content', data.content);

    const response = await api.post<ApiSuccessResponse<DisputeEvidence>>(
      apiEndpoints.disputes.submitEvidence.replace(':id', disputeId),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  /**
   * Get dispute evidence
   */
  getEvidence: async (disputeId: string): Promise<DisputeEvidence[]> => {
    const response = await api.get<ApiSuccessResponse<DisputeEvidence[]>>(
      apiEndpoints.disputes.getEvidence.replace(':id', disputeId)
    );
    return response.data;
  },

  /**
   * Delete evidence
   */
  deleteEvidence: async (disputeId: string, evidenceId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.disputes.deleteEvidence
        .replace(':disputeId', disputeId)
        .replace(':evidenceId', evidenceId)
    );
    return response.data;
  },

  // =====================
  // Dispute Resolution
  // =====================

  /**
   * Submit resolution proposal
   */
  submitResolution: async (
    disputeId: string,
    data: {
      proposedResolution: 'full_refund' | 'partial_refund' | 'no_refund' | 'rebook_free';
      amount?: number;
      explanation: string;
    }
  ): Promise<DisputeResolution> => {
    const response = await api.post<ApiSuccessResponse<DisputeResolution>>(
      apiEndpoints.disputes.submitResolution.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  /**
   * Get resolution details
   */
  getResolution: async (disputeId: string): Promise<DisputeResolution | null> => {
    const response = await api.get<ApiSuccessResponse<DisputeResolution | null>>(
      apiEndpoints.disputes.getResolution.replace(':id', disputeId)
    );
    return response.data;
  },

  /**
   * Accept resolution
   */
  acceptResolution: async (disputeId: string): Promise<DisputeResolution> => {
    const response = await api.post<ApiSuccessResponse<DisputeResolution>>(
      apiEndpoints.disputes.acceptResolution.replace(':id', disputeId),
      {}
    );
    return response.data;
  },

  /**
   * Reject resolution
   */
  rejectResolution: async (
    disputeId: string,
    data: { reason: string }
  ): Promise<DisputeResolution> => {
    const response = await api.post<ApiSuccessResponse<DisputeResolution>>(
      apiEndpoints.disputes.rejectResolution.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  /**
   * Finalize dispute resolution (admin)
   */
  finalizeResolution: async (disputeId: string): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.finalizeResolution.replace(':id', disputeId),
      {}
    );
    return response.data;
  },

  // =====================
  // Dispute Communication
  // =====================

  /**
   * Send dispute message
   */
  sendMessage: async (
    disputeId: string,
    data: {
      message: string;
      attachments?: string[];
    }
  ): Promise<DisputeMessage> => {
    const response = await api.post<ApiSuccessResponse<DisputeMessage>>(
      apiEndpoints.disputes.sendMessage.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  /**
   * Get dispute messages
   */
  getMessages: async (
    disputeId: string,
    filters?: {
      limit?: number;
      offset?: number;
    }
  ): Promise<PaginatedResponse<DisputeMessage>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<DisputeMessage>>>(
      apiEndpoints.disputes.getMessages.replace(':id', disputeId),
      { params: filters }
    );
    return response.data;
  },

  // =====================
  // Dispute Statistics (Admin)
  // =====================

  /**
   * Get dispute statistics
   */
  getStatistics: async (filters?: {
    startDate?: string;
    endDate?: string;
  }): Promise<{
    totalDisputes: number;
    openDisputes: number;
    resolvedDisputes: number;
    avgResolutionTime: number;
    disputesByType: Record<string, number>;
    resolutionBreakdown: Record<string, number>;
  }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        totalDisputes: number;
        openDisputes: number;
        resolvedDisputes: number;
        avgResolutionTime: number;
        disputesByType: Record<string, number>;
        resolutionBreakdown: Record<string, number>;
      }>
    >(apiEndpoints.disputes.getStatistics, { params: filters });
    return response.data;
  },

  /**
   * Get escalation requests (admin)
   */
  getEscalations: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Dispute & { escalationReason: string }>> => {
    const response = await api.get<
      ApiSuccessResponse<PaginatedResponse<Dispute & { escalationReason: string }>>
    >(apiEndpoints.disputes.getEscalations, { params: filters });
    return response.data;
  },

  /**
   * Assign arbiter to dispute (admin)
   */
  assignArbiter: async (disputeId: string, data: { arbiterId: string }): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.assignArbiter.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  /**
   * Escalate to higher authority
   */
  escalateDispute: async (
    disputeId: string,
    data: { reason: string; level: 'manager' | 'director' }
  ): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.escalateDispute.replace(':id', disputeId),
      data
    );
    return response.data;
  },

  // =====================
  // Mediation
  // =====================

  /**
   * Request mediation
   */
  requestMediation: async (disputeId: string): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.requestMediation.replace(':id', disputeId),
      {}
    );
    return response.data;
  },

  /**
   * Accept mediation session
   */
  acceptMediation: async (disputeId: string): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.acceptMediation.replace(':id', disputeId),
      {}
    );
    return response.data;
  },

  /**
   * Decline mediation session
   */
  declineMediation: async (disputeId: string, data: { reason?: string }): Promise<Dispute> => {
    const response = await api.post<ApiSuccessResponse<Dispute>>(
      apiEndpoints.disputes.declineMediation.replace(':id', disputeId),
      data
    );
    return response.data;
  },
};
