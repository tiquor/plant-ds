import { SyntheticEvent } from 'react';
import { IPropsChildrenModal } from '../../interfaces/props.interfaces';
import './Modal.css';

const Modal = ({
  width,
  height,
  isOpen,
  unClose,
  children,
  handleClose
}: IPropsChildrenModal) => {
  const handleModalContainerClick = (e: SyntheticEvent) => e.stopPropagation();

  return (
    <article className={`modal px-5 ${isOpen && 'is-open'}`} onClick={handleClose}>
      <div
        className='modal__container'
        style={{ width, height }}
        onClick={handleModalContainerClick}
      >
        {!unClose && (
          <button className='modal__close all-animations' onClick={handleClose}>
            X
          </button>
        )}
        {children}
      </div>
    </article>
  );
};

export default Modal;
