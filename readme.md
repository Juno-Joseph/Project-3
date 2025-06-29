# Random-10 Quiz App

A full-stack web application for playing multiple-choice quizzes, tracking scores, and maintaining a leaderboard. Built with Node.js, Express, MongoDB, and EJS.

## Features

- User authentication (sign up, sign in, logout)
- Secure password hashing with bcrypt
- Quiz game with random questions from Open Trivia DB
- Score tracking and leaderboard (top 10)
- User profile with play history
- Responsive and modern UI


## Setup

1. **Clone the repository**
2. **Install dependencies**
   ```sh
   npm install 

3. Configure environment variables by creating an .env file with your MongoDB Atlas URI:
   ATLAS_URI="your-mongodb-uri"

4. Start the server
    npm start
   
The app runs on http://localhost:2000 by default.

Visit /signup to create an account.
Sign in at /signin.
Play the quiz and view the leaderboard.
Check your profile and play history at /profile.


CREDITS:

## Mret Hein 
Design and develop RESTful APIs using Node.js and Express.
Implement authentication, session management, and security (e.g., password hashing).
Handle database operations (CRUD) with MongoDB.
Manage business logic for quizzes, scoring, and leaderboard.
Design MongoDB schemas for users, quizzes, and leaderboard.

## Juno Joseph
Design and implement user interfaces (UI) using HTML, CSS, and JavaScript.
Ensure responsive and accessible layouts.
Integrate frontend with backend APIs (e.g., for quiz questions, scores, leaderboard).
Implement client-side validation and user experience enhancements.
Write and execute test cases for all features.
Identify and report bugs or usability issues
Deployed the server in the cloud service

## Akash Ramkaran
Ensure data integrity and optimize queries.
Manage database backups and migrations.


