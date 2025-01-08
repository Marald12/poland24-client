'use client'
import React, { FC } from 'react'
import styles from './ReviewsPage.module.scss'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import cn from 'classnames'
import HeaderNav from '@/features/header-nav/HeaderNav'
import { reviewApi } from '@/features/redux/api/review/review.api'
import BigReviewItem from '@/widgets/reviews-page/item/BigReviewItem'

const ReviewsPage: FC = () => {
	const { data } = reviewApi.useGetAllReviewsQuery(undefined)

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<HeaderNav links={[{ title: 'Отзывы', href: '/reviews' }]} />
			<SectionTitle className={styles.section__title} title='Отзывы о сайте' />
			<div className={styles.list}>
				{data &&
					data.map(item => <BigReviewItem key={item._id} review={item} />)}
			</div>
		</div>
	)
}

export default ReviewsPage
