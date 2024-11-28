'use client'
import { FC } from 'react'
import styles from './PopUp.module.scss'
import { IPopUpProps } from '@/features/pop-up/pop-up.interface'
import { RxCross2 } from 'react-icons/rx'
import cn from 'classnames'

const PopUp: FC<IPopUpProps> = ({ children, header, isOpen, setIsOpen }) => {
	return (
		<div className={cn(styles.pop_up__overlay, isOpen && styles.open)}>
			<div className={styles.pop_up__container}>
				<div className={styles.pop_up__header}>
					<h1 className={styles.pop_up__header_title}>{header}</h1>
					<button onClick={() => setIsOpen(false)}>
						<RxCross2 size={24} color='#fff' />
					</button>
				</div>
				<div className={styles.pop_up__content}>{children}</div>
			</div>
		</div>
	)
}

export default PopUp
