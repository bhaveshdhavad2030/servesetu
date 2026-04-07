// Servesetu Marketplace Data Models and Sample Data

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  averagePrice: number;
  averageDuration: number;
}

export interface Technician {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  experience: number;
  services: string[];
  availability: string;
  responseTime: string;
  verified: boolean;
  priceRange: { min: number; max: number };
  completedJobs: number;
  bio: string;
}

export interface Review {
  id: string;
  technicianId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Booking {
  id: string;
  technicianId: string;
  technicianName: string;
  serviceType: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "in-progress" | "completed" | "cancelled";
  price: number;
  rating?: number;
}

// Service Categories
export const serviceCategories: Service[] = [
  {
    id: "plumbing",
    name: "Plumbing",
    category: "Home Repair",
    description: "Pipe repairs, leaks, installations, and maintenance",
    icon: "🚰",
    averagePrice: 1200,
    averageDuration: 2,
  },
  {
    id: "electrical",
    name: "Electrical",
    category: "Home Repair",
    description: "Wiring, switches, repairs, and electrical installations",
    icon: "⚡",
    averagePrice: 1500,
    averageDuration: 1.5,
  },
  {
    id: "appliance",
    name: "Appliance Repair",
    category: "Home Repair",
    description: "AC, refrigerator, washing machine, and other appliances",
    icon: "🔧",
    averagePrice: 1800,
    averageDuration: 2.5,
  },
  {
    id: "hvac",
    name: "HVAC Systems",
    category: "Home Repair",
    description: "Air conditioning maintenance, repair, and installation",
    icon: "❄️",
    averagePrice: 2000,
    averageDuration: 2,
  },
  {
    id: "carpentry",
    name: "Carpentry",
    category: "Home Improvement",
    description: "Furniture assembly, shelving, and woodwork",
    icon: "🪛",
    averagePrice: 1600,
    averageDuration: 3,
  },
  {
    id: "painting",
    name: "Painting",
    category: "Home Improvement",
    description: "Wall painting, finishing, and interior decoration",
    icon: "🎨",
    averagePrice: 2500,
    averageDuration: 5,
  },
  {
    id: "lock",
    name: "Lock & Security",
    category: "Home Repair",
    description: "Lock repairs, replacements, and security installations",
    icon: "🔐",
    averagePrice: 900,
    averageDuration: 1,
  },
  {
    id: "handyman",
    name: "Handyman",
    category: "General Services",
    description: "General repairs, maintenance, and miscellaneous tasks",
    icon: "🛠️",
    averagePrice: 1000,
    averageDuration: 2,
  },
  {
    id: "smarthome",
    name: "Smart Home",
    category: "Technology",
    description: "Smart device installation, setup, and configuration",
    icon: "📱",
    averagePrice: 1500,
    averageDuration: 1.5,
  },
  {
    id: "cleaning",
    name: "Cleaning",
    category: "Home Maintenance",
    description: "Deep cleaning, regular maintenance, and sanitization",
    icon: "🧹",
    averagePrice: 1400,
    averageDuration: 3,
  },
];

// Sample Technicians
export const technicians: Technician[] = [
  {
    id: "tech-001",
    name: "Rajesh Kumar",
    avatar: "👨‍🔧",
    rating: 4.8,
    reviewCount: 342,
    experience: 12,
    services: ["Plumbing", "Water Systems", "Leak Repairs"],
    availability: "Mon-Sun, 8 AM - 8 PM",
    responseTime: "< 2 hours",
    verified: true,
    priceRange: { min: 600, max: 1500 },
    completedJobs: 1240,
    bio: "Expert plumber with 12 years of experience. Specialized in residential and commercial plumbing solutions.",
  },
  {
    id: "tech-002",
    name: "Priya Sharma",
    avatar: "👩‍🔧",
    rating: 4.9,
    reviewCount: 287,
    experience: 8,
    services: ["Electrical Work", "Wiring", "Repairs"],
    availability: "Mon-Sat, 9 AM - 6 PM",
    responseTime: "< 1 hour",
    verified: true,
    priceRange: { min: 800, max: 2000 },
    completedJobs: 856,
    bio: "Professional electrician with expertise in residential electrical installations and repairs.",
  },
  {
    id: "tech-003",
    name: "Amit Patel",
    avatar: "👨‍🔧",
    rating: 4.7,
    reviewCount: 198,
    experience: 10,
    services: ["AC Repair", "Refrigerator", "Washing Machine"],
    availability: "Mon-Sun, 10 AM - 7 PM",
    responseTime: "< 3 hours",
    verified: true,
    priceRange: { min: 1000, max: 2500 },
    completedJobs: 654,
    bio: "Certified appliance technician specializing in major home appliances and HVAC systems.",
  },
  {
    id: "tech-004",
    name: "Neha Desai",
    avatar: "👩‍🔧",
    rating: 4.6,
    reviewCount: 156,
    experience: 7,
    services: ["Painting", "Wall Finishing", "Interior Design"],
    availability: "Tue-Sun, 9 AM - 5 PM",
    responseTime: "< 4 hours",
    verified: true,
    priceRange: { min: 1500, max: 4000 },
    completedJobs: 432,
    bio: "Creative painter with expertise in residential and commercial painting projects.",
  },
  {
    id: "tech-005",
    name: "Vikram Singh",
    avatar: "👨‍🔧",
    rating: 4.8,
    reviewCount: 267,
    experience: 9,
    services: ["Carpentry", "Furniture Assembly", "Shelving"],
    availability: "Mon-Sat, 8 AM - 6 PM",
    responseTime: "< 2 hours",
    verified: true,
    priceRange: { min: 700, max: 2500 },
    completedJobs: 789,
    bio: "Skilled carpenter with expertise in custom furniture and home improvement projects.",
  },
  {
    id: "tech-006",
    name: "Anjali Verma",
    avatar: "👩‍🔧",
    rating: 4.9,
    reviewCount: 312,
    experience: 11,
    services: ["Smart Home Setup", "Device Installation", "Troubleshooting"],
    availability: "Mon-Sun, 10 AM - 8 PM",
    responseTime: "< 1 hour",
    verified: true,
    priceRange: { min: 800, max: 2500 },
    completedJobs: 1100,
    bio: "Tech-savvy professional specializing in smart home installations and IoT solutions.",
  },
];

// Sample Reviews
export const reviews: Review[] = [
  {
    id: "rev-001",
    technicianId: "tech-001",
    customerName: "Anita Singh",
    rating: 5,
    comment: "Excellent service! Fixed the leak quickly and professionally. Highly recommended.",
    date: "2 days ago",
    verified: true,
  },
  {
    id: "rev-002",
    technicianId: "tech-002",
    customerName: "Vikram Desai",
    rating: 5,
    comment: "Very professional and punctual. Completed the electrical work exactly as promised.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "rev-003",
    technicianId: "tech-003",
    customerName: "Neha Gupta",
    rating: 4,
    comment: "Good service, though took a bit longer than expected. Still very satisfied.",
    date: "2 weeks ago",
    verified: true,
  },
  {
    id: "rev-004",
    technicianId: "tech-004",
    customerName: "Rohan Kumar",
    rating: 5,
    comment: "Amazing painting work! The finish is perfect and the color is exactly what I wanted.",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: "rev-005",
    technicianId: "tech-005",
    customerName: "Priya Nair",
    rating: 4,
    comment: "Great carpentry work. Very neat and professional. Would hire again.",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "rev-006",
    technicianId: "tech-001",
    customerName: "Suresh Reddy",
    rating: 5,
    comment: "Outstanding service! Fixed multiple issues in one visit. Very knowledgeable.",
    date: "3 days ago",
    verified: true,
  },
];

// Sample Bookings for Customer Dashboard
export const sampleBookings: Booking[] = [
  {
    id: "book-001",
    technicianId: "tech-001",
    technicianName: "Rajesh Kumar",
    customerName: "Suresh Reddy",
    serviceType: "Plumbing",
    date: "2024-01-10",
    time: "2:00 PM",
    status: "completed",
    price: 1200,
    rating: 5,
  },
  {
    id: "book-002",
    technicianId: "tech-002",
    technicianName: "Priya Sharma",
    customerName: "Anita Menon",
    serviceType: "Electrical",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "confirmed",
    price: 1500,
  },
  {
    id: "book-003",
    technicianId: "tech-003",
    technicianName: "Amit Patel",
    customerName: "Ravi Singh",
    serviceType: "Appliance Repair",
    date: "2024-01-20",
    time: "3:00 PM",
    status: "pending",
    price: 1800,
  },
];

// Platform Statistics
export const platformStats = {
  totalTechnicians: 2500,
  totalCustomers: 15000,
  servicesCompleted: 50000,
  averageRating: 4.6,
  customerSatisfaction: 94,
  onTimeCompletion: 96,
};
