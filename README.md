# EcoYatra Backend

## Tech Stack
- Node.js
- Express.js
- JavaScript

## Installation

### Backend

```bash
cd backend
npm install
npm run dev

### frontend

cd eco-yatra
npm install
npm run dev


---

### 3. Export Postman Collection (2 minutes)

In Postman:

- Open **Collections**
- Click the **⋯ (three dots)** next to your collection
- Click **Export**
- Choose **Collection v2.1**
- Save it as required by your internship instructions.

---

### 4. Take Screenshots (10–15 minutes)

Take screenshots of:

- ✅ Home page showing destination cards loaded from the backend.
- ✅ Chrome DevTools → **Network** tab showing the successful API request (`GET /api/destinations`).
- ✅ Postman collection or a few successful API responses (if required by your module).

Combine them into the required PDF.

---

### 5. Push to GitHub

Commit and push your final Week 4 work:

```bash
git add .
git commit -m "feat: connect frontend with backend APIs"
git push origin main


## Database Setup

EcoYatra uses **PostgreSQL** as the cloud-hosted database and **Prisma ORM** for database management.

PostgreSQL was selected because EcoYatra contains structured data such as destinations and will later include related data such as local food, hidden gems, stays, itineraries, and travel experiences.

### Prerequisites

Before running the backend, make sure you have:

- Node.js installed
- A PostgreSQL database connection URL
- Backend dependencies installed

### 1. Install Backend Dependencies

Open a terminal inside the backend folder:

```bash
cd backend
npm install

2. Configure Environment Variables

Create a .env file inside the backend folder.

Use the .env.example file as a reference:

PORT=5000
DATABASE_URL="your_postgresql_database_url_here"

Replace the placeholder with your own PostgreSQL connection URL.

Important: Never commit the real .env file or database credentials to GitHub.

3. Generate Prisma Client

Run:

npx prisma generate
4. Apply Database Migrations

Run:

npx prisma migrate dev

This creates the database tables defined in:

backend/prisma/schema.prisma
5. Seed Initial Destination Data

Run:

node prisma/seed.js

This adds the initial EcoYatra destination records to the PostgreSQL database.

6. Start the Backend Server

Run:

npm run dev

The backend API will run at:

http://localhost:5000
7. Start the Frontend

Open another terminal from the main project folder and run:

npm run dev

The frontend will run at:

http://localhost:5173
Database Flow
React Frontend
      ↓
Axios Service Layer
      ↓
Express REST API
      ↓
Prisma ORM
      ↓
PostgreSQL Database

The application supports persistent Create, Read, Update, Delete, and Search operations for destinations.


Also add this short section **before** the setup section:

```md
## Database Choice

EcoYatra uses PostgreSQL because the application contains structured travel data and is designed to support relationships between destinations and future entities such as local food, hidden gems, stays, guides, and itineraries.

Prisma ORM is used to define the database schema, manage migrations, and communicate with PostgreSQL from the Express backend.