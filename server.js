import  express from "express";
import dotenv from 'dotenv';
import { router } from "./routes/recipe.routes.js";
import mongoose from "mongoose";
import cors from "cors"
dotenv.config()


const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cors());


const PORT = process.env.PORT || 6002;

// make database connection
await mongoose.connect(process.env.MONGO_URI);

app.use('/recipes', router)

app.listen (PORT, () => {
    console.log(`express app is running ${PORT}`)
});
