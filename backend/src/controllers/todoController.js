import * as todoService from "../services/todoService.js";

export const getTodos = (req, res, next) => {
  try {
    const todos = todoService.getTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

export const addTodo = (req, res, next) => {
  try {
    const newTodo = todoService.addTodo(req.body.text);
    res.json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const toggleTodo = (req, res, next) => {
  try {
    const updatedTodo = todoService.toggleTodo(parseInt(req.params.id));
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const removeTodo = (req, res, next) => {
  try {
    todoService.removeTodo(parseInt(req.params.id));
    res.json({ message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};
