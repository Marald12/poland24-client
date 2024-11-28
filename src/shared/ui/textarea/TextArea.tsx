import { FC } from 'react'
import styles from './TextArea.module.scss'
import { ITextAreaProps } from '@/shared/ui/textarea/textarea.interface'
import cn from 'classnames'

const TextArea: FC<ITextAreaProps> = ({ title, error, className, ...rest }) => {
	const id = Math.random()

	return (
		<div className={cn(styles.textarea, className)}>
			{title && <span>{title}</span>}
			<textarea id={`textarea-${id}`} {...rest} />
			{error && <label htmlFor={`textarea-${id}`}>{error}</label>}
		</div>
	)
}

export default TextArea
