// Імпортуємо необхідні модулі
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Налаштування для роботи з JSON в запитах
app.use(express.json());

// Створюємо маршрути
app.get('/', (req, res) => {
    res.send('Welcome to Air Quality Monitoring API!');
});

// Приклад API маршруту
app.get('/api/air-quality', (req, res) => {
    // Логіка для отримання даних про якість повітря
    res.json({
        location: "Kyiv",
        aqi: 50,
        status: "Good"
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

