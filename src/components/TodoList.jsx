import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos, toggleTodo, removeTodo } from "../actions";

const TodoList = ({ todos, fetchTodos, toggleTodo, removeTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleTodo={() => toggleTodo(todo.id)}
          handleRemoveTodo={() => removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos, toggleTodo, removeTodo })(
  TodoList
);
