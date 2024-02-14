const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.send("Server Running");
});

app.post("/", (req, res) => {
  // console.log("post recieved");
  //   console.log(req.body.cityName);

  const query = req.body.cityName;
  const apiKey = "1e3186abecab08fcfc3cb678adf87e10";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescrip = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescrip + " </p>");
      res.write("<h1>The temperature in "+ query +" is " + temp + " degrees celcius.</h1>");
      res.write("<img src = " + imgUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server started at 3000");
});
