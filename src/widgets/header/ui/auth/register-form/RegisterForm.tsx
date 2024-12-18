'use client'
import { FC } from 'react'
import styles from './RegisterForm.module.scss'
import Input from '@/shared/ui/input/Input'
import { useForm } from 'react-hook-form'
import Button from '@/shared/ui/buttons/button/Button'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { authRegister } from '@/features/redux/auth/auth.api'
import { useRouter } from 'next/navigation'
import {
	IRegisterForm,
	IRegisterFormProps
} from '@/widgets/header/ui/auth/register-form/register-form.interface'

const RegisterForm: FC<IRegisterFormProps> = ({ setIsOpen }) => {
	const { register, handleSubmit, formState } = useForm<IRegisterForm>({
		mode: 'onChange'
	})
	const dispatch = useAppDispatch()
	const router = useRouter()

	const submitHandler = async (data: IRegisterForm) => {
		const nameAndSurname = data.name.split(' ')

		const response = await dispatch(
			authRegister({
				email: data.email,
				password: data.password,
				phoneNumber: data.phoneNumber,
				name: nameAndSurname[0],
				surname: nameAndSurname[1]
			})
		)
		if (response.type === 'auth/register/fulfilled') {
			setIsOpen(false)
			router.push('/')
			router.refresh()
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
			<Input
				placeholder='Имя фамилия'
				error={formState.errors.name?.message}
				{...register('name', {
					required: {
						value: true,
						message: 'Поле имя и фамилия пустое'
					}
				})}
			/>
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
				type='tel'
				placeholder='Номер телефона  '
				error={formState.errors.phoneNumber?.message}
				{...register('phoneNumber', {
					pattern: {
						value:
							/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
						message: 'Номер телефона не валидный'
					},
					required: {
						value: true,
						message: 'Поле номер телефона пустое'
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
					},
					minLength: {
						value: 8,
						message: 'Миниммум 8 символов'
					},
					maxLength: {
						value: 32,
						message: 'Максимум 32 символа'
					},
					validate: (value, formValues) => {
						if (value !== formValues.repeatPassword)
							return 'Пароли не совпадают'
					}
				})}
			/>
			<Input
				type='password'
				placeholder='Повторить пароль *'
				error={formState.errors.repeatPassword?.message}
				{...register('repeatPassword', {
					required: {
						value: true,
						message: 'Поле пароль пустое'
					},
					minLength: {
						value: 8,
						message: 'Миниммум 8 символов'
					},
					maxLength: {
						value: 32,
						message: 'Максимум 32 символа'
					},
					validate: (value, formValues) => {
						if (value !== formValues.password) return 'Пароли не совпадают'
					}
				})}
			/>
			<div>
				<Button>Регистрация</Button>
			</div>
		</form>
	)
}

export default RegisterForm
