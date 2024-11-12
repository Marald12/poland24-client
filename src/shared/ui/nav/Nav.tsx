import { FC } from 'react'
import { headerNavList } from '@/widgets/header/ui/nav/headerNav.list'
import Link from 'next/link'
import { PiQuestionBold } from 'react-icons/pi'
import styles from './Nav.module.scss'

const Nav: FC = () => {
	return (
		<ul className={styles.nav}>
			{headerNavList.map(item => (
				<li key={item.title}>
					<Link href={item.href}>{item.title}</Link>
				</li>
			))}
			<li>
				<button>
					<PiQuestionBold size={18} /> Помощь в поиске товаров
				</button>
			</li>
		</ul>
	)
}

export default Nav
