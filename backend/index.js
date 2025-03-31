const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});

