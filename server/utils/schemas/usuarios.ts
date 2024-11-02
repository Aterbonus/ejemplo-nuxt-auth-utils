import * as v from 'valibot'

const esquemaEmail = v.pipe(v.string(), v.trim(), v.email(), v.maxLength(200))
const esquemaContrasena = v.pipe(v.string(), v.maxLength(200))

const esquemaFormularioCreacionUsuario = v.object({
	nombres: v.pipe(v.string(), v.trim(), v.maxLength(100)),
	apellidos: v.pipe(v.string(), v.trim(), v.maxLength(100)),
	email: esquemaEmail,
	contrasena: esquemaContrasena
})

export const validarFormularioCreacionUsuario = v.parser(esquemaFormularioCreacionUsuario)
export type FormularioCreacionUsuario = v.InferOutput<typeof esquemaFormularioCreacionUsuario>

const esquemaFormularioLogin = v.object({
	email: esquemaEmail,
	contrasena: esquemaContrasena
})

export const validarFormularioLogin = v.parser(esquemaFormularioLogin)
export type FormularioLogin = v.InferOutput<typeof esquemaFormularioLogin>