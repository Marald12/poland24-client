'use client'
import React, { FC, useRef, useState } from 'react'
import styles from './OrderItem.module.scss'
import { IOrderItemProps } from '@/widgets/profile-page/orders/list/item/order-item.interface'
import dayjs from 'dayjs'
import cn from 'classnames'
import Button from '@/shared/ui/buttons/button/Button'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'

const OrderItem: FC<IOrderItemProps> = ({ order }) => {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const clickHandler = () =>
		setIsShow(prevState => {
			if (ref.current) {
				if (prevState) {
					ref.current!.style.transform = 'translateY(-1000px)'
					setTimeout(() => (ref.current!.style.display = 'none'), 200)
				} else {
					ref.current.style.display = 'block'
					setTimeout(
						() => (ref.current!.style.transform = 'translateY(0)'),
						200
					)
				}
			}

			return !prevState
		})

	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<div
					className={cn(
						styles.status,
						order.status == 'Выполнен' && styles.completed,
						order.status == 'Комплектуется' && styles.warning,
						order.status == 'Не выполнен' && styles.error
					)}
				>
					<span>
						№ {order._id.slice(18, 24)} от{' '}
						{dayjs(order.createdAt).format('DD.MM.YY')}
					</span>
					<h4>{order.status}</h4>
				</div>
				<div className={styles.description}>
					<span>{order.description}</span>
					<p>{order.comment}</p>
				</div>
				<div className={styles.konets}>
					<div className={styles.summa}>
						<span>Сумма заказа</span>
						<h4>{order.summa} грн.</h4>
					</div>
					<Button>Оплатить</Button>
					<FaRegQuestionCircle size={24} />
					<span onClick={clickHandler}>
						{!isShow ? (
							<FiPlus size={18} color='#000' />
						) : (
							<FiMinus size={18} color='#000' />
						)}
					</span>
				</div>
			</div>
			<div className={styles.info} ref={ref}>
				{order.comment}
			</div>
		</div>
	)
}

export default OrderItem
