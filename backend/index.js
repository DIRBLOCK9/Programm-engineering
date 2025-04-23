const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Підключення до бази даних
const pool = new Pool({
  host: 'db',       // назва сервісу з docker-compose
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'air_monitoring'
});

app.use(express.json());

// Новий ендпоїнт: отримання історії
app.get('/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM air_quality ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch air quality history' });
  }
});


// (залишаємо інші ендпоїнти, якщо є)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

