/* Its simple api */


import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';



const app = express();
app.use(cors())
app.use(express.json());


app.get("/", (req:Request,res:Response) => {
    res.status(200).json({
        status:"Online",
        message:"Welcome to basic intern api of weather",
        author:"amit717628"
    });
})
app.post("/weatherGet",async(req:Request,res:Response) => {
    
try {

const { data } = req.body;


const promise = data.map(async(city:string) => {
    const api = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=f676e0d30686474d99b160351221104&q=${city}&days=1&aqi=no&alerts=no`);

    const data = api.data;

    return {[city]: data}
})


const weatherResults = await Promise.all(promise);
const weather = Object.assign({}, ...weatherResults);

res.status(200).json({ weather });


} catch(err){
    res.status(200).json({
        error:true,
        message:"Something Went Wrong"
    })
    console.error(err);
}

})

// Send Method 
/* 
{
  "data": ["toronto", "mumbai", "london"]
}
*/

app.listen(3000,() => {
    console.log("Online")
})