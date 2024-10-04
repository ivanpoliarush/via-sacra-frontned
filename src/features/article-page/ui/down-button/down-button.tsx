'use client';

import { Button } from '@/shared/ui/button/button';
import { useRouter } from 'next/navigation';
import styles from './down-button.module.css';

export const DownButton = () => {
	const router = useRouter();

	return (
		<Button
			onClick={() => router.back()}
			className={styles.button}
			label="Encomende uma vela"
		/>
	);
};
