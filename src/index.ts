import express from "express";
const app = express();
import {albumsRouter} from './api/get-albums';


const port = 4201 || process.env.PORT;

// albumsRouter();

app.use('/albums',albumsRouter)

app.get("/", (req, res) => {
    res.send("Hi 3333!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});