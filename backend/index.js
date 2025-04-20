require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/recipes', recipeRoutes); // sin multer acá

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
