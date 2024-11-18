import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos, addTodo, toggleTodo, removeTodo } from "./actions";

const TodoApp = ({
  todos,
  fetchTodos,
  addTodo,
  toggleTodo,
  removeTodo,
  error,
}) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = (newTodo) => {
    if (!newTodo.trim()) return;
    addTodo({ id: Date.now(), text: newTodo, completed: false });
  };

  return (
    <div className="todo-container">
      <h1>To-Do</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleToggleTodo={toggleTodo}
        handleRemoveTodo={removeTodo}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  error: state.error,
});

export default connect(mapStateToProps, {
  fetchTodos,
  addTodo,
  toggleTodo,
  removeTodo,
})(TodoApp);
