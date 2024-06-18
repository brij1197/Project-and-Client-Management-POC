
# Project and Client Management POC

This is a proof of concept for a Project and Client Management system built with Vite and React on the frontend, and Node.js with GraphQL on the backend.

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) operations for projects and clients
- Responsive and user-friendly interface
- Real-time updates with GraphQL subscriptions
- Efficient data management and querying with GraphQL

## Technologies Used

### Frontend

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

### Database

- [MongoDB](https://www.mongodb.com/)

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/brij1197/project-client-management-poc.git
    cd project-client-management-poc
    ```

2. **Install frontend dependencies:**

    ```sh
    cd frontend
    npm install
    ```

3. **Install backend dependencies:**

    ```sh
    cd ../backend
    npm install
    ```

### Configuration

1. **Create a `.env` file in the backend directory with the following content:**

    ```env
    PORT=8000
    MONGO_URI=<your_mongodb_connection_string>
    NODE_ENV='development'
    ```

## Docker Setup

### Prerequisites

- [Docker](https://www.docker.com/)

### Running the Application with Docker

1. **Build the Docker images:**

    ```sh
    docker-compose build
    ```

2. **Run the Docker containers:**

    ```sh
    docker-compose up
    ```

3. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Usage

### Running the Application

1. **Start the backend server:**

    ```sh
    cd backend
    npm start
    ```

2. **Start the frontend development server:**

    ```sh
    cd ../frontend
    npm run dev
    ```

3. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```
