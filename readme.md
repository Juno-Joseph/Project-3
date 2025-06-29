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
Design the main/profile quiz page
Manage general logic for quizzes, scoring, and leaderboard.
Handle database operations (CRUD) with MongoDB
Fetching user data from MongoDB to display it
Implement fetching of random questions from Open Trivia DB API 
Sends answers to the backend to check correctness and update the score.
Post request to updateScore


## Juno Joseph
Design the sign-in/sign-up pages
Implement user authentification (right or wrong username/password)
User session management
Password hashing
Ensure responsive and accessible layouts.
Implement middleware to ensure only logged-in users can access quiz and profile routes 
Deployed the server in the cloud service

## Akash Ramkaran
Design the results page
Design MongoDB schemas for users, quizzes, and leaderboard.
View and Updating Leaderboard
Create and implement the routes
Implement middleware to ensure only logged-in users can access quiz and profile routes 
Integrate frontend with backend APIs (e.g., for quiz questions, scores, leaderboard).






