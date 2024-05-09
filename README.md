# Notes Keeper App

## Description
This full-stack web application allows users to create, delete, and view notes. It utilizes a React frontend, an Express.js backend, and MongoDB for data storage. The purpose of the app is to demonstrate basic CRUD operations in a MERN stack application.

## Features
- **Create Notes**: Users can add new notes with titles and content.
- **Delete Notes**: Users can delete notes they no longer need.
- **View Notes**: Users can view all their saved notes in one place.

## Technologies Used
- React.js for the frontend.
- Node.js and Express.js for the backend server.
- MongoDB for the database.
- Mongoose for database schema management.

## Modifications and Enhancements
- Added validation to prevent the addition of empty notes.
- Backend setup to check and initialize sample data if the database is empty.
- Error handling improvements for better user and developer experience.

## Installation
To run this project locally, clone the repository and install the required dependencies:
git clone <your-repo-link>
cd your-project-folder
npm install
cd backend
npm install

Make sure to set up the MongoDB and configure the `.env` file with your MongoDB URI and desired port before running the server.

## Running the Application
To run the frontend:
npm start
To run the backend from the backend directory:
npm start

## Deployment
The application was was not deployed to a live server since this was optional.

## Acknowledgments
This project was developed with guidance from various resources on the web including Stack Overflow and official documentation for React, Node.js, and MongoDB.
