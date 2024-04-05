/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";

export const TaskModal = ({task, editTask, closeModal}) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task.description, task.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask({
      taskId: task.id,
      title: title === "" ? task.title : title,
      description: description === "" ? task.description : description,
    });

    setTitle(title);
    setDescription(description);
  };

  return (
    <div className='bg-gray-800  p-4 rounded-md flex flex-col items-center'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <label name='input-title'>Titulo de la tarea:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='bg-slate-300 p-3 w-full mb-2 text-black'
          value={title}
        />

        <label name='input-description'>Descripcion de la tarea:</label>
        <textarea
          className='bg-slate-300 p-3 w-full mb-2 text-black'
          onChange={(e) => setDescription(e.target.value)}
          value={description}></textarea>
        <button
          onClick={closeModal}
          className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 ml-3'>
          Guardar Tarea
        </button>
      </form>
    </div>
  );
};
