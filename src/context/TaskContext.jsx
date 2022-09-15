import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

//el componente en si, se llama Provider, porque provee de un estado al resto

export function TaskcontextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

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
        return { ...task };
      }),
    );
  };
  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
          editTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
