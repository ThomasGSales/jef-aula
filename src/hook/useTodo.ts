import React, { useContext } from "react";
import { TodoService } from "../utils/TodoService";
import { TodoContext } from "../contexts/TodoContext";

export const useTodo = (): TodoService => {
    const context: { todoService: TodoService} | undefined = useContext(TodoContext)
    if (!context) {
        throw new Error("O hook useTodo só pode ser utilizado dentro do contexto TodoContext.")
    }

    return context.todoService
}