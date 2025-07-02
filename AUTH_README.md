# AuthJS with Firebase Admin Auth - Next.js Demo

This is a complete authentication system using AuthJS (NextAuth.js) integrated with Firebase Admin Auth for email/password sign-in.

## Features

- ✅ Next.js 14 with TypeScript
- ✅ `/src` directory structure
- ✅ Email/password authentication
- ✅ Firebase Admin SDK integration
- ✅ AuthJS (NextAuth.js) configuration
- ✅ Login/signup pages with validation
- ✅ Authentication middleware for route protection
- ✅ TypeScript types and interfaces
- ✅ Tailwind CSS for styling
- ✅ Production-ready error handling

## Demo Credentials

For testing purposes (when Firebase is not configured):
- **Email**: `demo@example.com`
- **Password**: `password123`

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `.env.example` to `.env.local` and fill in your Firebase Admin SDK credentials:
   ```bash
   cp .env.example .env.local
   ```

3. **Configure Firebase:**
   - Create a Firebase project
   - Generate a service account key
   - Add the credentials to `.env.local`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
```

## Project Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── [...nextauth]/route.ts    # NextAuth.js API route
│   │   └── signup/route.ts           # User registration API
│   ├── auth/
│   │   ├── signin/page.tsx           # Sign-in page
│   │   └── signup/page.tsx           # Sign-up page
│   ├── dashboard/page.tsx            # Protected dashboard page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout with AuthProvider
│   └── page.tsx                      # Home page
├── components/auth/
│   ├── auth-provider.tsx             # NextAuth SessionProvider wrapper
│   └── sign-out-button.tsx           # Sign-out component
├── lib/
│   ├── auth.ts                       # Authentication utilities
│   ├── auth-config.ts                # NextAuth.js configuration
│   ├── firebase-admin.ts             # Firebase Admin SDK setup
│   └── validations.ts                # Form validation schemas
├── types/
│   └── auth.ts                       # Authentication TypeScript types
└── middleware.ts                     # Route protection middleware
```

## Authentication Flow

1. **User Registration**: Users create an account via `/auth/signup`
2. **User Login**: Users sign in via `/auth/signin`
3. **Session Management**: JWT-based sessions managed by NextAuth.js
4. **Route Protection**: Middleware protects authenticated routes
5. **User Data**: Stored securely in Firebase Firestore

## API Routes

- `GET/POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints
- `POST /api/auth/signup` - User registration endpoint

## Protected Routes

The following routes require authentication:
- `/dashboard/*` - User dashboard and related pages
- `/profile/*` - User profile pages
- `/api/protected/*` - Protected API endpoints

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Authentication**: NextAuth.js (AuthJS)
- **Backend**: Firebase Admin SDK
- **Database**: Firebase Firestore
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Validation**: Zod
- **Password Hashing**: bcryptjs

## Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Create a service account:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
4. Add the credentials to your `.env.local` file

## Security Features

- **Password Hashing**: Passwords are hashed using bcryptjs
- **JWT Sessions**: Secure JWT-based session management
- **Environment Variables**: Sensitive data stored in environment variables
- **Input Validation**: Form inputs validated with Zod schemas
- **CSRF Protection**: Built-in CSRF protection via NextAuth.js
- **Route Protection**: Middleware-based route protection

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Production Deployment

1. Set up your Firebase project and service account
2. Configure environment variables on your hosting platform
3. Build and deploy:
   ```bash
   npm run build
   npm start
   ```

## License

This project is created for demonstration purposes.