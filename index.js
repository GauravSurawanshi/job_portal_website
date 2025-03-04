import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import coonectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
dotenv.config({});

const app = express();


// middleWare

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOption={
  origin : 'http/localhost:5173',
  Credentials :true,

}
app.use(cors(corsOption))
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);

"http://localhost:8000/api/v1/user"

app.listen(PORT,()=>{
  coonectDB();
  console.log(`server is running on ${PORT}`);
})
