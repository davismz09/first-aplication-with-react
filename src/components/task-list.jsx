import TaskCard from "./task-card.jsx";
import {useContext} from "react";
import {TaskContext} from "../context/task-context.jsx";

function TaskList() {
  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className='text-white text-4xl font-bold text-center'>
        No hay tareas aún
      </h1>
    );
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
}

export default TaskList;
