const express = require("express");
const authRouter = require("./routes/Auth.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome to here");
});
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is started on port", PORT);
});
