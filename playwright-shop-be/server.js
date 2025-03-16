
require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const db = require('./db'); // Importujemy bazę danych

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Rejestracja użytkownika
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Podaj nazwę użytkownika i hasło' });
    }

    try {
        // Hashowanie hasła
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.run(sql, [username, hashedPassword], function (err) {
            if (err) {
                console.error('Błąd SQL:', err.message);
                return res.status(500).json({ error: 'Błąd przy dodawaniu użytkownika', details: err.message });
            }
            res.status(201).json({ message: 'Użytkownik zarejestrowany', userId: this.lastID });
        });
    } catch (err) {
        console.error('Błąd podczas hashowania:', err.message);
        res.status(500).json({ error: 'Błąd serwera' });
    }
});



// Logowanie użytkownika
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Podaj nazwę użytkownika i hasło' });
    }

    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, [username], async (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Błąd serwera' });
        }
        if (!row) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
        }

        // Porównanie hasła
        const isMatch = await bcrypt.compare(password, row.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
        }

        // Tworzenie tokena JWT
        const token = jwt.sign({ userId: row.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Zalogowano pomyślnie', token });
    });
});

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Brak tokena, autoryzacja odmówiona' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Nieprawidłowy token' });
        }
        req.user = decoded;
        next();
    });
};

app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Dostęp do profilu użytkownika!', userId: req.user.userId });
});



app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
