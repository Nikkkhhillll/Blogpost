# Blogpost - MERN Stack Application

A full-stack blog application built with MongoDB, Express, React, and Node.js (MERN stack). This application allows users to create, read, update, and delete blog posts.

## Features

- 📝 Create new blog posts
- 📖 View all blog posts
- ✏️ Edit existing blog posts
- 🗑️ Delete blog posts
- 🔄 Real-time updates with React
- 💾 MongoDB Atlas database integration

## Tech Stack

### Frontend

- **React** (v19.0.0) - UI library
- **React Router DOM** (v7.2.0) - Client-side routing
- **Axios** (v1.8.1) - HTTP client for API calls
- **React Scripts** (v5.0.1) - Build tooling

### Backend

- **Node.js** - Runtime environment
- **Express** (v4.21.2) - Web framework
- **MongoDB** with **Mongoose** (v8.11.0) - Database and ODM
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **dotenv** (v16.4.7) - Environment variable management

## Project Structure

```
Blogpost/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js           # Home page with blog list
│   │   │   └── EditBlog.js       # Edit blog page
│   │   ├── App.js                # Main app component with routing
│   │   ├── index.js
│   │   └── ...
│   └── package.json
│
└── server/                 # Express backend
    ├── models/
    │   └── Blog.js               # Blog schema
    ├── routes/
    │   └── blogRoutes.js         # Blog API routes
    ├── index.js                  # Server entry point
    └── package.json
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (or local MongoDB installation)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Blogpost
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string.

### 3. Frontend Setup

```bash
cd ../client
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd server
npm start
# or for development with nodemon
npm run dev
```

The server will run on `http://localhost:5000`

### Start the Frontend

Open a new terminal:

```bash
cd client
npm start
```

The React app will run on `http://localhost:3000`

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/blogs`     | Get all blogs       |
| POST   | `/blogs`     | Create a new blog   |
| PUT    | `/blogs/:id` | Update a blog by ID |
| DELETE | `/blogs/:id` | Delete a blog by ID |

### Example API Requests

**Create a blog:**

```bash
POST http://localhost:5000/blogs
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is the content of my first blog post."
}
```

**Get all blogs:**

```bash
GET http://localhost:5000/blogs
```

**Update a blog:**

```bash
PUT http://localhost:5000/blogs/<blog_id>
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content."
}
```

**Delete a blog:**

```bash
DELETE http://localhost:5000/blogs/<blog_id>
```

## Database Schema

### Blog Model

```javascript
{
  title: String (required),
  content: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Available Scripts

### Frontend (client/)

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

### Backend (server/)

- `npm start` - Starts the server with Node
- `npm run dev` - Starts the server with nodemon (auto-restart on changes)

## Environment Variables

### Server

- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)

## Future Enhancements

- 🔐 User authentication and authorization
- 🖼️ Image upload for blog posts
- 🏷️ Tags and categories
- 🔍 Search functionality
- 📄 Pagination for blog lists
- 💬 Comments system
- 👤 User profiles
- 📱 Responsive design improvements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ using the MERN stack

---

**Note:** Make sure to never commit your `.env` file to version control. It should be listed in `.gitignore`.
