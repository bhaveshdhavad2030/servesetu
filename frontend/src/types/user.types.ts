/**
 * User Type Definitions
 * Defines all user-related types for TypeScript
 */

export interface User {
  id: string;
  userType: 'customer' | 'technician' | 'admin';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePhoto?: string;
  status: 'active' | 'inactive' | 'suspended' | 'deleted';
  createdAt: string;
  updatedAt: string;
}

export interface CustomerProfile extends User {
  userType: 'customer';
  addresses: Address[];
  favoriteServices: string[];
  totalBookings: number;
  averageRating: number;
  wallet: {
    balance: number;
    totalSpent: number;
  };
}

export interface TechnicianProfile extends User {
  userType: 'technician';
  bio: string;
  experience: number;
  services: string[];
  specializations: string[];
  certifications: string[];
  documents: {
    aadhaar: string;
    panCard: string;
    bankDetails: string;
  };
  rating: number;
  reviewCount: number;
  completedJobs: number;
  responseTime: string;
  serviceAreas: string[];
  availability: AvailabilitySlot[];
  priceRange: {
    min: number;
    max: number;
  };
  verified: boolean;
  verificationStatus:
    | 'pending'
    | 'email_verified'
    | 'phone_verified'
    | 'background_check_passed'
    | 'skill_test_passed'
    | 'active';
  wallet: {
    balance: number;
    totalEarnings: number;
  };
}

export interface AdminProfile extends User {
  userType: 'admin';
  role: 'admin' | 'super_admin' | 'support_staff';
  permissions: string[];
  department?: string;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  isDefault: boolean;
}

export interface AvailabilitySlot {
  day: number; // 0-6, Monday to Sunday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  isAvailable: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  refreshToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  userType: 'customer' | 'technician';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export interface OTPVerificationData {
  userId: string;
  otpType: 'email' | 'phone';
  otp: string;
}

export interface SocialAuthData {
  provider: 'google' | 'apple';
  idToken: string;
  userType: 'customer' | 'technician';
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}
