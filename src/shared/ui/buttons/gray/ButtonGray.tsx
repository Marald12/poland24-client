import { FC } from 'react'
import styles from './ButtonGray.module.scss'
import { IButton } from '@/shared/ui/buttons/button.interface'

const Button: FC<IButton> = ({ children, ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

export default Button
