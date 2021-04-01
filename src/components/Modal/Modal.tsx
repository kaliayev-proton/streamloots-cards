import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

interface ModalProps {
    children: ReactNode,
    show: boolean,
    onHide: () => void,
}
const Modal: React.FC<ModalProps> = ({children, show, onHide}: ModalProps) =>
show ? ReactDOM.createPortal(
        <div className="sl-modal">
            <div className="sl-modal__content">
                {children}
                <span className="sl-modal__content__close" onClick={onHide}>&times;</span>
            </div>
        </div>,
        document.body
) : null;

export default Modal;