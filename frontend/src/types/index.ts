/**
 * Main Types Index
 * Re-exports all type definitions
 */

export type * from './user.types';
export type * from './booking.types';
export type * from './payment.types';
export type * from './message.types';
export type * from './review.types';
export type * from './dispute.types';
export type * from './api.types';

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  averagePrice: number;
  averageDuration: number;
  image?: string;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: string;
}

// Dashboard stats
export interface DashboardStats {
  totalUsers: number;
  totalTechnicians: number;
  totalBookings: number;
  totalRevenue: number;
  activeBookings: number;
  pendingDisputes: number;
  lastUpdated: string;
}
