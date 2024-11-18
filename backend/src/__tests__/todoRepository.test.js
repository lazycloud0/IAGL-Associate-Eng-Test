import * as repository from "../repositories/todoRepository.js";

describe("TODO Repository", () => {
  // Clear todos before each test
  beforeEach(() => {
    repository.clearTodos();
  });

  describe("getTodos", () => {
    it("should return empty todos list initially", async () => {
      const actual = await repository.getAllTodos();
      expect(actual).toEqual([]);
    });

    it("should return todos list with items", async () => {
      const todo = { id: 1, text: "Test todo", completed: false };
      await repository.createTodo(todo);
      const actual = await repository.getAllTodos();
      expect(actual).toEqual([todo]);
    });
  });

  describe("createTodo", () => {
    it("should add new todo to list", async () => {
      const todo = { id: 1, text: "Test todo", completed: false };
      const created = await repository.createTodo(todo);
      expect(created).toEqual(todo);
    });
  });

  describe("updateTodo", () => {
    it("should update existing todo", async () => {
      const todo = { id: 1, text: "Test todo", completed: false };
      await repository.createTodo(todo);
      const updated = await repository.updateTodo(1, { completed: true });
      expect(updated.completed).toBe(true);
    });

    it("should return null for non-existent todo", async () => {
      const updated = await repository.updateTodo(999, { completed: true });
      expect(updated).toBeNull();
    });
  });

  describe("deleteTodo", () => {
    it("should remove todo from list", async () => {
      const todo = { id: 1, text: "Test todo", completed: false };
      await repository.createTodo(todo);
      await repository.deleteTodo(1);
      const todos = await repository.getAllTodos();
      expect(todos).toEqual([]);
    });
  });
});
