const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller');

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/luckyNumber", controller.getLuckyNumber);
app.get("/api/currentDateTime", controller.getCurrentDateTime);
app.get("/api/babyName", controller.getBabyName);

app.listen(4000, () => console.log("Server running on 4000"));
