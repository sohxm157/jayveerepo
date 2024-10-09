const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve gallery.html
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});

// API route to get image names
app.get('/api/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'jayveepng');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        // Filter for image files (you can customize this as needed)
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.json(images);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
