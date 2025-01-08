'use client'
import React, { FC, useEffect } from 'react'
import styles from './ReviewList.module.scss'
import { reviewApi } from '@/features/redux/api/review/review.api'
import ReviewItem from '@/widgets/profile-page/reviews/list/item/ReviewItem'

const ReviewList: FC = () => {
	const { data, refetch } = reviewApi.useGetByProfileReviewsQuery(null)

	useEffect(() => {
		refetch()
	}, [])

	return (
		<div className={styles.list}>
			{data && data.map(item => <ReviewItem review={item} key={item._id} />)}
		</div>
	)
}

export default ReviewList
