import React, { FC } from 'react'
import styles from './ProfileReviews.module.scss'
import SectionTitleSmall from '@/shared/ui/components/section-title/small/SectionTitleSmall'
import ReviewList from '@/widgets/profile-page/reviews/list/ReviewList'
import ProfileCreateReview from '@/widgets/profile-page/reviews/create-review/ProfileCreateReview'

const ProfileReviews: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SectionTitleSmall title='Мои отзывы' />
			<div className={styles.container}>
				<ReviewList />
				<ProfileCreateReview />
			</div>
		</div>
	)
}

export default ProfileReviews
