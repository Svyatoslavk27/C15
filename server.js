const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Встановлюємо MIME-тип для файлів .wasm
app.use((req, res, next) => {
    if (req.path.endsWith('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    next();
});
app.use(express.static(path.join(__dirname)));

// Обслуговування файлів із поточної директорії
app.get('/:fileName', (req, res) => {
    const filePath = path.join(__dirname, req.params.fileName);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send('File not found');
        }
    });
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
    console.log(`Відкрийте HTML-додаток: http://localhost:${PORT}/index.html`);
});
