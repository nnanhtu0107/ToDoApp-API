import express from "express";
import userControllers from "../controllers/userControllers";
let router = express.Router();

let initWebRouters = (app) => {
  router.post("/todo", userControllers.postToDo);
  //   router.post("/todo",
  //   });
  return app.use("/", router);
};
module.exports = initWebRouters;
