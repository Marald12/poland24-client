import { IBase } from '@/features/redux/api/base.interface'

export interface IRequest extends IBase {
	url: string
	comment: string
	media?: string[]
}

export interface IRequestDto {
	url: string
	comment: string
	media?: string[]
}
