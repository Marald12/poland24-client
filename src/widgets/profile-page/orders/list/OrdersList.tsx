'use client'
import React, { FC } from 'react'
import styles from './OrdersList.module.scss'
import { userApi } from '@/features/redux/api/user/user.api'
import OrderItem from '@/widgets/profile-page/orders/list/item/OrderItem'

const OrdersList: FC = () => {
	const { data } = userApi.useGetProfileQuery(null)

	return (
		<div className={styles.list}>
			{data?.orders.map(order => <OrderItem key={order._id} order={order} />)}
		</div>
	)
}

export default OrdersList
