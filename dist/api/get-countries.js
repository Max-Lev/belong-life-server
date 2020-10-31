"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countries = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.countries = router;
const axios_1 = __importDefault(require("axios"));
const countriesUrl = `https://corona-virus-world-and-india-data.p.rapidapi.com/api`;
const authUrl = {
    'x-rapidapi-key': '0a8b8e412bmshf8d89fcf8cd282cp17368fjsn6d7a84ac0ff0'
};
const flagsUrl = `https://cdn.jsdelivr.net/npm/world_countries_lists@latest/data/en/countries.json`;
router.get('/', (req, res) => {
    // getCountries();
    const data = syncData().then(data$ => {
        res.send(data$);
    });
    // data;
    // res.send(data)
});
const syncData = () => {
    // const _getCountries = 
    // await getCountries().then(v=>v);
    // // const _getFlages =  
    // await getFlages().then(v=>v);
    return Promise.all([getFlages(), getCountries()]
    //     .map(d$ => {
    //         console.log(d$)
    //         return d$;
    //     })
    ).then(d => {
        console.log(d);
        return d;
    });
};
const getCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(countriesUrl, { headers: Object.assign({}, authUrl) });
    // .then((countriesResponse) => {
    //     return countriesResponse.data
    // });
});
const getFlages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(flagsUrl);
    // .then((flagsResponse) => {
    //     return flagsResponse.data;
    // });
});
//# sourceMappingURL=get-countries.js.map