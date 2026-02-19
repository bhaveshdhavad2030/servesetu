import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  Payment,
  PaymentOrder,
  Wallet,
  WalletTransaction,
  Payout,
  Refund,
  ApiSuccessResponse,
} from '../types';

/**
 * Payment Service
 * Handles all payment-related API calls including:
 * - Payment orders and verification
 * - Wallet operations
 * - Payout management
 * - Refund processing
 */

export const paymentService = {
  // =====================
  // Payment Orders
  // =====================

  /**
   * Create a payment order for booking
   */
  createOrder: async (data: {
    bookingId: string;
    amount: number;
    description?: string;
  }): Promise<PaymentOrder> => {
    const response = await api.post<ApiSuccessResponse<PaymentOrder>>(
      apiEndpoints.payment.createOrder,
      data
    );
    return response.data;
  },

  /**
   * Verify payment order after successful payment
   */
  verifyPayment: async (data: {
    orderId: string;
    paymentId: string;
    signature: string;
  }): Promise<Payment> => {
    const response = await api.post<ApiSuccessResponse<Payment>>(
      apiEndpoints.payment.verifyPayment,
      data
    );
    return response.data;
  },

  /**
   * Get payment details
   */
  getPaymentDetail: async (paymentId: string): Promise<Payment> => {
    const response = await api.get<ApiSuccessResponse<Payment>>(
      apiEndpoints.payment.getPaymentDetail.replace(':id', paymentId)
    );
    return response.data;
  },

  /**
   * List user payments with filters
   */
  getPayments: async (filters?: {
    status?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ payments: Payment[]; total: number }> => {
    const response = await api.get<
      ApiSuccessResponse<{ payments: Payment[]; total: number }>
    >(apiEndpoints.payment.listPayments, { params: filters });
    return response.data;
  },

  // =====================
  // Wallet Operations
  // =====================

  /**
   * Get wallet balance
   */
  getWallet: async (): Promise<Wallet> => {
    const response = await api.get<ApiSuccessResponse<Wallet>>(
      apiEndpoints.payment.getWallet
    );
    return response.data;
  },

  /**
   * Add money to wallet
   */
  addToWallet: async (data: {
    amount: number;
    paymentMethodId?: string;
  }): Promise<WalletTransaction> => {
    const response = await api.post<ApiSuccessResponse<WalletTransaction>>(
      apiEndpoints.payment.addToWallet,
      data
    );
    return response.data;
  },

  /**
   * Get wallet transactions
   */
  getWalletTransactions: async (filters?: {
    type?: 'credit' | 'debit';
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ transactions: WalletTransaction[]; total: number }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        transactions: WalletTransaction[];
        total: number;
      }>
    >(apiEndpoints.payment.getWalletTransactions, { params: filters });
    return response.data;
  },

  // =====================
  // Refunds
  // =====================

  /**
   * Request refund for payment
   */
  requestRefund: async (data: {
    paymentId: string;
    reason: string;
    amount?: number;
  }): Promise<Refund> => {
    const response = await api.post<ApiSuccessResponse<Refund>>(
      apiEndpoints.payment.requestRefund,
      data
    );
    return response.data;
  },

  /**
   * Get refund details
   */
  getRefundDetail: async (refundId: string): Promise<Refund> => {
    const response = await api.get<ApiSuccessResponse<Refund>>(
      apiEndpoints.payment.getRefundDetail.replace(':id', refundId)
    );
    return response.data;
  },

  /**
   * List refunds
   */
  getRefunds: async (filters?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ refunds: Refund[]; total: number }> => {
    const response = await api.get<
      ApiSuccessResponse<{ refunds: Refund[]; total: number }>
    >(apiEndpoints.payment.listRefunds, { params: filters });
    return response.data;
  },

  // =====================
  // Payouts (for technicians)
  // =====================

  /**
   * Request payout
   */
  requestPayout: async (data: {
    amount: number;
    bankAccountId?: string;
  }): Promise<Payout> => {
    const response = await api.post<ApiSuccessResponse<Payout>>(
      apiEndpoints.payment.requestPayout,
      data
    );
    return response.data;
  },

  /**
   * Get payout details
   */
  getPayoutDetail: async (payoutId: string): Promise<Payout> => {
    const response = await api.get<ApiSuccessResponse<Payout>>(
      apiEndpoints.payment.getPayoutDetail.replace(':id', payoutId)
    );
    return response.data;
  },

  /**
   * List payouts
   */
  getPayouts: async (filters?: {
    status?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ payouts: Payout[]; total: number }> => {
    const response = await api.get<
      ApiSuccessResponse<{ payouts: Payout[]; total: number }>
    >(apiEndpoints.payment.listPayouts, { params: filters });
    return response.data;
  },

  /**
   * Cancel payout request
   */
  cancelPayout: async (payoutId: string): Promise<Payout> => {
    const response = await api.post<ApiSuccessResponse<Payout>>(
      apiEndpoints.payment.cancelPayout.replace(':id', payoutId),
      {}
    );
    return response.data;
  },

  // =====================
  // Payment Methods
  // =====================

  /**
   * Add payment method (card, UPI, etc.)
   */
  addPaymentMethod: async (data: {
    type: 'card' | 'upi' | 'netbanking';
    details: Record<string, string>;
  }): Promise<{ methodId: string }> => {
    const response = await api.post<
      ApiSuccessResponse<{ methodId: string }>
    >(apiEndpoints.payment.addPaymentMethod, data);
    return response.data;
  },

  /**
   * Remove payment method
   */
  removePaymentMethod: async (methodId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.payment.removePaymentMethod.replace(':id', methodId)
    );
    return response.data;
  },

  /**
   * List payment methods
   */
  getPaymentMethods: async (): Promise<{ methods: Record<string, any>[] }> => {
    const response = await api.get<
      ApiSuccessResponse<{ methods: Record<string, any>[] }>
    >(apiEndpoints.payment.getPaymentMethods);
    return response.data;
  },
};
