import { createContext, useEffect, useState } from "react";

const Context = createContext();

const TodoContext = ({ children }) => {
    // todos
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // userName
    const [userName, setUserName] = useState(() => {
        return localStorage.getItem("userName") || "";
    });

    // save todos
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // save userName
    useEffect(() => {
        localStorage.setItem("userName", userName);
    }, [userName]);

    return (
        <Context.Provider value={{ todos, setTodos, userName, setUserName }}>
            {children}
        </Context.Provider>
    );
};

export { Context, TodoContext };
