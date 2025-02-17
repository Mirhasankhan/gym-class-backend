Project Name-Gym Class Backend

Project Overview:-

Gym Class Backend is a [brief description of your system, e.g., "an e-commerce platform that connects buyers and sellers"]. The system allows users to [list key functionalities, such as "browse products, make purchases, and chat with sellers"

Live Link:- https://gym-class-backend.vercel.app/

Technology Used

- Typescript, Express, Mongoose, MongoDB, JWT

API Endpoints

Authentication

- POST /api/v1/auth/create-account - Register A New User.
- POST /api/v1/auth/login-account- Login User.

Admin---

- POST /api/v1/create-trainer - Create A New Trainer.
- POST /api/v1/create-schedule - Create Schedule.
- GET /api/v1/all-schedules - Get all schedules.
- GET /api/v1/all-trainers - Get all Trainer.
- PUT /api/v1/assign-trainer - Assign trainer to a schedule.

Trainers--

- GET /api/v1/trainer-schedule - Get Trainer schedules

Trainee--

- POST /api/v1/create-booking- Booking a class.
- GET /api/v1/my-bookings?email=mirhasan0000.com - Get Single User Bookings.
- DELETE /api/v1/delete-booking - Cancel a booking.

Database Schemas

Schedule Schema---

- export interface TSchedule {
  className: string;
  date: string;
  time: string;
  trainerId: string;
  trainees: { traineeName: string; email: string }[];
  }

User Schema--

- export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "trainer" | "trainee";
  };

Admin Credentials

- Username: admin@gmail.com, Password: 123456

Instructions To Run Locally

git clone https://github.com/Mirhasankhan/gym-class-backend
cd your-repo
npm install
setup .env file (mongodb url, jwt secret)
npm run build
node ./dist/server.js
