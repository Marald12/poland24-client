import React, { FC } from 'react'
import styles from './ProfileOrders.module.scss'
import SectionTitleSmall from '@/shared/ui/components/section-title/small/SectionTitleSmall'
import OrdersList from '@/widgets/profile-page/orders/list/OrdersList'

const ProfileOrders: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SectionTitleSmall title='Мои заказы' />
			<OrdersList />
		</div>
	)
}

export default ProfileOrders
