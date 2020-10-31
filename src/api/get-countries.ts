import express from 'express';
const router = express.Router();
import axios, { AxiosResponse } from 'axios';
import { IBackEndResponse } from 'models/back-end-response.model';
import { Flags } from 'models/flags.model';
import { Countries } from 'models/country.model';

const countriesUrl = `https://corona-virus-world-and-india-data.p.rapidapi.com/api`;
const authUrl = {
    'x-rapidapi-key': '0a8b8e412bmshf8d89fcf8cd282cp17368fjsn6d7a84ac0ff0'
};
const flagsUrl = `https://cdn.jsdelivr.net/npm/world_countries_lists@latest/data/en/countries.json`;


router.get('/', (req, res) => {

    syncData().then((data$: [AxiosResponse<Flags[]>, AxiosResponse<Countries[]>]) => {

        res.status(200);
        res.send(data$);

    }).catch(err => {

        res.status(err.status);
        res.send(err);

    });

});

const syncData = () => {

    return Promise.all([getFlages(), getCountries()]).then((value: [AxiosResponse<Flags[]>, AxiosResponse<Countries[]>]) => {
        console.log(value)
        return value;
    }).catch(err => {
        console.log(err);
        return err;
    });

};

const getCountries = async () => {
    return await axios.get(countriesUrl, { headers: { ...authUrl } });
};

const getFlages = async () => {
    return await axios.get(flagsUrl);
};

export {
    router as countries
};