'use client'
import { FC, useState } from 'react'
import styles from './Burger.module.scss'
import { IBurgerInterface } from '@/features/burger/burger.interface'
import cn from 'classnames'
import BurgerPopUp from '@/features/burger/pop-up/BurgerPopUp'
import { GiHamburgerMenu } from 'react-icons/gi'

const Burger: FC<IBurgerInterface> = ({ classname }) => {
	const [isOpen, setIsOpen] = useState(false)

	const clickHandler = () => setIsOpen(prevState => !prevState)

	return (
		<div className={cn(styles.burger, classname)}>
			<div onClick={clickHandler}>
				<GiHamburgerMenu color='#fff' size={21} />
			</div>
			<BurgerPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default Burger
