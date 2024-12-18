'use client'
import { FC, useState } from 'react'
import styles from './BurgerPopUp.module.scss'
import { IBurgerPopUpInterface } from '@/features/burger/pop-up/burgerPopUp.interface'
import cn from 'classnames'
import { IoMdClose } from 'react-icons/io'
import Nav from '@/shared/ui/components/nav/Nav'
import AuthForm from '@/widgets/header/ui/auth/auth-form/AuthForm'
import PopUp from '@/features/pop-up/PopUp'
import LinkUnderline from '@/shared/ui/components/link-underline/LinkUnderline'
import RegisterForm from '@/widgets/header/ui/auth/register-form/RegisterForm'

const BurgerPopUp: FC<IBurgerPopUpInterface> = ({ isOpen, setIsOpen }) => {
	const [isOpenAuthPopUp, setIsOpenAuthPopUp] = useState(false)
	const [isOpenRegisterPopUp, setIsOpenRegisterPopUp] = useState(false)

	const clickHandler = () => {
		setIsOpenAuthPopUp(prevState => !prevState)
		setIsOpenRegisterPopUp(prevState => !prevState)
	}

	return (
		<>
			<div className={cn(styles.pop_up, isOpen && styles.open)}>
				<div className={styles.pop_up__overlay}>
					<span
						className={styles.pop_up__close}
						onClick={() => setIsOpen(false)}
					>
						<IoMdClose color='#2d2d2d' size={24} />
					</span>
					<div className={styles.pop_up__container}>
						<div className={styles.auth}>
							<span onClick={() => setIsOpenAuthPopUp(true)}>Вход</span>{' '}
							<span className={styles.separator}>/</span>{' '}
							<span onClick={() => setIsOpenRegisterPopUp(true)}>
								Реестрация
							</span>
						</div>
						<Nav />
					</div>
				</div>
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
					<RegisterForm setIsOpen={setIsOpenRegisterPopUp} />
				</div>
			</PopUp>
		</>
	)
}

export default BurgerPopUp
