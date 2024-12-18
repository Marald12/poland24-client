import React, { FC } from 'react'
import styles from './ProfileSettings.module.scss'
import ProfileSettingsForm from '@/widgets/profile-page/settings/form/ProfileSettingsForm'
import SectionTitleSmall from '@/shared/ui/components/section-title/small/SectionTitleSmall'

const ProfileSettings: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SectionTitleSmall title='Редактировать профиль' />
			<ProfileSettingsForm />
		</div>
	)
}

export default ProfileSettings
