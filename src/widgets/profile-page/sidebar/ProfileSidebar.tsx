'use client'
import React, { FC } from 'react'
import styles from './ProfileSidebar.module.scss'
import Avatar from '@/shared/ui/components/avatar/Avatar'
import Link from 'next/link'
import Image from 'next/image'
import settingsImg from '@/assets/images/settings.svg'
import ordersImg from '@/assets/images/orders.svg'
import reviewsImg from '@/assets/images/reviews.svg'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import { userApi } from '@/features/redux/api/user/user.api'

const ProfileSidebar: FC = () => {
	const { data: user } = userApi.useGetProfileQuery(null)
	const pathname = usePathname()

	return (
		<aside className={styles.sidebar}>
			{user && (
				<>
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
						<Link
							href='/profile'
							className={cn(pathname == '/profile' && styles.active)}
						>
							<Image src={settingsImg} alt={settingsImg} />
							<span>Настройки</span>
						</Link>
						<Link
							href='/profile/orders'
							className={cn(pathname == '/profile/orders' && styles.active)}
						>
							<Image src={ordersImg} alt={ordersImg} />
							<span>Мои заказы</span>
						</Link>
						<Link
							href='/profile/reviews'
							className={cn(pathname == '/profile/reviews' && styles.active)}
						>
							<Image src={reviewsImg} alt={reviewsImg} />
							<span>Мои отзывы</span>
						</Link>
					</div>
				</>
			)}
		</aside>
	)
}

export default ProfileSidebar
