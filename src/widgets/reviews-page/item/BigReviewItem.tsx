import React, { FC } from 'react'
import styles from './BigReviewItem.module.scss'
import { IReview } from '@/features/redux/api/review/review.interface'
import dayjs from 'dayjs'
import Image from 'next/image'
import starSolidImage from '@/assets/images/star_solid.svg'
import starNoSolidImage from '@/assets/images/star_no_solid.svg'

const BigReviewItem: FC<{ review: IReview }> = ({ review }) => {
	const monthName = () => {
		const month = dayjs(review.createdAt).month()
		if (month == 1) return 'Jan'
		if (month == 2) return 'Feb'
		if (month == 3) return 'Mar'
		if (month == 4) return 'Apr'
		if (month == 5) return 'May'
		if (month == 6) return 'Jun'
		if (month == 7) return 'Jul'
		if (month == 8) return 'Aug'
		if (month == 9) return 'Sep'
		if (month == 10) return 'Oct'
		if (month == 11) return 'Nov'
		if (month == 12) return 'Dec'
	}
	const stars = Array.from({ length: review.starCount }, (_, i) => i + 1)
	const starsNoSelected = Array.from(
		{ length: 5 - review.starCount },
		(_, i) => i + 1
	)

	return (
		<div className={styles.item}>
			<div className={styles.name}>
				<span>
					{monthName()} {dayjs(review.createdAt).format(' DD, YYYY hh:mm')}
				</span>
				<span>Покупка в магазине:</span>
				<Image
					src={review.shop.logoPath}
					alt={review.shop.logoPath}
					width={66}
					height={19.74}
				/>
				<b>{review.shop.title}.com</b>
			</div>
			<div className={styles.stars}>
				{stars.map(item => (
					<Image src={starSolidImage} alt={starSolidImage} key={item} />
				))}
				{starsNoSelected.map(item => (
					<Image src={starNoSolidImage} alt={starNoSolidImage} key={item} />
				))}
			</div>
			<h4>{review.message}</h4>
			<div className={styles.images}>
				{review.media.map(path => (
					<Image src={path} alt={path} width={198} height={159} key={path} />
				))}
			</div>
		</div>
	)
}

export default BigReviewItem
