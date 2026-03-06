const express = require('express');
const app = express();
const port = 3000;

app.get ('/', (req, res) => {
    res.send('Server del mio blog');
}); 

const posts = [
    {
        titolo:"Post 1",
        contenuto:"Contenuto del primo post",
        immagine:"immagine1.jpg",
        tags:["tag1","tag2"],
    }
    ];

