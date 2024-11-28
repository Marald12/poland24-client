'use client'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './PlaceOrderButton.module.scss'
import CreateOrderFormForAuth from '@/shared/ui/forms/create-order/for-auth/CreateOrderFormForAuth'
import CreateOrderForm from '@/shared/ui/forms/create-order/CreateOrderForm'
import PopUp from '@/features/pop-up/PopUp'
import { useAuth } from '@/shared/hooks/useAuth'
import { IPlaceOrderButtonProps } from '@/shared/ui/buttons/place-order/place-order-button.interface'

const PlaceOrderButton: FC<IPlaceOrderButtonProps> = ({
	className,
	url,
	...rest
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const isAuth = useAuth().user

	return (
		<>
			<button
				className={cn(className, styles.button)}
				onClick={() => setIsOpen(prevState => !prevState)}
				{...rest}
			>
				Оформить заказ
			</button>
			<PopUp header='Сделать заказ' isOpen={isOpen} setIsOpen={setIsOpen}>
				{isAuth ? (
					<CreateOrderFormForAuth setIsShow={setIsOpen} url={url} />
				) : (
					<CreateOrderForm setIsShow={setIsOpen} url={url} />
				)}
			</PopUp>
		</>
	)
}

export default PlaceOrderButton
