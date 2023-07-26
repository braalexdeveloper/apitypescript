import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

const PORT=process.env.PORT || 3001;
const app=express();
app.use(cors());


import { router } from "./routes";

app.use(router);
app.use(express.json());
db().then(()=> console.log("Conexión ready"));
app.listen(PORT,()=>console.log("Listo por el puerto 3001"));

