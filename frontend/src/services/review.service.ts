import api from './api';
import { apiEndpoints } from '../config/api.config';
import type {
  Review,
  ReviewResponse,
  RatingDistribution,
  ApiSuccessResponse,
  PaginatedResponse,
} from '../types';

/**
 * Review Service
 * Handles all review and rating-related API calls including:
 * - Review submission and retrieval
 * - Review moderation
 * - Rating distribution
 * - Helpful/unhelpful votes
 */

export const reviewService = {
  // =====================
  // Review CRUD
  // =====================

  /**
   * Create a review for a booking/technician
   */
  createReview: async (data: {
    bookingId: string;
    rating: number;
    title?: string;
    comment?: string;
    images?: string[];
  }): Promise<Review> => {
    const response = await api.post<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.createReview,
      data
    );
    return response.data;
  },

  /**
   * Get review details
   */
  getReviewDetail: async (reviewId: string): Promise<Review> => {
    const response = await api.get<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.getReviewDetail.replace(':id', reviewId)
    );
    return response.data;
  },

  /**
   * List reviews for a technician or booking
   */
  getReviews: async (
    filters?: {
      technicianId?: string;
      bookingId?: string;
      minRating?: number;
      maxRating?: number;
      verified?: boolean;
      approved?: boolean;
      sortBy?: 'recent' | 'helpful' | 'rating_high' | 'rating_low';
      limit?: number;
      offset?: number;
    }
  ): Promise<PaginatedResponse<Review>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Review>>>(
      apiEndpoints.reviews.listReviews,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Update review
   */
  updateReview: async (
    reviewId: string,
    data: {
      rating?: number;
      title?: string;
      comment?: string;
      images?: string[];
    }
  ): Promise<Review> => {
    const response = await api.put<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.updateReview.replace(':id', reviewId),
      data
    );
    return response.data;
  },

  /**
   * Delete review
   */
  deleteReview: async (reviewId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.reviews.deleteReview.replace(':id', reviewId)
    );
    return response.data;
  },

  // =====================
  // Review Responses (Technician Replies)
  // =====================

  /**
   * Add response to review (for technicians)
   */
  addReviewResponse: async (
    reviewId: string,
    data: { comment: string }
  ): Promise<ReviewResponse> => {
    const response = await api.post<ApiSuccessResponse<ReviewResponse>>(
      apiEndpoints.reviews.addResponse.replace(':id', reviewId),
      data
    );
    return response.data;
  },

  /**
   * Update review response
   */
  updateReviewResponse: async (
    responseId: string,
    data: { comment: string }
  ): Promise<ReviewResponse> => {
    const response = await api.put<ApiSuccessResponse<ReviewResponse>>(
      apiEndpoints.reviews.updateResponse.replace(':id', responseId),
      data
    );
    return response.data;
  },

  /**
   * Delete review response
   */
  deleteReviewResponse: async (responseId: string): Promise<{ success: boolean }> => {
    const response = await api.delete<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.reviews.deleteResponse.replace(':id', responseId)
    );
    return response.data;
  },

  // =====================
  // Review Ratings & Statistics
  // =====================

  /**
   * Get rating distribution for technician
   */
  getRatingDistribution: async (technicianId: string): Promise<RatingDistribution> => {
    const response = await api.get<ApiSuccessResponse<RatingDistribution>>(
      apiEndpoints.reviews.getRatingDistribution.replace(':technicianId', technicianId)
    );
    return response.data;
  },

  /**
   * Get average rating for technician
   */
  getAverageRating: async (
    technicianId: string
  ): Promise<{ average: number; totalReviews: number; verifiedReviews: number }> => {
    const response = await api.get<
      ApiSuccessResponse<{
        average: number;
        totalReviews: number;
        verifiedReviews: number;
      }>
    >(apiEndpoints.reviews.getAverageRating.replace(':technicianId', technicianId));
    return response.data;
  },

  /**
   * Get my reviews (for customers)
   */
  getMyReviews: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Review>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Review>>>(
      apiEndpoints.reviews.getMyReviews,
      { params: filters }
    );
    return response.data;
  },

  /**
   * Get reviews I've received (for technicians)
   */
  getReceivedReviews: async (filters?: {
    minRating?: number;
    maxRating?: number;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Review>> => {
    const response = await api.get<ApiSuccessResponse<PaginatedResponse<Review>>>(
      apiEndpoints.reviews.getReceivedReviews,
      { params: filters }
    );
    return response.data;
  },

  // =====================
  // Review Moderation (Admin)
  // =====================

  /**
   * Approve review (admin)
   */
  approveReview: async (reviewId: string): Promise<Review> => {
    const response = await api.post<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.approveReview.replace(':id', reviewId),
      {}
    );
    return response.data;
  },

  /**
   * Reject review (admin)
   */
  rejectReview: async (reviewId: string, data: { reason: string }): Promise<Review> => {
    const response = await api.post<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.rejectReview.replace(':id', reviewId),
      data
    );
    return response.data;
  },

  /**
   * Flag review as inappropriate (user)
   */
  flagReview: async (reviewId: string, data: { reason: string }): Promise<{ success: boolean }> => {
    const response = await api.post<ApiSuccessResponse<{ success: boolean }>>(
      apiEndpoints.reviews.flagReview.replace(':id', reviewId),
      data
    );
    return response.data;
  },

  /**
   * Get flagged reviews (admin)
   */
  getFlaggedReviews: async (filters?: {
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Review & { flags: any[] }>> => {
    const response = await api.get<
      ApiSuccessResponse<PaginatedResponse<Review & { flags: any[] }>>
    >(apiEndpoints.reviews.getFlaggedReviews, { params: filters });
    return response.data;
  },

  // =====================
  // Helpful/Unhelpful Votes
  // =====================

  /**
   * Mark review as helpful
   */
  markHelpful: async (reviewId: string): Promise<Review> => {
    const response = await api.post<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.markHelpful.replace(':id', reviewId),
      {}
    );
    return response.data;
  },

  /**
   * Mark review as unhelpful
   */
  markUnhelpful: async (reviewId: string): Promise<Review> => {
    const response = await api.post<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.markUnhelpful.replace(':id', reviewId),
      {}
    );
    return response.data;
  },

  /**
   * Remove helpful vote
   */
  removeHelpfulVote: async (reviewId: string): Promise<Review> => {
    const response = await api.delete<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.removeHelpfulVote.replace(':id', reviewId)
    );
    return response.data;
  },

  // =====================
  // Media
  // =====================

  /**
   * Upload review image
   */
  uploadReviewImage: async (reviewId: string, file: File): Promise<{ imageUrl: string }> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<ApiSuccessResponse<{ imageUrl: string }>>(
      apiEndpoints.reviews.uploadImage.replace(':id', reviewId),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  /**
   * Delete review image
   */
  deleteReviewImage: async (reviewId: string, imageUrl: string): Promise<Review> => {
    const response = await api.delete<ApiSuccessResponse<Review>>(
      apiEndpoints.reviews.deleteImage.replace(':id', reviewId),
      { params: { imageUrl } }
    );
    return response.data;
  },
};
