/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

import api from './api';
import { apiEndpoints } from '../config/api.config';
import {
  User,
  AuthResponse,
  LoginCredentials,
  RegisterData,
  OTPVerificationData,
  SocialAuthData,
} from '../types';

export const authService = {
  /**
   * Register user
   */
  register: async (data: RegisterData) => {
    return api.post(apiEndpoints.auth.register, data);
  },

  /**
   * Login user
   */
  login: async (credentials: LoginCredentials) => {
    return api.post(apiEndpoints.auth.login, credentials);
  },

  /**
   * Verify OTP
   */
  verifyOtp: async (data: OTPVerificationData) => {
    return api.post(apiEndpoints.auth.verifyOtp, data);
  },

  /**
   * Social login
   */
  socialLogin: async (data: SocialAuthData) => {
    return api.post(apiEndpoints.auth.socialLogin, data);
  },

  /**
   * Refresh token
   */
  refreshToken: async (refreshToken: string) => {
    return api.post(apiEndpoints.auth.refreshToken, { refreshToken });
  },

  /**
   * Logout
   */
  logout: async () => {
    return api.post(apiEndpoints.auth.logout);
  },

  /**
   * Reset password
   */
  resetPassword: async (email: string) => {
    return api.post(apiEndpoints.auth.resetPassword, { email });
  },
};

export default authService;
