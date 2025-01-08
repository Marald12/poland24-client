import { axiosMain } from '@/shared/utils/axios'
import { IMedia } from '@/features/redux/api/media/media.interface'

export const mediaService = {
	async upload(media: FormData, folder: string) {
		return await axiosMain().post<IMedia>('/media', media, {
			params: { folder },
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}
