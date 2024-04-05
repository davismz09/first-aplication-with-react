import {useState, useContext} from "react";
import {TaskContext} from "../context/task-context.jsx";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el título no esté vacío
    if (!title.trim()) {
      setError("Por favor, ingresa un título para la tarea.");
      return;
    }

    // Validar que la descripción no esté vacía
    if (!description.trim()) {
      setError("Por favor, ingresa una descripción para la tarea.");
      return;
    }

    // Si pasa todas las validaciones, crear la tarea
    createTask({title, description});
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
        {error && <p className='text-red-500 mb-2'>{error}</p>}
        <input
          placeholder='Escribe tu tarea'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2'
          autoFocus
        />
        <textarea
          placeholder='Escribe la descripción de tu tarea'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
