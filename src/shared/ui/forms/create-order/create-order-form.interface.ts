import { Dispatch, SetStateAction } from 'react'

export interface ICreateOrderFormProps {
	url?: string
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export interface ICreateOrderFormForAuth {
	url: string | undefined
	count: number
	price: number
	deliveryPrice: number
	description: string
	shopId: string
	comment: string
	isUsed: true
}

export interface ICreateOrderFormNoAuth extends ICreateOrderFormForAuth {
	name: string
	surname: string
	phoneNumber: string
	email: string
}
