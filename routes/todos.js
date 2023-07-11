"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo added", todo: newTodo, todos: todos });
});
router.put("/todo/:todoid", (req, res, next) => {
    const tId = req.params.todoid;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: "Updated Todo", todos: todos });
    }
    res.status(404).json({ message: "Could not find todo for this id" });
});
router.delete("/todo/:todoid", (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoid);
    res.status(200).json({ message: "Todo Deleted", todos: todos });
});
exports.default = router;
