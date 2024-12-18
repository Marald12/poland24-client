import React, { FC } from 'react'
import styles from './HeaderNav.module.scss'
import Link from 'next/link'

const HeaderNav: FC<{
	links: {
		href: string
		title: string
	}[]
}> = ({ links }) => {
	return (
		<div className={styles.header}>
			<Link href='/'>Главная</Link>
			{links.map(item => (
				<Link href={item.href} key={item.title}>
					{item.title}
				</Link>
			))}
		</div>
	)
}

export default HeaderNav
