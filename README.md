# Auction System

The Auction System is a full-stack web application that allows users to participate in online auctions. Users can create auction items, place bids, and view auction results. The platform provides a seamless experience for both buyers and sellers.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [License](#license)

## Features

- **User Authentication**: Secure login, signup, and logout functionality.
- **Auction Management**: Create, edit, and delete auction items.
- **Bidding System**: Place bids on auction items in real-time.
- **Profile Management**: View user profile, active auctions, bids, and won auctions.
- **Search and Pagination**: Search for auction items and navigate through paginated results.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and build tooling.

### Backend
- **Node.js**: For server-side scripting.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For database management.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For secure authentication.
- **bcrypt.js**: For password hashing.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or on a cloud service)

### Clone the Repository
```bash
git clone https://github.com/Rajput-xv/auction-system.git
cd auction-system
```

### Install Dependencies for Backend
```bash
cd server
npm install
```

### Create Environment Variables
Create a new file named `.env` in the `server` directory and add the following variables:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/AuctionSystem # your connection string
JWT_SECRET=your-secret-key 
ORIGIN=http://localhost:5173
```

### Run the Backend Server
```bash
npm run dev
```

### Install Dependencies and Run Frontend
```bash
cd ../client
npm install
npm run dev
```

### Access the Application
Open your web browser and navigate to `http://localhost:5173` to access the application.

### License
This project is licensed under the MIT License.