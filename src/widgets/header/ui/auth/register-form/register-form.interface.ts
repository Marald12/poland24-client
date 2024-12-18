import { Dispatch, SetStateAction } from 'react'

export interface IRegisterForm {
	email: string
	password: string
	repeatPassword: string
	name: string
	phoneNumber: string
}

export interface IRegisterFormProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
