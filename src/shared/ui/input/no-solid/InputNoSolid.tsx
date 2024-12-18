import { FC } from 'react'
import styles from './InputNoSolid.module.scss'
import { IInputProps } from '@/shared/ui/input/input.interface'
import cn from 'classnames'

const InputNoSolid: FC<IInputProps> = ({
	className,
	error,
	label,
	...rest
}) => {
	const id = Math.random()

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{label && (
					<label htmlFor={`input-${id}`} className={styles.label}>
						{label}
					</label>
				)}
				<input
					id={`input-${id}`}
					className={cn(styles.input, className)}
					{...rest}
				/>
			</div>
			{error && <span className={styles.error__message}>{error}</span>}
		</div>
	)
}

export default InputNoSolid
