'use client';

import { CANDLES } from '@/shared/constants/candles';
import { useWindowDimensions } from '@/shared/hooks/use-window-dimensions';
import { CandleType } from '@/shared/types/candle';
import clsx from 'clsx';
import { useState } from 'react';
import { Candle } from '../candle/candle';
import styles from './gallery.module.css';
import { GalleryProps } from './gallery.props';

export const Gallery = ({
	lang,
	className,
	translateTexts,
	...props
}: GalleryProps) => {
	const widnowDimensions = useWindowDimensions();
	const [activeCandle, setActiveCandle] = useState<CandleType>(
		CandleType.WIDE,
	);

	const handleMouseEnter = (candle: CandleType) => {
		if (widnowDimensions.width > 900) {
			setActiveCandle(candle);
		}
	};

	const handleClick = (candle: CandleType) => {
		if (widnowDimensions.width <= 900) {
			setActiveCandle(candle);
		}
	};

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			{CANDLES.map((candle, index) => (
				<Candle
					lang={lang}
					key={candle.id}
					type={candle.id}
					image={candle.image}
					price={candle.price}
					translateTexts={translateTexts}
					onClick={() => handleClick(candle.id)}
					onMouseEnter={() => handleMouseEnter(candle.id)}
					title={translateTexts.candles.gallery.candles[index]}
					active={
						activeCandle === candle.id ||
						widnowDimensions.width <= 550
					}
				/>
			))}
		</div>
	);
};
