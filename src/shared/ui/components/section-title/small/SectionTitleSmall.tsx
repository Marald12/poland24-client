import { FC } from 'react'
import styles from './SectionTitleSmall.module.scss'
import { ISectionTitleProps } from '@/shared/ui/components/section-title/section-title.interface'
import cn from 'classnames'

const SectionTitleSmall: FC<ISectionTitleProps> = ({
	title,
	description,
	className,
	...rest
}) => {
	return (
		<div className={cn(styles.wrapper, className)} {...rest}>
			<h1 className={styles.title}>{title}</h1>
			{description && <h3 className={styles.description}>{description}</h3>}
		</div>
	)
}

export default SectionTitleSmall
