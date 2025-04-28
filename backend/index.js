require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const ingredientsRoutes = require('./routes/ingredientsRoutes');
const recipeRoutes = require('./routes/recipes');
const ingredientsCreateRoutes = require('./routes/ingredientsCreateRoutes');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/recipes', recipeRoutes); // sin multer acá
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/ingredients/create', ingredientsCreateRoutes);

const filterRoutes = require('./routes/filters');
app.use('/api/filters', filterRoutes);



app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
