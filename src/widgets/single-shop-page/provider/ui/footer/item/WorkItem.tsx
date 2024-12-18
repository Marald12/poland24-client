import React, { FC } from 'react'
import styles from './WorkItem.module.scss'
import { IWorkItemProps } from '@/widgets/single-shop-page/provider/ui/footer/item/work-item.interface'

const WorkItem: FC<IWorkItemProps> = ({ item, id }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.border}>
				<span>{id >= 10 ? id : `0${id}`}</span>
				<div className={styles.line} />
			</div>
			<div className={styles.info}>
				<div className={styles.header}>
					<h1>{id >= 10 ? id : `0${id}`}</h1>
					<h4>{item.title}</h4>
				</div>
				<p>{item.description}</p>
			</div>
		</div>
	)
}

export default WorkItem
