import { FC } from 'react'
import styles from './HeaderAuth.module.scss'

const HeaderAuth: FC = () => {
	return (
		<div className={styles.auth}>
			<span>Вход</span> <span className={styles.separator}>/</span>{' '}
			<span>Реестрация</span>
		</div>
	)
}

export default HeaderAuth
