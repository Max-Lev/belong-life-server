// "use strict";
import express from 'express';
import axios from 'axios';
const albumsRouter = express.Router();
import * as albums from '../db/albums.json';
// import { RequestPromise } from 'request-promise';
// import { Promise } from 'promise';


const url = `https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES`;

const token = `Bearer BQC66SvQ7u4TjJUuTnXzUKUNmc4VqFVjFKMRc-MdoILAvc4jOEOYR_ACUIClEjQkfPikZYw0HXCyDAR0vha03srTReaoI3PoVrUYEGesLl1n9xGMJ6C1tU8sFHVqG-ZBoVYPx9_B7slwOc9re4Wex647ulUtEKW-nrKYMXw`

// const loginUrl = `
// https://accounts.spotify.com/authorize?client_id=9a4a7443288d4a55b2de40bc7a57b838&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09
// `
// const loginUrl = `
// https://accounts.spotify.com/authorize?client_id=9a4a7443288d4a55b2de40bc7a57b838&response_type=code&scope=user-read-private%20user-read-email&state=34fFs29kd09
// `


albumsRouter.get('/', (req, res) => {

    getAlbums().then(a => {
        res.status(200);
        res.send(a);
    });

});

const getAlbums = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(albums.albums);
        }, 2000);
    });

};

export { albumsRouter };