
import express from "express";
import cors from "cors";  

import mailRoutes from "./Routes/MailRoutes.js";
import geminiRouter from "./Routes/AiDoctorRoutes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();


app.use(cors({
  origin: ["https://doctorweb.ashraful.in", "https://dental.ashraful.in"],
}));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello")
})





app.use("/api", mailRoutes);
app.use("/api", geminiRouter);



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});