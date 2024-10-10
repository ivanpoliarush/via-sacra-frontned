import { meaCulpa } from '@/shared/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './main.module.css';
import { ToastModalProps } from './main.props';

const variants = {
	modal: {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	},
};

export const ToastModal = ({ isOpen, message }: ToastModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.dialog
					ref={dialogRef}
					className={styles.modal}
					initial={variants.modal.hidden}
					animate={variants.modal.visible}
					exit={variants.modal.hidden}>
					<p className={styles.text}>
						<span className={meaCulpa.className}>{message[0]}</span>
						<span>{message.slice(1)}</span>
					</p>
				</motion.dialog>
			)}
		</AnimatePresence>
	);
};
