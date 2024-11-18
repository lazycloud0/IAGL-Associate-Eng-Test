import * as todoRepository from "../repositories/todoRepository.js";

export const getTodos = () => {
  return todoRepository.getAllTodos();
};

export const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, completed: false };
  return todoRepository.createTodo(newTodo);
};

export const toggleTodo = (id) => {
  const todo = todoRepository.getTodoById(id);
  if (todo) {
    return todoRepository.updateTodo(id, { completed: !todo.completed });
  }
  return null;
};

export const removeTodo = (id) => {
  return todoRepository.deleteTodo(id);
};
