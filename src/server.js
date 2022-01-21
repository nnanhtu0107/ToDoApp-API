import express from "express";
import bodyParser from "body-parser";
import connectDB from "./server/configs/connectDB";
import initWebRouters from "./server/router/web";

require("dotenv").config();
let app = express();

app.use(bodyParser.json());

initWebRouters(app);
connectDB();
let port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`Backend nodejs is running on the port :` + port);
});
