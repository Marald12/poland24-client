import { useAppSelector } from '@/shared/hooks/useAppSelector'

export const useAuth = () => useAppSelector(state => state.auth)
