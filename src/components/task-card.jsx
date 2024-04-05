/* eslint-disable react/prop-types */
import {useContext} from "react";
import {TaskContext} from "../context/task-context.jsx";

import {Modal} from "./modal/modal.jsx";
import {TaskModal} from "./modal/task-modal.jsx";
import {useModal} from "../hooks/use-modal.js";

function TaskCard({task}) {
  const {deleteTask, editTask} = useContext(TaskContext);
  const {isOpen, openModal, closeModal} = useModal(false);

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>

      <div className='flex mt-4'>
        <button
          className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400'
          onClick={() => {
            deleteTask(task.id);
          }}>
          Eliminar Tarea
        </button>
        <button
          onClick={openModal}
          className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 ml-3'>
          Editar Tarea
        </button>
      </div>

      {/* Modal para editar la tarea */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TaskModal task={task} editTask={editTask} closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default TaskCard;
