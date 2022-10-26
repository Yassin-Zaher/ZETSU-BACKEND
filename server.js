const express = require("express");
const cors = require("cors");
const database = require('./models/database');
const { authRouter } = require("./routes/auth.routes");
const app = express();



app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Acces-Control-Allow-Headers", "Content-Type, Authorization");
  next();
})

database.connection.connect(function (err) {
  if(err){
      console.log(err);
  }
  else{
      console.log("connection created with Mysql successfully");
  }
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});


app.use('/auth', authRouter);

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});