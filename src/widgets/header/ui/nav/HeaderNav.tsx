import { FC } from 'react'
import styles from './HeaderNav.module.scss'
import cn from 'classnames'
import Nav from '@/shared/ui/components/nav/Nav'

const HeaderNav: FC = () => {
	return (
		<nav className={cn(styles.nav, 'container')}>
			<Nav />
		</nav>
	)
}

export default HeaderNav
