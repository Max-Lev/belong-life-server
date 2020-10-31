"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_albums_1 = require("./api/get-albums");
const get_countries_1 = require("./api/get-countries");
const path_1 = __importDefault(require("path"));
const port = 4201 || process.env.PORT;
const app = express_1.default();
const dir = path_1.default.join(__dirname, '/public/flags');
app.use('/assets', express_1.default.static(dir));
// app.use(express.static(__dirname + '/public/flags'));
app.use('/albums', get_albums_1.albumsRouter);
app.use('/countries', get_countries_1.countries);
app.get("/", (req, res) => {
    res.send("Hi!");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map