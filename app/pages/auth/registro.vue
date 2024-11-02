<script lang="ts" setup>

definePageMeta({
	auth: 'invitado'
})

const formulario = ref({
	nombres: '',
	apellidos: '',
	email: '',
	contrasena: ''
})

async function enviarFormualario() {
	await $fetch('/api/auth/registro', {
		body: formulario.value,
		method: 'POST'
	})

	await navigateTo('/')
}

</script>

<template>
	<div class="container pt-64px">
		<form class="border border-gray p-16px rounded grid max-w-350px mx-auto" @submit.prevent="enviarFormualario">
			<h1 class="text-8 font-bold mb-8px leading-none">Registro</h1>
			<label class="mb-8px flex justify-between">
				Nombres: <input v-model="formulario.nombres" class="border border-gray rounded" required>
			</label>
			<label class="mb-8px flex justify-between">
				Apellidos: <input v-model="formulario.apellidos" class="border border-gray rounded" required>
			</label>
			<label class="mb-8px flex justify-between">
				E-Mail: <input v-model="formulario.email" class="border border-gray rounded" type="email" required>
			</label>
			<label class="mb-8px flex justify-between">
				Contraseña: <input v-model="formulario.contrasena" class="border border-gray rounded" type="password" required>
			</label>
			<button class="py-8px px-12px bg-purple-600 text-white hover:bg-purple-500">Registrar</button>
		</form>
	</div>
</template>