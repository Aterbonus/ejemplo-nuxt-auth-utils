export default defineEventHandler(async event => {
	const { email, contrasena } = await readValidatedBody(event, validarFormularioLogin)
	const usuario = await obtenerUsuarioPorEmail(email, true)

	if (!usuario) {
		throw createError({
			status: 401,
			message: 'Usuario y/o contraseña incorrecta'
		})
	}

	if (!(await verifyPassword(usuario.contrasena, contrasena))) {
		throw createError({
			status: 401,
			message: 'Usuario y/o contraseña incorrecta'
		})
	}

	const usuarioSeguro = {
		id: usuario.id,
		nombres: usuario.nombres,
		apellidos: usuario.apellidos,
		email: usuario.email
	}

	await setUserSession(event, {
		user: usuarioSeguro
	})

	return usuarioSeguro
})