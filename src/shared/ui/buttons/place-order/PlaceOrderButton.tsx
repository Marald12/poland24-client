import { FC } from 'react'
import { IButton } from '@/shared/ui/buttons/button.interface'
import cn from 'classnames'
import styles from './PlaceOrderButton.module.scss'

const PlaceOrderButton: FC<IButton> = ({ className, ...rest }) => {
	return (
		<button className={cn(className, styles.button)} {...rest}>
			Оформить заказ
		</button>
	)
}

export default PlaceOrderButton
