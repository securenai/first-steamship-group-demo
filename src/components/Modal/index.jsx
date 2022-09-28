import React, { useRef, useEffect, useCallback } from 'react';
import './styles.css';

// export interface ModalProps {
//   showModal: boolean;
//   closeModal: () => void;
//   children: React.ReactNode;
// }

const Modal = ({ showModal, closeModal, children }) => {
	const modalOuter = useRef(null);

	const close = (e) => {
		if (modalOuter.current === e.target) {
			closeModal();
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				closeModal();
			}
		},
		[closeModal, showModal],
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		showModal && (
			<div className="modalContainer" ref={modalOuter} onClick={close}>
				{children}
			</div>
		)
	);
};

export default Modal;
