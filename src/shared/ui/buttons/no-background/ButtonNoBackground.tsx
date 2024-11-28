import { FC } from 'react'
import styles from './ButtonNoBackground.module.scss'
import cn from 'classnames'
import { IButton } from '@/shared/ui/buttons/button.interface'

const ButtonNoBackground: FC<IButton> = ({ className, children, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default ButtonNoBackground
