/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from "react";

export const TaskContext = createContext();

export function TaskcontextProvider(props) {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) ?? [],
  );

  const saveTasks = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error al guardar tareas en localStorage:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: window.crypto.randomUUID(),
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskEdit) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskEdit.taskId) {
          return {
            ...task,
            title: taskEdit.title,
            description: taskEdit.description,
          };
        }
        return {...task};
      }),
    );
    saveTasks();
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        editTask,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
}
