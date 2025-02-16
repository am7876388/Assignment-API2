# RESTful API with MongoDB using Node.js and Express

## Assignment Overview
This assignment involves building a RESTful API using Node.js, Express, and MongoDB. You will implement database interaction, CRUD operations, and advanced middleware handling.

## Requirements

### 1. Connect to MongoDB (30 marks)
- Use Mongoose to connect your Node.js application to a MongoDB database. *(10 marks)*
- Create a schema for storing user data with proper validations. *(20 marks)*

### 2. Define REST API Routes with MongoDB (50 marks)
- **GET /users** – Fetch all users from the MongoDB collection.
- **GET /users/:id** – Fetch details of a specific user by MongoDB ObjectId.
- **POST /user** – Add a new user and save it in MongoDB.
- **PUT /user/:id** – Update details of an existing user.
- **DELETE /user/:id** – Delete a user by MongoDB ObjectId.

## Installation and Setup

### Prerequisites
- Node.js installed
- MongoDB installed or access to a MongoDB Atlas cluster

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/am7876388/Assignment-API2
   ```
2. Navigate to the project directory:
   ```bash
   cd project-folder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following lines:
     ```env
     MONGODB_URI=mongodb://localhost:27017/
     PORT=8000
     ```
5. Start the server:
   ```bash
   npm start
   ```
6. The API will be running at `http://localhost:8000`.

## Submission Guidelines (20 marks)
- Submit a zip folder of your code.
- Provide a document with:
  - Screenshots of your test results.
  - Screenshots of MongoDB Compass showing results after each API execution. *(15 marks)*
- Ensure clear comments explaining the logic in your code. *(5 marks)*
