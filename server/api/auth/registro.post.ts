export default defineEventHandler(async event => {
	const formularioUsuario = await readValidatedBody(event, validarFormularioCreacionUsuario)
	const usuario = await obtenerUsuarioPorEmail(formularioUsuario.email)

	if (usuario) {
		throw createError({
			status: 409,
			message: "Ya existe un usuario con el email entregado"
		})
	}

	return registrarUsuario(formularioUsuario)
})