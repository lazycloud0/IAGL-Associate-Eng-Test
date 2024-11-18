let todos = [];

export const clearTodos = () => {
  todos = [];
};

export const getAllTodos = () => {
  return todos;
};

export const getTodoById = (id) => {
  return todos.find((todo) => todo.id === id);
};

export const createTodo = (todo) => {
  todos.push(todo);
  return todo;
};

export const updateTodo = (id, updatedTodo) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return null;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};
