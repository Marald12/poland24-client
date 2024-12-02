import { baseApi } from '@/features/redux/api/base.api'
import { IMedia, IMediaDto } from '@/features/redux/api/media/media.interface'

export const mediaApi = baseApi.injectEndpoints({
	endpoints: build => ({
		upload: build.mutation<IMedia, IMediaDto>({
			query: ({ folder, media }) => ({
				url: '/media',
				method: 'POST',
				params: { folder },
				body: {
					media
				}
			})
		})
	})
})
