import express from "express";
const app = express();
import { albumsRouter } from './api/get-albums';
// import * as countries from './api/get-countries';
import { countries } from './api/get-countries';

const port = 4201 || process.env.PORT;

// albumsRouter();

app.use('/albums', albumsRouter)

app.use('/countries', countries);

app.get("/", (req, res) => {
    res.send("Hi 3333!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});