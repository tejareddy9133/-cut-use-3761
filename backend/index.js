const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);

app.use("/users", userRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to db at port 8080");
  } catch (error) {
    console.log(error.message);
  }
});
