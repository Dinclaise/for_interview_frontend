const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());

const SECRET_KEY = 'your_secret_key';
const REFRESH_SECRET_KEY = 'your_refresh_secret_key';

let refreshTokens = [];

// Аутентификация и выдача токенов
app.post('/login', (req, res) => {
    const { username } = req.body;
    const accessToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username }, REFRESH_SECRET_KEY);
    refreshTokens.push(refreshToken);

    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });
    res.json({ accessToken });
});

// Обновление токена
app.post('/refresh-token', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

// Защищенный маршрут
app.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ message: 'This is a protected route', user });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
