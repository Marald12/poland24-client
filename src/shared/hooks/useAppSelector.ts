import { useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'

export const useAppSelector = useSelector.withTypes<RootState>()
