import axios from 'axios'
import { baseUrl } from '@/shared/utils/baseUrl'

export const axiosMain = () =>
	axios.create({
		baseURL: baseUrl,
		headers: {
			'Content-Type': 'application/json'
		}
	})
