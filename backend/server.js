const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running', status: 'success' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'backend-api' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});