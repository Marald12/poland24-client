'use client'
import { FC, useState } from 'react'
import styles from './BurgerPopUp.module.scss'
import { IBurgerPopUpInterface } from '@/features/burger/pop-up/burgerPopUp.interface'
import cn from 'classnames'
import { IoMdClose, IoMdExit } from 'react-icons/io'
import Nav from '@/shared/ui/components/nav/Nav'
import AuthForm from '@/widgets/header/ui/auth/auth-form/AuthForm'
import PopUp from '@/features/pop-up/PopUp'
import LinkUnderline from '@/shared/ui/components/link-underline/LinkUnderline'
import RegisterForm from '@/widgets/header/ui/auth/register-form/RegisterForm'
import Avatar from '@/shared/ui/components/avatar/Avatar'
import Link from 'next/link'
import Image from 'next/image'
import settingsImg from '@/assets/images/settings.svg'
import ordersImg from '@/assets/images/orders.svg'
import reviewsImg from '@/assets/images/reviews.svg'
import { useAuth } from '@/shared/hooks/useAuth'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useRouter } from 'next/navigation'
import { authLogout } from '@/features/redux/auth/auth.api'

const BurgerPopUp: FC<IBurgerPopUpInterface> = ({ isOpen, setIsOpen }) => {
	const [isOpenAuthPopUp, setIsOpenAuthPopUp] = useState(false)
	const [isOpenRegisterPopUp, setIsOpenRegisterPopUp] = useState(false)
	const dispatch = useAppDispatch()
	const router = useRouter()

	const logoutClickHandler = () => {
		dispatch(authLogout())
		setIsOpen(false)
		router.push('/')
		router.refresh()
	}

	const clickHandler = () => {
		setIsOpenAuthPopUp(prevState => !prevState)
		setIsOpenRegisterPopUp(prevState => !prevState)
	}

	const user = useAuth().user

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
						{!user && (
							<div className={styles.auth}>
								<span onClick={() => setIsOpenAuthPopUp(true)}>Вход</span>{' '}
								<span className={styles.separator}>/</span>{' '}
								<span onClick={() => setIsOpenRegisterPopUp(true)}>
									Реестрация
								</span>
							</div>
						)}
						<Nav />
						<div className={styles.popUp}>
							{user && (
								<>
									<div className={styles.popUp__header}>
										<Avatar user={user} />
										<div className={styles.popUp__avatar_name}>
											<b>
												{user.surname} {user.name}
											</b>
											<span>{user.email}</span>
										</div>
									</div>
									<div className={styles.popUp__content}>
										<Link href='/profile'>
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
									<div
										className={styles.popUp__footer}
										onClick={logoutClickHandler}
									>
										<span>Выход</span>
										<IoMdExit size={24} color='#828282' />
									</div>
								</>
							)}
						</div>
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
