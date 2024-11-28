import { FC } from 'react'
import styles from './Avatar.module.scss'
import { IUser } from '@/features/redux/api/user/user.interface'

const Avatar: FC<{ user: IUser }> = ({ user }) => {
	return (
		<div className={styles.avatar}>
			<span>{user.name.slice(0, 1)}</span>
			<span>{user.surname.slice(0, 1)}</span>
		</div>
	)
}

export default Avatar
