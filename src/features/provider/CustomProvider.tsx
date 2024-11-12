'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, store } from '@/features/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'
import ReduxToastr from 'react-redux-toastr'

export default function StoreProvider({
	children
}: {
	children: React.ReactNode
}) {
	const storeRef = useRef<AppStore>()
	const persistorRef = useRef<Persistor>({} as Persistor)

	if (!storeRef.current) {
		storeRef.current = store()
		persistorRef.current = persistStore(storeRef.current)
	}

	return (
		<Provider store={storeRef.current}>
			<PersistGate loading={null} persistor={persistorRef.current}>
				{children}
			</PersistGate>
			<ReduxToastr position='bottom-right' />
		</Provider>
	)
}
