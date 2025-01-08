'use client'
import React, { FC, useRef, useState } from 'react'
import styles from './OrderItemMobile.module.scss'
import { IOrderItemProps } from '@/widgets/profile-page/orders/list/item/order-item.interface'
import dayjs from 'dayjs'
import cn from 'classnames'
import Button from '@/shared/ui/buttons/button/Button'
import { FiMinus, FiPlus } from 'react-icons/fi'
import novaPoshtaImg from '@/assets/images/nova-poshta.png'
import Image from 'next/image'
import Link from 'next/link'

const OrderItemMobile: FC<IOrderItemProps> = ({ order }) => {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const clickHandler = () =>
		setIsShow(prevState => {
			if (ref.current) {
				if (prevState) {
					ref.current!.style.transform = 'scale(0)'
					setTimeout(() => (ref.current!.style.display = 'none'), 200)
				} else {
					ref.current.style.display = 'flex'
					setTimeout(() => (ref.current!.style.transform = 'scale(1)'), 1)
				}
			}

			return !prevState
		})

	return (
		<div className={styles.wrapper}>
			<div className={cn(styles.item, isShow && styles.hidden)}>
				<div>
					<div
						className={cn(
							styles.status,
							order.status == 'Выполнен' && styles.completed,
							order.status == 'Комплектуется' && styles.warning,
							order.status == 'Не выполнен' && styles.error
						)}
					>
						<span>№ {order._id.slice(18, 24)}</span>
						<h4>{order.status}</h4>
					</div>
					<div className={styles.summa__header}>
						<span>Сумма</span> <h4>{order.summa}</h4>
					</div>
				</div>
				{!isShow && (
					<>
						<div className={styles.description}>
							<h4>
								{order.user
									? `${order.user.name} ${order.user.surname}`
									: `${order.name} ${order.surname}`}
							</h4>
							<span>{order.user?.email}</span>
						</div>
					</>
				)}
				<div className={styles.konets}>
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
				<div className={styles.side__info}>
					<div className={styles.delivery__info}>
						<h4>Информация о заказе</h4>
						<div>
							<span>Перевозчик:</span>
							<h5>Новая почта</h5>
						</div>
						<div>
							<span>Адрес:</span>
							<h5>-</h5>
						</div>
						<div>
							<span>Получатель:</span>
							<h5>
								{order.user
									? `${order.user.name} ${order.user.surname}`
									: `${order.name} ${order.surname}`}
							</h5>
						</div>
						<div>
							<span>Телефон:</span>
							<h5>{order.user ? order.user.phoneNumber : order.phoneNumber}</h5>
						</div>
						<div>
							<span>e-mail:</span>
							<h5>{order.user ? order.user.email : order.email}</h5>
						</div>
					</div>
					<div className={styles.delivery}>
						<h4>Доставка</h4>
						<div>
							<Image
								src={novaPoshtaImg}
								alt='nova poshta'
								width={48}
								height={48}
							/>
							<div>
								<div>
									<span>Дата отправки:</span>
									<h5>{dayjs(order.createdAt).format('DD.MM.YYYY')}</h5>
								</div>
								<div>
									<span>Накладная:</span>
									<h5>00000000000000</h5>
								</div>
								<div>
									<span>Количество мест:</span>
									<h5>1</h5>
								</div>
								<div className={styles.track}>
									<Link href=''>Отследить посылку</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.order}>
					<h4>Ваш заказ</h4>
					<div className={styles.table__header}>
						<span>{order.description}</span>
						<h5>Сумма заказа</h5>
						<h5>К-во</h5>
						<h5>Сумма</h5>
					</div>
					<div className={styles.table__content}>
						<div>
							<span>{order.description}</span>
							<span>{order.comment}</span>
						</div>
						<span>{order.summa} грн.</span>
						<span>{order.count}</span>
						<span>{order.summa} грн.</span>
					</div>
					<Button>Оплатить</Button>
				</div>
			</div>
		</div>
	)
}

export default OrderItemMobile
