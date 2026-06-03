# User Authentication and Authorization with Bearer Token

This Node.js application implements user authentication and authorization using Bearer Tokens (JWT). It follows the MVC architecture and uses MongoDB Atlas for database management. The application provides secure user registration, login, and protected user profile access using JSON Web Tokens.

## Table of Contents

- Features
- Technologies Used
- Project Structure
- Setup Instructions
- Environment Variables
- API Endpoints
- Error Handling
- Postman Documentation

---

## Features

- User Registration with password hashing using bcrypt.
- User Login with JWT token generation.
- Protected routes using Bearer Token authentication.
- Retrieve authenticated user profile information.
- MongoDB Atlas database integration.
- MVC architecture for better code organization.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- Postman

---

## Project Structure

```text
authentication-and-authorization/
│
├── controllers/
│   └── authController.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── utils/
│   └── config.js
│
├── app.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/your-username/authentication-and-authorization.git
```

### Navigate to Project Directory

```bash
cd authentication-and-authorization
```

### Install Dependencies

```bash
npm install
```

### Create .env File

Create a `.env` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=5000
```

### Start the Server

```bash
npm start
```

For development mode:

```bash
npm run dev
```

---

## API Endpoints

### User Registration

**Endpoint**

```http
POST /auth/api/v1/register
```

**Request Body**

```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "examplePassword"
}
```

**Success Response**

```json
{
  "message": "User registered successfully"
}
```

**Error Response**

```json
{
  "error": "User already exists."
}
```

---

### User Login

**Endpoint**

```http
POST /auth/api/v1/login
```

**Request Body**

```json
{
  "email": "user@example.com",
  "password": "examplePassword"
}
```

**Success Response**

```json
{
  "token": "jwt_token_here",
  "message": "User logged in successfully"
}
```

**Error Response**

```json
{
  "error": "User does not exist"
}
```

or

```json
{
  "error": "Invalid credentials"
}
```

---

### Get User Profile

**Endpoint**

```http
GET /auth/api/v1/user
```

**Headers**

```http
Authorization: Bearer your_jwt_token
```

**Success Response**

```json
{
  "_id": "user_id",
  "username": "exampleUser",
  "email": "user@example.com"
}
```

**Error Response**

```json
{
  "message": "Unauthorized access."
}
```

---

## Error Handling

The application provides proper error handling for:

- Duplicate user registration.
- Invalid login credentials.
- Missing authentication token.
- Invalid or expired JWT token.
- Database connection failures.
- Internal server errors.

---

## Environment Variables

| Variable | Description |
|-----------|-------------|
| MONGODB_URI | MongoDB Atlas Connection String |
| SECRET_KEY | Secret key used for JWT signing |
| PORT | Application port number |

---

## Testing with Postman

### Register User

```http
POST http://localhost:5000/auth/api/v1/register
```

### Login User

```http
POST http://localhost:5000/auth/api/v1/login
```

### Get User Profile

```http
GET http://localhost:5000/auth/api/v1/user
```

Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Postman Documentation

Postman Collection URL:

```text
Add your Postman Documentation URL here
```

---

## Author

**Tamoharini R**

Mechatronics Engineering Student | Aspiring Full Stack Developer