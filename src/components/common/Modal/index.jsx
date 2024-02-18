import React from 'react';


const Modal = (props) => {
    const { isConfirmationPopup, children, onClickOutSide } = props;

    const handleOnClickOutSide = () => {
        if (onClickOutSide) {
            onClickOutSide();
        }
    };

    return (
        <div
            className={`modal-container ${
                isConfirmationPopup ? 'dark-background' : ''
            }`}
            onClick={handleOnClickOutSide}
        >
            <div
                className={`modal ${
                    isConfirmationPopup ? 'confirmation-modal-body' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
