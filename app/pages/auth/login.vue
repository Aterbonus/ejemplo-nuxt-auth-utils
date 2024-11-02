<script lang="ts" setup>

definePageMeta({
	auth: 'invitado'
})

const { fetch } = useUserSession()

const formulario = ref({
	email: '',
	contrasena: ''
})

async function enviarFormualario() {
	const informacion = await $fetch('/api/auth/login', {
		body: formulario.value,
		method: 'POST'
	})

	await fetch()
	await navigateTo('/admin')
}

</script>

<template>
	<div class="container pt-64px">
		<form class="border border-gray p-16px rounded grid max-w-350px mx-auto" @submit.prevent="enviarFormualario">
			<h1 class="text-8 font-bold mb-8px leading-none">Login</h1>
			<label class="mb-8px flex justify-between">
				E-Mail: <input v-model="formulario.email" class="border border-gray rounded" type="email" required>
			</label>
			<label class="mb-8px flex justify-between">
				Contraseña: <input v-model="formulario.contrasena" class="border border-gray rounded" type="password" required>
			</label>
			<button class="py-8px px-12px bg-purple-600 text-white hover:bg-purple-500">Ingresar</button>
		</form>
	</div>
</template>