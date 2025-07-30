import express from "express"
import dotenv from "dotenv";
import cors from "cors"

import nodeRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT = process.env.PORT || 5001;


//Building APIs, Understanding Routes, endpoint(URL+HTTP method)
app.get("/",(req,res)=>{
    res.send("Server has been started");
});
app.use(cors({
    origin:"http://localhost:5173",
}));
//Middleware ->Between req and res. 
app.use(express.json())
app.use(rateLimiter);



// api/notes is the endpoint
app.use("/api/notes",nodeRoutes);
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:",PORT);
    })
});// Connext to DB then start server










//Custom Middleware
// app.use((req,res,next)=>{ //Between every req and res this is executed
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// })


//    NOTES

/* Types of API 
    HTTP methods
    GET-> Get some info
    POST-> Create info
    PUT-> Update
    DELETE ->Delete
*/


/* HTTP STATUS CODE
    100s Informational
    200s Success
    300s Redirection
    400s Client Errors
         -- 400 Bad Request
         -- 401 Unauthorized
         -- 403 Forbidden
         -- 404 Not Found
         -- 429 Too Many Requests
    500s Server Errors
         -- 500 Internal Server Error
         -- 503 Service Unavailable

*/