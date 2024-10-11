'use client';

import { Bin } from '@/assets/icons/bin';
import { Product as IProduct } from '@/shared/types/product';
import { motion } from 'framer-motion';
import styles from './product.module.css';

export const Product = ({ name, id, handleDelete }: IProduct) => {
	return (
		<motion.div layoutId={id} className={styles.item}>
			<p className={styles.title}>{name}</p>
			<div className={styles.additionalInfo}>
				<button onClick={handleDelete} className={styles.deleteButton}>
					<Bin />
				</button>
			</div>
		</motion.div>
	);
};
