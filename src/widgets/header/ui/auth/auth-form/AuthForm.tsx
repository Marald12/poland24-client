'use client'
import { FC } from 'react'
import styles from './AuthForm.module.scss'
import Input from '@/shared/ui/input/Input'
import { useForm } from 'react-hook-form'
import {
	IAuthForm,
	IAuthFormProps
} from '@/widgets/header/ui/auth/auth-form/auth-form.interface'
import Button from '@/shared/ui/buttons/button/Button'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { authLogin } from '@/features/redux/auth/auth.api'
import { useRouter } from 'next/navigation'

const AuthForm: FC<IAuthFormProps> = ({ setIsOpen }) => {
	const { register, handleSubmit, formState } = useForm<IAuthForm>({
		mode: 'onChange'
	})
	const dispatch = useAppDispatch()
	const router = useRouter()

	const submitHandler = async (data: IAuthForm) => {
		const response = await dispatch(authLogin(data))
		if (response.type === 'auth/login/fulfilled') {
			setIsOpen(false)
			router.push('/')
			router.refresh()
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
			<Input
				type='email'
				placeholder='Введите e-mail *'
				error={formState.errors.email?.message}
				{...register('email', {
					required: {
						value: true,
						message: 'Поле e-mail пустое'
					}
				})}
			/>
			<Input
				type='password'
				placeholder='Введите пароль *'
				error={formState.errors.password?.message}
				{...register('password', {
					required: {
						value: true,
						message: 'Поле пароль пустое'
					}
				})}
			/>
			<div>
				<Button>Войти</Button>
			</div>
		</form>
	)
}

export default AuthForm
