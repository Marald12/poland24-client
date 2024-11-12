import { Dispatch, SetStateAction } from 'react'

export interface IBurgerPopUpInterface {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
