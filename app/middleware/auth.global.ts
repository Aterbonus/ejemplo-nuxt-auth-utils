export default defineNuxtRouteMiddleware(to => {
	const { loggedIn } = useUserSession()
	const auth = to.meta.auth

	if (auth) {
		if (!loggedIn.value) {
			return navigateTo('/auth/login')
		}

		if (auth === 'invitado') {
			return navigateTo('/admin')
		}
	}
})