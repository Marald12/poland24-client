import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@/features/redux/auth/auth.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { baseApi } from '@/features/redux/api/base.api'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist/es/constants'
import { rtkQueryErrorLogger } from '@/features/redux/middlewares/error.middleware'
import { orderApi } from '@/features/redux/api/order/order.api'
import { shopApi } from '@/features/redux/api/shop/shop.api'

const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	auth: authSlice.reducer
})

const persistConfig = {
	key: 'auth',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			})
				.concat(baseApi.middleware)
				.concat(orderApi.middleware)
				.concat(shopApi.middleware)
				.concat(rtkQueryErrorLogger)
	})
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
