/**
 * Review Type Definitions
 * Defines all review and rating-related types for TypeScript
 */

export interface Review {
  id: string;
  bookingId: string;
  technicianId: string;
  customerId: string;
  customerName: string;
  rating: number; // 1-5
  title?: string;
  comment: string;
  photos?: string[];
  helpful: number;
  unhelpful: number;
  verified: boolean; // Verified by completed booking
  status: 'pending' | 'approved' | 'rejected';
  response?: ReviewResponse;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewResponse {
  id: string;
  technicianId: string;
  reviewId: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewFilter {
  technicianId?: string;
  customerId?: string;
  minRating?: number;
  maxRating?: number;
  verified?: boolean;
  status?: 'pending' | 'approved' | 'rejected';
  sortBy?: 'recent' | 'rating' | 'helpful';
  page?: number;
  pageSize?: number;
}

export interface ReviewListResponse {
  success: boolean;
  data: {
    reviews: Review[];
    total: number;
    page: number;
    pageSize: number;
    averageRating: number;
    ratingDistribution: RatingDistribution;
  };
}

export interface RatingDistribution {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

export interface CreateReviewData {
  bookingId: string;
  technicianId: string;
  rating: number;
  title?: string;
  comment: string;
  photos?: File[];
}

export interface TechnicianRatingStats {
  technicianId: string;
  averageRating: number;
  totalReviews: number;
  ratingDistribution: RatingDistribution;
  mostRecentReview?: Review;
}

export interface ReviewNotification {
  bookingId: string;
  customerId: string;
  technicianId: string;
  dueDate: string; // ISO string
}
