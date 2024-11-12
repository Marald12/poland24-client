'use client'
import { FC } from 'react'
import styles from './BurgerPopUp.module.scss'
import { IBurgerPopUpInterface } from '@/features/burger/pop-up/burgerPopUp.interface'
import cn from 'classnames'
import PlaceOrderButton from '@/shared/ui/buttons/place-order/PlaceOrderButton'
import HeaderAuth from '@/widgets/header/ui/auth/HeaderAuth'
import { IoMdClose } from 'react-icons/io'
import Nav from '@/shared/ui/nav/Nav'

const BurgerPopUp: FC<IBurgerPopUpInterface> = ({ isOpen, setIsOpen }) => {
	return (
		<div className={cn(styles.pop_up, isOpen && styles.open)}>
			<div className={styles.pop_up__overlay}>
				<span className={styles.pop_up__close} onClick={() => setIsOpen(false)}>
					<IoMdClose color='#2d2d2d' size={24} />
				</span>
				<div className={styles.pop_up__container}>
					<div className={styles.auth}>
						<HeaderAuth />
					</div>
					<Nav />
					<PlaceOrderButton />
				</div>
			</div>
		</div>
	)
}

export default BurgerPopUp
