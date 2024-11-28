import { FC } from 'react'
import styles from './Header.module.scss'
import Logo from '@/shared/ui/components/logo/Logo'
import PlaceOrderButton from '@/shared/ui/buttons/place-order/PlaceOrderButton'
import HeaderSocial from '@/widgets/header/ui/social/HeaderSocial'
import HeaderExchange from '@/widgets/header/ui/exchange/HeaderExchange'
import cn from 'classnames'
import Burger from '@/features/burger/Burger'
import HeaderNav from '@/widgets/header/ui/nav/HeaderNav'
import HeaderProfile from '@/widgets/header/ui/profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div>
				<div className={cn(styles.header__logo, 'container')}>
					<Logo />
					<HeaderSocial />
					<HeaderExchange />
					<PlaceOrderButton />
					<HeaderProfile />
					<Burger classname={styles.burger} />
				</div>
				<HeaderNav />
			</div>
		</header>
	)
}

export default Header
