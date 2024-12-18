import { Middleware } from 'redux'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const rtkQueryErrorLogger: Middleware =
	(/*_api: MiddlewareAPI*/) => next => action => {
		if (isRejectedWithValue(action)) {
			const error = action.payload as string | string[]

			if (Array.isArray(error)) error.map(item => toast.error(item))
			else toast.error(error)
		}

		return next(action)
	}
