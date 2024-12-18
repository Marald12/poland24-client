'use client'
import { FC, useState } from 'react'
import styles from './HeaderAuth.module.scss'
import PopUp from '@/features/pop-up/PopUp'
import LinkUnderline from '@/shared/ui/components/link-underline/LinkUnderline'
import AuthForm from '@/widgets/header/ui/auth/auth-form/AuthForm'
import RegisterForm from '@/widgets/header/ui/auth/register-form/RegisterForm'

const HeaderAuth: FC = () => {
	const [isOpenAuthPopUp, setIsOpenAuthPopUp] = useState(false)
	const [isOpenRegisterPopUp, setIsOpenRegisterPopUp] = useState(false)

	const clickHandler = () => {
		setIsOpenAuthPopUp(prevState => !prevState)
		setIsOpenRegisterPopUp(prevState => !prevState)
	}

	return (
		<>
			<div className={styles.auth}>
				<span onClick={() => setIsOpenAuthPopUp(true)}>Вход</span>{' '}
				<span className={styles.separator}>/</span>{' '}
				<span onClick={() => setIsOpenRegisterPopUp(true)}>Реестрация</span>
			</div>
			<PopUp
				header='Вход'
				isOpen={isOpenAuthPopUp}
				setIsOpen={setIsOpenAuthPopUp}
			>
				<div className={styles.register}>
					<span>У вас еще нету аккаунта ?</span>
					<LinkUnderline
						href='#'
						className={styles.register__link}
						onClick={clickHandler}
					>
						Зарегистрируйтесь
					</LinkUnderline>
				</div>
				<AuthForm setIsOpen={setIsOpenAuthPopUp} />
			</PopUp>
			<PopUp
				header='Регистрация'
				isOpen={isOpenRegisterPopUp}
				setIsOpen={setIsOpenRegisterPopUp}
			>
				<div className={styles.register}>
					<span>У вас уже есть аккаунт ?</span>
					<LinkUnderline
						href='#'
						className={styles.register__link}
						onClick={clickHandler}
					>
						Войдите
					</LinkUnderline>
				</div>
				<RegisterForm setIsOpen={setIsOpenAuthPopUp} />
			</PopUp>
		</>
	)
}

export default HeaderAuth
