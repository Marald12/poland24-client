import { FC } from 'react'
import styles from './CheckBoxRed.module.scss'
import { ICheckBoxProps } from '@/shared/ui/checkboxs/checkbox.interface'
import cn from 'classnames'

const CheckBoxRed: FC<ICheckBoxProps> = ({ title, className, ...rest }) => {
	const id = Math.random()

	return (
		<div className={cn(styles.checkbox, className)}>
			<input id={`checkbox-${id}`} type='checkbox' {...rest} />
			<label htmlFor={`checkbox-${id}`}>{title}</label>
		</div>
	)
}

export default CheckBoxRed
