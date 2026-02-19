/**
 * Payment Type Definitions
 * Defines all payment-related types for TypeScript
 */

export interface Payment {
  id: string;
  bookingId: string;
  customerId: string;
  amount: number;
  tax: number;
  discount: number;
  totalAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  method: 'razorpay' | 'wallet' | 'upi' | 'card';
  orderId?: string;
  transactionId?: string;
  refundId?: string;
  refundReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  customerId: string;
  bookingId: string;
  notes?: Record<string, any>;
}

export interface PaymentVerification {
  orderId: string;
  paymentId: string;
  signature: string;
}

export interface Refund {
  id: string;
  paymentId: string;
  amount: number;
  reason: string;
  status: 'pending' | 'processed' | 'failed';
  createdAt: string;
  processedAt?: string;
}

export interface Wallet {
  userId: string;
  balance: number;
  totalCredit: number;
  totalDebit: number;
  lastTransactionAt?: string;
}

export interface WalletTransaction {
  id: string;
  walletId: string;
  type: 'credit' | 'debit';
  amount: number;
  balance: number;
  description: string;
  relatedId?: string;
  createdAt: string;
}

export interface Payout {
  id: string;
  technicianId: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  method: 'bank_transfer' | 'upi';
  bankDetails?: {
    accountHolder: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
  upiId?: string;
  requestedAt: string;
  processedAt?: string;
  failureReason?: string;
}

export interface PaymentMethodData {
  methodType: string;
  methodDetails: Record<string, any>;
}
