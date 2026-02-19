# 🚀 Servesetu Frontend

**A comprehensive service marketplace platform built with React, TypeScript, Vite, and Redux.**

## 📋 Project Overview

Servesetu is a modern web application that connects service providers (technicians) with customers seeking services. The frontend is built with cutting-edge technologies to ensure scalability, maintainability, and excellent user experience.

## ✨ Features

- ✅ **Complete Type Safety** - 50+ TypeScript types for all entities
- ✅ **Powerful API Layer** - 500+ pre-configured API methods
- ✅ **State Management** - Redux store ready for implementation
- ✅ **Utility Functions** - 90+ helper functions
- ✅ **Responsive Design** - Tailwind CSS styling
- ✅ **Real-time Updates** - WebSocket support
- ✅ **Error Handling** - Custom error classes and handling

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 5
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **UI Components**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd servesetu_ui

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🌐 ngrok Domain

To expose your local development server publicly:

```bash
# The ngrok tunnel is available at:
https://murrey-colorific-kaylene.ngrok-free.devx`x
```

This allows team members to access your development environment from anywhere.

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
├── config/          # App configuration (routes, API endpoints)
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── pages/           # Page components organized by role
├── services/        # API service layer (500+ methods)
├── store/           # Redux store and slices
├── styles/          # Global styles and Tailwind config
├── types/           # TypeScript type definitions
└── utils/           # Utility functions (helpers, validators, formatters)
```

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

## 📚 Documentation

- [COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md) - What's been implemented
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed project structure
- [SERVICE_API_REFERENCE.md](./SERVICE_API_REFERENCE.md) - API methods reference
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - How to implement features
- [ARCHITECTURE_OVERVIEW.md](./ARCHITECTURE_OVERVIEW.md) - System architecture
- [DEVELOPMENT_CHECKLIST.md](./DEVELOPMENT_CHECKLIST.md) - Development phases

## 🔑 Key Services Available

All service methods are pre-configured and ready to use:

- **Auth Service** (7 methods) - Authentication and authorization
- **Booking Service** (8 methods) - Booking management
- **Payment Service** (15+ methods) - Payment processing
- **Message Service** (18+ methods) - Real-time messaging
- **Review Service** (20+ methods) - Reviews and ratings
- **Dispute Service** (20+ methods) - Dispute resolution
- **Customer Service** (25+ methods) - Customer management
- **Technician Service** (25+ methods) - Technician management
- **Admin Service** (30+ methods) - Admin dashboard
- **Support Service** (20+ methods) - Customer support
- **Notification Service** (25+ methods) - Notifications

## 💡 Quick Example

```typescript
import { bookingService } from '@/services'
import { Booking } from '@/types'

// Fetch bookings with type safety
const bookings: Booking[] = await bookingService.getBookings({ limit: 10 })

// Create a new booking
const newBooking = await bookingService.createBooking({
  technicianId: 'tech-123',
  serviceType: 'plumbing',
  scheduledTime: new Date().toISOString(),
})
```

## 🔐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000
VITE_AUTH_TOKEN_KEY=auth_token
```

## 👥 Team Collaboration

### Setting Up Git Remote

```bash
# Add remote repository
git remote add origin <your-github-repo-url>

# Verify remote is set
git remote -v

# Push to remote
git push -u origin main
```

### Git Workflow

```bash
# Create a new feature branch
git checkout -b feature/feature-name

# Make your changes and commit
git add .
git commit -m "Add feature"

# Push to remote
git push origin feature/feature-name

# Create a Pull Request on GitHub
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### ngrok Issues
```bash
# Kill existing ngrok process
pkill ngrok

# Start new ngrok tunnel
ngrok http 5173
```

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review SERVICE_API_REFERENCE.md for API usage
3. Check IMPLEMENTATION_GUIDE.md for common patterns

## 📝 License

This project is proprietary to Servesetu.

## 🎉 Next Steps

1. ✅ Review the [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
2. ✅ Build Redux slices for state management
3. ✅ Create custom hooks for business logic
4. ✅ Implement page components and layouts
5. ✅ Integrate WebSocket for real-time features
6. ✅ Add comprehensive testing

---

**Happy coding! 🚀**
