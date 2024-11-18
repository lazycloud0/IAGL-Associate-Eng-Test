import axios from "axios";
import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./types";

const apiURL = "http://localhost:9091";

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiURL}/api/todos`);
    dispatch({ type: FETCH_TODOS, payload: response.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Failed to fetch todos" });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiURL}/api/todos`, todo);
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Failed to add todo" });
  }
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  try {
    const todo = getState().todos.find((t) => t.id === id);
    await axios.put(`${apiURL}/api/todos/${id}`, {
      completed: !todo.completed,
    });
    dispatch({ type: TOGGLE_TODO, payload: id });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Failed to update todo" });
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiURL}/api/todos/${id}`);
    dispatch({ type: REMOVE_TODO, payload: id });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Failed to remove todo" });
  }
};
