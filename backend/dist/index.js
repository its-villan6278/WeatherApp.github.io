"use strict";
/* Its simple api */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        status: "Online",
        message: "Welcome to basic intern api of weather",
        author: "amit717628"
    });
});
app.post("/weatherGet", async (req, res) => {
    try {
        const { data } = req.body;
        const promise = data.map(async (city) => {
            const api = await axios_1.default.get(`https://api.weatherapi.com/v1/forecast.json?key=f676e0d30686474d99b160351221104&q=${city}&days=1&aqi=no&alerts=no`);
            const data = api.data;
            return { [city]: data };
        });
        const weatherResults = await Promise.all(promise);
        const weather = Object.assign({}, ...weatherResults);
        res.status(200).json({ weather });
    }
    catch (err) {
        res.status(200).json({
            error: true,
            message: "Something Went Wrong"
        });
        console.error(err);
    }
});
// Send Method 
/*
{
  "data": ["toronto", "mumbai", "london"]
}
*/
app.listen(3000, () => {
    console.log("Online");
});
