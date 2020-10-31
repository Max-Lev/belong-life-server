import express from "express";
import { albumsRouter } from './api/get-albums';
import { countries } from './api/get-countries';
import path from 'path';

const port = 4201 || process.env.PORT;

const app = express();

const dir = path.join(__dirname, '/public/flags');

app.use('/assets',express.static(dir));

// app.use(express.static(__dirname + '/public/flags'));


app.use('/albums', albumsRouter)

app.use('/countries', countries);

app.get("/", (req, res) => {
    res.send("Hi!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});