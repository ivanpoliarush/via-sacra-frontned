import { CloseIcon } from '@/assets/icons/close';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Product } from '../product/product';
import styles from './main.module.css';
import { ProductsModalProps } from './main.props';

const variants = {
	modal: {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	},
};

export const ProductsModal = ({
	isOpen,
	onClose,
	products,
	translatedTexts,
}: ProductsModalProps) => {
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
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
					<p className={styles.title}>
						<span className={meaCulpa.className}>
							{translatedTexts.common.yourOrder[0]}
						</span>
						<span>{translatedTexts.common.yourOrder.slice(1)}</span>
					</p>
					<div className={styles.items}>
						{products.map(product => (
							<Product key={product.id} {...product} />
						))}
					</div>
					<Button
						label={translatedTexts.common.confirm}
						className={styles.button}
					/>
				</motion.dialog>
			)}
		</AnimatePresence>
	);
};
