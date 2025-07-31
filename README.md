# ScribeBoard

**ScribeBoard** is a full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React, and Node.js). The app provides a clean and efficient interface for creating, reading, updating, and deleting notes. It is designed for fast performance in both development and production environments.

---

## Live Demo

You can view the live application here:
**https://scribeboard.onrender.com/**

---

## Technologies Used

### Frontend

* [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/) for fast builds)
* HTML5, CSS3 with Tailwind CSS

### Backend

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) via Mongoose
* Middleware: Rate Limiter for basic API security

### Deployment

* Hosted on [Render](https://render.com)
* Continuous deployment via GitHub integration

---

## Features

* Create, read, update, and delete notes
* Retrieve individual notes by ID
* API rate limiting to prevent abuse
* Fully integrated frontend served by Express in production
* Clean project structure suitable for scaling

---

## Project Structure

```
scribeboard/
├── frontend/         # Vite-powered React frontend
│   ├── public/
│   ├── src/
│   └── dist/         # Production build output
├── backend/          # Express server with REST API
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── package.json      # Project-level scripts (build, start)
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following are installed on your system:

* [Node.js (v16+)](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)

---

### Clone the Repository

```bash
git clone https://github.com/your-username/ScribeBoard.git
cd scribeboard
```

---

### Install Dependencies and Build Frontend

```bash
npm run build
```

This command will:

* Install dependencies in both `backend/` and `frontend/`
* Build the React frontend (output will be in `frontend/dist/`)

---

### Start the Production Server

```bash
npm start
```

Alternatively, you can directly run from the backend folder:

```bash
cd backend
NODE_ENV=production node server.js
```

Once the server starts, the application will be available at:
**[http://localhost:5000](http://localhost:5000)**

---

## Environment Configuration

Create a `.env` file in the `backend/` directory with the following contents:

```env
NODE_ENV=production
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

Replace `your-mongodb-connection-string` with your actual MongoDB URI.

---

## API Endpoints

All endpoints are prefixed with `/api/notes`.

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/notes`     | Get all notes           |
| GET    | `/api/notes/:id` | Get note by ID          |
| POST   | `/api/notes`     | Create a new note       |
| PUT    | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note           |

---

## Future Improvements

* User authentication using JWT
* User-specific note storage
* Tagging and categorization system
* Search and filter functionality
* Enhanced error handling and input validation

---

