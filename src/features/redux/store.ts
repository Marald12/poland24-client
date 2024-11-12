import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@/features/redux/auth/auth.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { baseApi } from '@/features/redux/api/base.api'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist/es/constants'

const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	auth: authSlice.reducer,
	toastr: toastrReducer
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
			}).concat(baseApi.middleware)
	})
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
