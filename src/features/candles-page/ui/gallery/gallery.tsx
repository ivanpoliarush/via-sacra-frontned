'use client';

import { CANDLES } from '@/shared/constants/candles';
import { CandleType } from '@/shared/types/candle';
import clsx from 'clsx';
import { useState } from 'react';
import { Candle } from '../candle/candle';
import styles from './gallery.module.css';
import { GalleryProps } from './gallery.props';

export const Gallery = ({
	className,
	translateTexts,
	...props
}: GalleryProps) => {
	const [activeCandle, setActiveCandle] = useState<CandleType>(
		CandleType.WIDE,
	);

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			{CANDLES.map((candle, index) => (
				<Candle
					key={candle.id}
					type={candle.id}
					image={candle.image}
					price={candle.price}
					translateTexts={translateTexts}
					active={activeCandle === candle.id}
					onMouseEnter={() => setActiveCandle(candle.id)}
					title={translateTexts.candles.gallery.candles[index]}
				/>
			))}
		</div>
	);
};
