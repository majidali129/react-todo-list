/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
import { tabs } from "../utils/tabs";

export const todoContext = createContext();

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() =>
    localStorage.getItem("tasklist") !== null
      ? JSON.parse(localStorage.getItem("tasklist"))
      : []
  );
  // const [theme, setTheme]

  const [editAbleTask, setEditAbleTask] = useState(null);

  const [filter, setFilter] = useState("All");

  let filteredList = useMemo(
    () =>
      tasks.length > 0
        ? tasks.filter((task) => {
            if (filter === "Completed") {
              return task?.isCompleted === true;
            } else if (filter === "Uncompleted") {
              return task.isCompleted === false;
            } else {
              return tasks;
            }
          })
        : [],
    [filter, tasks]
  );

  const handleFilter = (filter) => {
    tabs.forEach((tab) =>
      tab.name === filter ? (tab.isActive = true) : (tab.isActive = false)
    );
    setFilter(filter);
  };
  const handleAddNewTask = (newTask) => {
    setTasks((task) => {
      const updatedTaskList = [...task, newTask];
      localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
  };
  const handleDeleteTask = (id) => {
    setTasks((list) => {
      const filteredList = list.filter((task) => task.id !== id);
      localStorage.setItem("tasklist", JSON.stringify(filteredList));
      return filteredList;
    });
  };

  const handleEditExistingTask = (id, taskToEdit) => {
    setTasks((taskList) => {
      const updatedTaskList = taskList.filter((task) => task.id !== id);
      localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
    setEditAbleTask(taskToEdit);
  };
  const handleIsComplete = (id) => {
    setTasks((list) => {
      const updatedList = list.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      localStorage.setItem("tasklist", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  useEffect(() => {
   !tasks.length ?? window.localStorage.removeItem('theme');
  }, [tasks.length])


  return (
    <todoContext.Provider
      value={{
        tasks: filteredList,
        setTasks,
        editAbleTask,
        handleEditExistingTask,
        handleFilter,
        handleAddNewTask,
        handleDeleteTask,
        handleIsComplete,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

// window.matchMedia("(prefers-color-scheme: dark)")