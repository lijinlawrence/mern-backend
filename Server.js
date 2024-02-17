const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
var cors = require('cors')



// Middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});




app.use(express.json());
// API Route
// app.get('/', (req, res) => {
//     res.send("hello world");
// });

app.use(cors());

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    // Port Setting
    app.listen(process.env.PORT, () => {
      console.log("DB connected succesfully in port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/tasks", taskRoutes);
