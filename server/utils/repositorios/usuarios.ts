export async function registrarUsuario(usuario: FormularioCreacionUsuario) {
	const contrasenaHasheada = await hashPassword(usuario.contrasena)

	return prismaClient.usuario.create({
		omit: {
			contrasena: true
		},
		data: {
			...usuario,
			contrasena: contrasenaHasheada
		}
	})
}

export function obtenerUsuarioPorEmail(email: string, conContrasena: boolean = false) {
	return prismaClient.usuario.findFirst({
		omit: {
			contrasena: !conContrasena
		},
		where: {
			email
		}
	})
}