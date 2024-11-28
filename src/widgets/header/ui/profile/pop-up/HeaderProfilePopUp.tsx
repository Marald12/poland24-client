'use client'
import { FC } from 'react'
import styles from './HeaderProfilePopUp.module.scss'
import Avatar from '@/shared/ui/components/avatar/Avatar'
import { useAuth } from '@/shared/hooks/useAuth'
import cn from 'classnames'
import { IoMdExit } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { authLogout } from '@/features/redux/auth/auth.api'
import { TypeOut } from '@/shared/hooks/useOutside'
import Image from 'next/image'
import Link from 'next/link'
import settingsImg from '@/assets/images/settings.svg'
import ordersImg from '@/assets/images/orders.svg'
import reviewsImg from '@/assets/images/reviews.svg'

const HeaderProfilePopUp: FC<TypeOut> = ({ isShow, setIsShow, ref }) => {
	const user = useAuth().user
	const dispatch = useDispatch()

	const logoutClickHandler = async () => {
		// @ts-ignore
		dispatch(authLogout())
		setIsShow(false)
	}

	return (
		<div className={cn(styles.popUp, isShow && styles.open)} ref={ref}>
			<div className={styles.popUp__header}>
				<Avatar user={user!} />
				<div className={styles.popUp__avatar_name}>
					<b>
						{user?.surname} {user?.name}
					</b>
					<span>{user?.email}</span>
				</div>
			</div>
			<div className={styles.popUp__content}>
				<Link href='/profile/settings'>
					<Image src={settingsImg} alt={settingsImg} />
					<span>Настройки</span>
				</Link>
				<Link href='/profile/orders'>
					<Image src={ordersImg} alt={ordersImg} />
					<span>Мои заказы</span>
				</Link>
				<Link href='/profile/reviews'>
					<Image src={reviewsImg} alt={reviewsImg} />
					<span>Мои отзывы</span>
				</Link>
			</div>
			<div className={styles.popUp__footer} onClick={logoutClickHandler}>
				<span>Выход</span>
				<IoMdExit size={24} color='#828282' />
			</div>
		</div>
	)
}

export default HeaderProfilePopUp
