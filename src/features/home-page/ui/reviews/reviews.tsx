'use client';

import { ReviewsIcon } from '@/assets/icons/reviews';
import { REVIEWS } from '@/shared/constants/reviews';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './reviews.module.css';

export const Reviews = ({
	translate,
}: {
	translate: { text: string; auhtor: { name: string; age: string } }[];
}) => {
	const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

	const reviews = REVIEWS(translate);

	return (
		<div className={styles.wrapper}>
			<div className={styles.iconWrapper}>
				<ReviewsIcon />
			</div>
			<div className={styles.mainContent}>
				<p className={styles.text}>
					{reviews[activeReviewIndex]?.text}
				</p>
				<motion.div className={styles.authors}>
					{reviews.map((review, index) => (
						<div
							key={review.author.name}
							className={clsx(styles.author, {
								[styles.active]: activeReviewIndex === index,
							})}
							onClick={() => setActiveReviewIndex(index)}>
							<img
								className={styles.authorImage}
								src={review.author.photo}
								alt=""
							/>
							<AnimatePresence>
								{activeReviewIndex === index && (
									<motion.div
										initial={{ opacity: 0, width: 0 }}
										animate={{
											opacity: 1,
											width: 'auto',
										}}
										exit={{
											opacity: 0,
											width: 0,
											transition: { duration: 0 },
										}}
										className={styles.authorInfo}>
										<p className={styles.authorName}>
											{review.author.name}
										</p>
										<p className={styles.authorAge}>
											{review.author.age}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};
