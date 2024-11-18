import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo({ id: Date.now(), text: newTodo, completed: false });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleAddTodo} className="input-container">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">
        <span className="material-icons">add_circle</span>
      </button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
