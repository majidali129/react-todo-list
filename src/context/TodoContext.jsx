/* eslint-disable react/prop-types */
import { createContext, useState } from "react";



export const todoContext = createContext();

export const ContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {title: 'Coding', isCompleted: false, id: "asdf1234"},
        {title: 'Walk', isCompleted: true, id: "a1b2c3d4"}
    ]);

    const updateTaskList = (newTask) => {
        setTasks((task) => [...task, newTask]);
    }
    const handleDeleteTask = (id) => {
        setTasks(list => list.filter(task => task.id !== id));
    }
    const handleIsComplete = (id) => {
        setTasks(list => list.map(item => item.id=== id? {...item, isCompleted: !item.isCompleted}: item));
    }
    return (
        <todoContext.Provider value={{tasks, updateTaskList, handleDeleteTask, handleIsComplete}}>
            {children}
        </todoContext.Provider>
    )
}


