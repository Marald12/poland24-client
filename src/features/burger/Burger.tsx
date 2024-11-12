'use client'
import { FC, useState } from 'react'
import styles from './Burger.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IBurgerInterface } from '@/features/burger/burger.interface'
import cn from 'classnames'
import BurgerPopUp from '@/features/burger/pop-up/BurgerPopUp'

const Burger: FC<IBurgerInterface> = ({ classname }) => {
	const [isOpen, setIsOpen] = useState(false)

	const clickHandler = () => setIsOpen(prevState => !prevState)

	return (
		<div className={cn(styles.burger, classname)}>
			<div onClick={clickHandler}>
				<RxHamburgerMenu color='#2d2d2d' size={24} />
			</div>
			<BurgerPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default Burger
