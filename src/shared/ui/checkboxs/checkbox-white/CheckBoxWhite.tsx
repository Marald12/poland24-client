import { FC } from 'react'
import styles from './CheckBoxWhite.module.scss'
import { ICheckBoxProps } from '@/shared/ui/checkboxs/checkbox.interface'
import cn from 'classnames'

const CheckBoxWhite: FC<ICheckBoxProps> = ({ title, className, ...rest }) => {
	const id = Math.random()

	return (
		<div className={cn(styles.checkbox, className)}>
			<input id={`checkbox-${id}`} type='checkbox' {...rest} />
			<label htmlFor={`checkbox-${id}`}>{title}</label>
		</div>
	)
}

export default CheckBoxWhite
