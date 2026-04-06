const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Mock connection string - USER will replace with their own)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vinchinaDB';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('⚠️  MongoDB Connection Warning (Local DB might not be running). The inquiry form will not save messages, but the landing page will still work.');
  });

// Mongoose Schema for Inquiries
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Routes
app.post('/api/inquire', async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: 'Inquiry received successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save inquiry.' });
  }
});

app.get('/api/info', (req, res) => {
    res.json({
        title: "Estrellas de Vinchina (Estrellas Diaguitas)",
        description: "An extraordinary archaeological site of the Cultura Aguada in La Rioja, Argentina.",
        coordinates: "-28.749167, -68.204444",
        significance: "Agricultural calendar and fertility ritual center."
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
