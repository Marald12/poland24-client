'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './OrdersList.module.scss'
import OrderItem from '@/widgets/profile-page/orders/list/item/OrderItem'
import { orderApi } from '@/features/redux/api/order/order.api'
import { usePagination } from '@/widgets/profile-page/orders/list/use-pagination'
import cn from 'classnames'
import OrderItemMobile from '@/widgets/profile-page/orders/list/item/mobile/OrderItemMobile'

const OrdersList: FC = () => {
	const [limit] = useState(5)
	const [skip, setSkip] = useState(0)
	const [active, setActive] = useState(1)
	const { data, refetch } = orderApi.useGetInPaginationQuery({ limit, skip })
	const pagination = usePagination()

	useEffect(() => {
		refetch()
	}, [])

	return (
		<div className={styles.list}>
			<div className={styles.items}>
				{data && data.map(order => <OrderItem key={order._id} order={order} />)}
			</div>
			<div className={styles.items__mobile}>
				{data &&
					data.map(order => <OrderItemMobile key={order._id} order={order} />)}
			</div>
			<div className={styles.pagination}>
				<span
					onClick={() =>
						setSkip(prevState => {
							if (prevState > 0 && active > 0) {
								setActive(active - 1)
								return prevState - 5
							}
							return prevState
						})
					}
				>
					Назад
				</span>
				{pagination &&
					pagination.pagination.map(count => (
						<span
							key={count}
							onClick={() => {
								setSkip(5 * count - 5)
								setActive(count)
							}}
							className={cn(
								styles.pagination__count,
								active == count && styles.active
							)}
						>
							{count <= 9 ? `0${count}` : count}
						</span>
					))}
				<span
					onClick={() =>
						setSkip(prevState => {
							if (
								prevState !== pagination!.pages * 5 - 5 &&
								active !== pagination!.pages * 5 - 5
							) {
								setActive(active + 1)
								return prevState + 5
							}

							return prevState
						})
					}
				>
					Далее
				</span>
			</div>
		</div>
	)
}

export default OrdersList
