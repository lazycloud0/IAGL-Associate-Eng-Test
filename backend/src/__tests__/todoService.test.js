import * as todoService from "../services/todoService.js";
import * as todoRepository from "../repositories/todoRepository.js";

// Mock the entire todoRepository module
jest.mock("../repositories/todoRepository.js");

describe("TodoService", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("addTodo", () => {
    it("should validate todo text is not empty", async () => {
      const promise = todoService.addTodo("");
      await expect(promise).rejects.toThrow("Todo text cannot be empty");
      expect(todoRepository.createTodo).not.toHaveBeenCalled();
    });

    it("should trim todo text", async () => {
      const todoText = "  New todo  ";
      const expectedTodo = {
        id: expect.any(Number),
        text: "New todo",
        completed: false,
      };

      // Mock createTodo function
      todoRepository.createTodo.mockImplementation((todo) => todo);

      const result = await todoService.addTodo(todoText);
      expect(result).toMatchObject(expectedTodo);
    });

    it("should handle repository errors", async () => {
      // Mock createTodo function to throw an error
      todoRepository.createTodo.mockRejectedValue(new Error("DB Error"));

      const promise = todoService.addTodo("New todo");
      await expect(promise).rejects.toThrow("DB Error");
    });
  });

  describe("toggleTodo", () => {
    it("should validate todo exists before toggling", async () => {
      // Mock getTodoById function
      todoRepository.getTodoById.mockResolvedValue(null);

      const promise = todoService.toggleTodo(1);
      await expect(promise).rejects.toThrow("Todo not found");
    });

    it("should toggle todo completion status", async () => {
      const mockTodo = { id: 1, text: "Test todo", completed: false };

      // Mock getTodoById and updateTodo functions
      todoRepository.getTodoById.mockResolvedValue(mockTodo);
      todoRepository.updateTodo.mockImplementation((id, updates) => ({
        ...mockTodo,
        ...updates,
      }));

      const result = await todoService.toggleTodo(1);
      expect(result.completed).toBe(true);
    });
  });
});
