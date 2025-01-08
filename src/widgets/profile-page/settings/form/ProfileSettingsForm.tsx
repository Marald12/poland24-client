'use client'
import React, { FC } from 'react'
import styles from './ProfileSettingsForm.module.scss'
import InputNoSolid from '@/shared/ui/input/no-solid/InputNoSolid'
import { useForm } from 'react-hook-form'
import { ISettingsForm } from '@/widgets/profile-page/settings/form/settings-form.interface'
import Button from '@/shared/ui/buttons/button/Button'
import { FaRegSave } from 'react-icons/fa'
import CheckBoxRed from '@/shared/ui/checkboxs/checkbox-red/CheckBoxRed'
import { getDifferingFields } from '@/widgets/profile-page/settings/form/get-differing-fields'
import { userApi } from '@/features/redux/api/user/user.api'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { IUserDto } from '@/features/redux/api/user/user.interface'

const ProfileSettingsForm: FC = () => {
	const { data: user } = userApi.useGetProfileQuery(null)
	const [mutate, { isSuccess }] = userApi.useUpdateUserMutation()
	const router = useRouter()
	const { register, handleSubmit, watch, formState } = useForm<ISettingsForm>({
		defaultValues: {
			name: user?.name,
			surname: user?.surname,
			email: user?.email,
			phoneNumber: user?.phoneNumber
		}
	})

	const submitHandler = (data: ISettingsForm) => {
		const tempUser = {
			name: user?.name,
			surname: user?.surname,
			email: user?.email,
			phoneNumber: user?.phoneNumber
		}
		const updateData = getDifferingFields(tempUser, data) as IUserDto
		if (updateData) {
			mutate(updateData)
			if (isSuccess) {
				router.push('/')
				router.refresh()
				toast.success('Профиль успешно обновлён')
			}
		}
	}

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit(submitHandler)}>
			<h3>Личные данные</h3>
			<div className={styles.inputs}>
				<InputNoSolid
					label='Имя'
					error={formState.errors.name?.message}
					{...register('name', {
						minLength: {
							value: 2,
							message: 'Минимальная длина 2 символа'
						}
					})}
				/>
				<InputNoSolid
					label='Фамилия'
					error={formState.errors.surname?.message}
					{...register('surname', {
						minLength: {
							value: 4,
							message: 'Минимальная длина 4 символа'
						}
					})}
				/>
				<InputNoSolid label='Почта' {...register('email')} type='email' />
				<InputNoSolid
					label='Телефон'
					{...register('phoneNumber', {
						pattern: {
							value:
								/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
							message: 'Номер телефона не валидный'
						}
					})}
				/>
				<InputNoSolid
					label='Пароль'
					type='password'
					placeholder='Введите пароль'
					error={formState.errors.password?.message}
					{...register('password', {
						validate: (value, formValues) => {
							if (value !== formValues.repeatPassword)
								return 'Пароли не совпадают'
						},
						minLength: {
							value: 8,
							message: 'Минимальная длина 8 символов'
						},
						maxLength: {
							value: 32,
							message: 'Максимальная длина 32 символа'
						}
					})}
				/>
				<InputNoSolid
					label='Повторить пароль'
					type='password'
					placeholder='Повторите пароль'
					error={formState.errors.repeatPassword?.message}
					{...register('repeatPassword', {
						validate: (value, formValues) => {
							if (value !== formValues.password) return 'Пароли не совпадают'
						},
						minLength: {
							value: 8,
							message: 'Минимальная длина 8 символов'
						},
						maxLength: {
							value: 32,
							message: 'Максимальная длина 32 символа'
						}
					})}
				/>
				<Button disabled={!watch('isPolicy')}>
					<FaRegSave size={21} />
				</Button>
			</div>
			<CheckBoxRed
				title='согласен с публичным договором предоставлния услуг'
				className={styles.checkbox}
				{...register('isPolicy')}
			/>
		</form>
	)
}

export default ProfileSettingsForm
