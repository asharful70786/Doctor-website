

import express from "express";
import cors from "cors";  

import mailRoutes from "./Routes/MailRoutes.js";
import geminiRouter from "./Routes/AiDoctorRoutes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();

// console.log(geminiRouter)
app.get("/", (req, res) => {
  res.send("hello")
})

app.use(cors(
  {
    origin: "http://localhost:5173"
  }
));
app.use(express.json())


app.use("/api", mailRoutes);
app.use("/api", geminiRouter);

app.use("/api", geminiRouter)



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});