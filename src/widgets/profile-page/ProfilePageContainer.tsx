import React, { FC, PropsWithChildren } from 'react'
import styles from './ProfilePageContainer.module.scss'
import ProfileSidebar from '@/widgets/profile-page/sidebar/ProfileSidebar'
import cn from 'classnames'

const ProfilePageContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={cn(styles.wrapper, 'container')}>
			<ProfileSidebar />
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default ProfilePageContainer
