'use client'
import { FC, useEffect } from 'react'
import HeaderAuth from '@/widgets/header/ui/auth/HeaderAuth'
import styles from './HeaderProfile.module.scss'
import HeaderProfilePopUp from '@/widgets/header/ui/profile/pop-up/HeaderProfilePopUp'
import Avatar from '@/shared/ui/components/avatar/Avatar'
import { useOutside } from '@/shared/hooks/useOutside'
import { userApi } from '@/features/redux/api/user/user.api'
import { useAuth } from '@/shared/hooks/useAuth'

const HeaderProfile: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const isAuth = useAuth().user
	const { data: user, refetch } = userApi.useGetProfileQuery(null)

	useEffect(() => {
		refetch()
	}, [isAuth])

	return (
		<>
			{isAuth ? (
				user && (
					<>
						<div className={styles.profile} onClick={() => setIsShow(true)}>
							<Avatar user={user} />
							<div className={styles.profile__name}>
								<span>{user.surname}</span>
								<span>{user.name}</span>
							</div>
						</div>
						<HeaderProfilePopUp
							ref={ref}
							isShow={isShow}
							setIsShow={setIsShow}
						/>
					</>
				)
			) : (
				<HeaderAuth />
			)}
		</>
	)
}

export default HeaderProfile
