declare module '#auth-utils' {
	interface User {
		id: number
		nombres: string
		apellidos: string
		email: string
	}

	interface UserSession {
		// Add your own fields
	}

	interface SecureSessionData {
		// Add your own fields
	}
}

export {}