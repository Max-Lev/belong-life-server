"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const get_albums_1 = require("./api/get-albums");
const port = 4201 || process.env.PORT;
// albumsRouter();
app.use('/albums', get_albums_1.albumsRouter);
app.get("/", (req, res) => {
    res.send("Hi 3333!");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map