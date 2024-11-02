export default defineNuxtRouteMiddleware(to => {
	const { loggedIn } = useUserSession()
	const auth = to.meta.auth

	if (auth) {
		if (auth === 'invitado' && loggedIn.value) {
			return navigateTo('/admin')
		}

		if (auth !== 'invitado' && !loggedIn.value) {
			return navigateTo('/auth/login')
		}
	}
})