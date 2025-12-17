# hotelbooking

Backend API for hotelbooking

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js/Express + Prisma
- **Frontend Source**: GitHub ([Repository](https://github.com/HimaShankarReddyEguturi/Hotelbookinguidesign))

## Project Structure

```
hotelbooking/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- User Authentication
- Room Availability Check
- Booking Management

## API Endpoints

- `POST /api/register` - Endpoint for user registration.
- `GET /api/rooms/availability?checkIn={date}&checkOut={date}` - Endpoint to check room availability.
- `POST /api/bookings` - Endpoint for booking a room.

## License

MIT
