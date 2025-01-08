export const getDifferingFields = <T extends Record<string, unknown>>(
	obj1: T,
	obj2: T
): Partial<T> => {
	const differingFields: Partial<T> = {}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) {
			differingFields[key] = obj1[key]
		}
	}

	for (const key in obj2) {
		if (!(key in obj1) || obj1[key] !== obj2[key]) {
			differingFields[key] = obj2[key]
		}
	}

	delete differingFields['password']
	delete differingFields['repeatPassword']
	delete differingFields['isPolicy']

	return differingFields
}
