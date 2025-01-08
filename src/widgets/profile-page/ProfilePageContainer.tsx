'use client'
import React, { FC, PropsWithChildren, useEffect } from 'react'
import styles from './ProfilePageContainer.module.scss'
import ProfileSidebar from '@/widgets/profile-page/sidebar/ProfileSidebar'
import cn from 'classnames'
import { useAuth } from '@/shared/hooks/useAuth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const ProfilePageContainer: FC<PropsWithChildren> = ({ children }) => {
	const isAuth = useAuth().user
	const router = useRouter()

	useEffect(() => {
		if (!isAuth) {
			router.push('/')
			toast.error('Вы не авторизованы')
		}
	}, [isAuth])

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<ProfileSidebar />
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default ProfilePageContainer
