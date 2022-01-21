import { Todo } from "../models/todo";

let postToDo = async (req, res) => {
  const todo = await new Todo({
    text: req.body.text,
  });

  todo
    .save()
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
module.exports = {
  postToDo,
};
