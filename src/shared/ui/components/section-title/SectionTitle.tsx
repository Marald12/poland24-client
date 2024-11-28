import { FC } from 'react'
import styles from './SectionTitle.module.scss'
import { ISectionTitleProps } from '@/shared/ui/components/section-title/section-title.interface'

const SectionTitle: FC<ISectionTitleProps> = ({ title, description }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
			{description && <h3 className={styles.description}>{description}</h3>}
		</div>
	)
}

export default SectionTitle
