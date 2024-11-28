import { FC } from 'react'
import styles from './Input.module.scss'
import { IInputProps } from '@/shared/ui/input/input.interface'
import cn from 'classnames'

const Input: FC<IInputProps> = ({ className, error, ...rest }) => {
	return (
		<div className={styles.wrapper}>
			<input className={cn(styles.input, className)} {...rest} />
			{error && <span className={styles.error__message}>{error}</span>}
		</div>
	)
}

export default Input
