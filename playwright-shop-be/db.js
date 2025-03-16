const sqlite3 = require('sqlite3').verbose();

// Połączenie z bazą danych
const db = new sqlite3.Database('./database/database.db', (err) => {
    if (err) {
        console.error('Błąd połączenia z bazą danych:', err.message);
    } else {
        console.log('Połączono z bazą SQLite.');
    }
});

// Tworzenie tabeli użytkowników
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )`);
});

module.exports = db;
