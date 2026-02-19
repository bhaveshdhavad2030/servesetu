/**
 * Dispute Type Definitions
 * Defines all dispute and resolution-related types for TypeScript
 */

export interface Dispute {
  id: string;
  bookingId: string;
  customerId: string;
  technicianId: string;
  reason: string;
  description: string;
  evidence: DisputeEvidence[];
  status: 'open' | 'in_progress' | 'resolved' | 'escalated' | 'closed';
  level: 1 | 2 | 3;
  assignedTo?: string; // Admin ID
  resolution?: DisputeResolution;
  messages: DisputeMessage[];
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface DisputeEvidence {
  id: string;
  type: 'chat' | 'photo' | 'document' | 'other';
  url: string;
  description?: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface DisputeResolution {
  id: string;
  disputeId: string;
  decidedBy: string; // Admin ID
  decision: 'refund_100' | 'refund_50' | 'no_refund' | 'compensation';
  refundAmount: number;
  reason: string;
  comments?: string;
  decidedAt: string;
}

export interface DisputeMessage {
  id: string;
  disputeId: string;
  authorId: string;
  authorType: 'customer' | 'technician' | 'admin';
  message: string;
  attachments?: Attachment[];
  createdAt: string;
}

export interface Attachment {
  id: string;
  url: string;
  type: string;
  size: number;
}

export interface DisputeFilter {
  status?: string;
  level?: number;
  assignedTo?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: 'recent' | 'oldest';
  page?: number;
  pageSize?: number;
}

export interface DisputeListResponse {
  success: boolean;
  data: {
    disputes: Dispute[];
    total: number;
    page: number;
    pageSize: number;
    pending: number;
    escalated: number;
  };
}

export interface CreateDisputeData {
  bookingId: string;
  reason: string;
  description: string;
  evidence?: File[];
}

export interface DisputeStats {
  totalDisputes: number;
  openDisputes: number;
  resolvedDisputes: number;
  escalatedDisputes: number;
  averageResolutionTime: number; // in hours
  resolutionRate: number; // percentage
}

export interface RaiseDisputePayload {
  bookingId: string;
  reason: string;
  description: string;
  evidence?: DisputeEvidence[];
}
