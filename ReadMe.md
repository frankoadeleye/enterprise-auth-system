# Enterprise Authentication System (EAS)

A production-style full-stack authentication system built with the MERN stack.

This project demonstrates how modern applications handle:

- User registration
- Email verification
- Secure login
- JWT authentication
- Protected routes
- Password reset workflows
- Email delivery
- Session persistence
- Authentication security best practices

The project was built as a portfolio case study focused on authentication architecture rather than business-specific features.

---

## Live Demo

Frontend:
[Add Deployment URL]

Backend API:
[Add API URL]

---

## Screenshots

### Signup

(Add screenshot)

### Login

(Add screenshot)

### Email Verification

(Add screenshot)

### Forgot Password

(Add screenshot)

### Reset Password

(Add screenshot)

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- Zustand
- React Hook Form
- Zod
- Axios
- Tailwind CSS
- DaisyUI
- Lucide Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Mailtrap
- Cookie Parser

---

# Features

## Authentication

- User Signup
- User Login
- Logout
- Session Persistence
- Protected Routes
- Guest Routes

## Email Verification

- Verification code generation
- Verification code expiration
- Verification code resend
- Automatic login after verification

## Password Recovery

- Forgot password flow
- Secure reset tokens
- Token expiration
- One-time-use reset tokens

## Security

- Password hashing with bcrypt
- JWT authentication
- HttpOnly cookies
- Verification code expiration
- Reset token hashing
- Email enumeration protection
- Protected API routes

---

# Architecture Overview

The application follows a layered architecture:

Frontend

```text
Pages
  ↓
Zustand Store
  ↓
Auth Service
  ↓
Backend API
```

Backend

```text
Routes
  ↓
Controllers
  ↓
Models
  ↓
MongoDB
```

This separation keeps responsibilities clear and makes the application easier to maintain and scale.

---

# Authentication Flow

## Signup

```text
User submits signup form
        ↓
Backend validates data
        ↓
Password hashed with bcrypt
        ↓
Verification code generated
        ↓
User saved to MongoDB
        ↓
Verification email sent
```

---

## Email Verification

```text
User enters verification code
        ↓
Backend validates code
        ↓
Expiration checked
        ↓
Account marked verified
        ↓
JWT cookie generated
        ↓
User authenticated
```

---

## Login

```text
User submits credentials
        ↓
Email verified check
        ↓
Password comparison
        ↓
JWT cookie generated
        ↓
User authenticated
```

---

## Password Reset

```text
Reset requested
        ↓
Raw token generated
        ↓
Token hashed
        ↓
Hash stored in MongoDB
        ↓
Raw token emailed
        ↓
User submits token
        ↓
Submitted token hashed
        ↓
Hash comparison
        ↓
Password updated
```

---

# Security Decisions

## Password Hashing

Passwords are never stored in plain text.

bcrypt is used to hash passwords before storage.

---

## Reset Token Hashing

The raw password-reset token is never stored in MongoDB.

Only a SHA-256 hash of the token is stored.

This means a database leak would not expose valid reset tokens.

---

## Email Enumeration Protection

The forgot-password endpoint always returns the same response.

Example:

```text
"If an account exists, a password reset email will be sent."
```

This prevents attackers from determining whether an email address exists.

---

## Verification Code Expiration

Verification codes automatically expire.

Expired codes cannot be used to activate accounts.

---

## JWT Authentication

Authenticated users receive a signed JWT stored inside an HttpOnly cookie.

This prevents frontend JavaScript from directly accessing the token.

---

## Route Protection

Protected backend endpoints require a valid JWT.

Unauthorized users are denied access before controller execution.

---

# Email System

Mailtrap is used for transactional emails.

Implemented emails:

- Verification Email
- Welcome Email
- Password Reset Request
- Password Reset Success

The email layer is isolated so another provider can be swapped in later with minimal changes.

---

# Project Structure

```text
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── mailtrap/
├── db/
└── server.js

frontend/
│
├── components/
├── pages/
├── services/
├── store/
├── hooks/
├── schemas/
├── utils/
└── App.tsx
```

---

# Testing Completed

The system was tested against both standard and edge-case scenarios.

### Signup

- Valid signup
- Missing fields
- Duplicate accounts
- Invalid passwords

### Email Verification

- Correct verification code
- Invalid verification code
- Expired verification code
- Resend verification code
- Old code invalidation

### Login

- Valid login
- Invalid credentials
- Unverified account protection

### Password Reset

- Forgot password request
- Unknown email protection
- Invalid reset token
- Expired reset token
- Successful password reset
- Token reuse prevention

### Session Handling

- Logout
- Browser refresh
- Session persistence
- Protected route access
- Unauthorized access prevention

### Error Handling

- Backend validation errors
- Network failures
- Unexpected server errors

---

# Local Development

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

---

## Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

MAILTRAP_TOKEN=

MAILTRAP_ENDPOINT=
```

---

## Run Backend

```bash
npm run dev
```

---

## Run Frontend

```bash
npm run dev
```

---

# Future Improvements

- Rate limiting
- Refresh token rotation
- Account lockout protection
- OAuth authentication (Google/GitHub)
- Two-factor authentication (2FA)
- Audit logging
- User profile management

---

# Author

Frank Adeleye

Frontend Developer | React | TypeScript | MERN Stack

Built as a portfolio authentication case study demonstrating modern authentication architecture and security practices.