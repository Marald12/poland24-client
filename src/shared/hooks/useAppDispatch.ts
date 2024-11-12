import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/features/redux/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
