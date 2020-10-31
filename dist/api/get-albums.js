"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.albumsRouter = void 0;
// "use strict";
const express_1 = __importDefault(require("express"));
const albumsRouter = express_1.default.Router();
exports.albumsRouter = albumsRouter;
const albums = __importStar(require("../db/albums.json"));
// import { RequestPromise } from 'request-promise';
// import { Promise } from 'promise';
const url = `https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES`;
const token = `Bearer BQC66SvQ7u4TjJUuTnXzUKUNmc4VqFVjFKMRc-MdoILAvc4jOEOYR_ACUIClEjQkfPikZYw0HXCyDAR0vha03srTReaoI3PoVrUYEGesLl1n9xGMJ6C1tU8sFHVqG-ZBoVYPx9_B7slwOc9re4Wex647ulUtEKW-nrKYMXw`;
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
const getAlbums = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(albums.albums);
        }, 2000);
    });
});
//# sourceMappingURL=get-albums.js.map