const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});


const posts = [
    {
        titolo: "Post 1",           
        contenuto: "Contenuto del primo post",
        immagine: "immagine1.jpg",
        tags: ["tag1", "tag2"]
    },
    {
        titolo: "Post 2",           
        contenuto: "Contenuto del secondo post",
        immagine: "immagine2.jpg",
        tags: ["tag1", "tag2"]
    },
    {
        titolo: "Post 3",
        contenuto: "Contenuto del terzo post",
        immagine: "immagine3.jpg",
        tags: ["tag1", "tag2"]
    },
    {
        titolo: "Post 4",
        contenuto: "Contenuto del quarto post",
        immagine: "immagine4.jpg",
        tags: ["tag1", "tag2"]
    },
    {
        titolo: "Post 5",
        contenuto: "Contenuto del quinto post",
        immagine: "immagine5.jpg",
        tags: ["tag1", "tag2"]
    }
];

app.get('/bacheca', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});











