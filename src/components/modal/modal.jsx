/* eslint-disable react/prop-types */
import "./estilo.css";

export function Modal({children, isOpen, closeModal}) {
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <section className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container bg-slate-500' onClick={handleModalClick}>
        <button
          onClick={closeModal}
          className='modal-close bg-orange-600 w-10 text-pink-50 rounded-md hover:bg-slate-400'>
          X
        </button>
        {children}
      </div>
    </section>
  );
}
