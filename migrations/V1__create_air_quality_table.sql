CREATE TABLE IF NOT EXISTS air_quality (
    id SERIAL PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    pm25 REAL NOT NULL,
    pm10 REAL NOT NULL,
    no2 REAL NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
