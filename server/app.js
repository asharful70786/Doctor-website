

import express from "express";
import cors from "cors";  

import mailRoutes from "./Routes/MailRoutes.js";
import geminiRouter from "./Routes/AiDoctorRoutes.js";

const app = express();

// console.log(geminiRouter)
app.get("/", (req, res) => {
  res.send("hello")
})

app.use(cors());
app.use(express.json())


app.use("/api", mailRoutes);
app.use("/api", geminiRouter);

app.use("/api", geminiRouter)



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});