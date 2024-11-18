import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from "../actions/types";

const initialState = {
  todos: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload, error: null };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], error: null };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        error: null,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        error: null,
      };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
