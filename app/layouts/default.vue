<script lang="ts" setup>

const { clear } = useUserSession()

async function logout() {
	if (confirm('¿Seguro quiere cerrar la sesión?')) {
		await clear()
		await navigateTo('/')
	}
}

</script>

<template>
	<div>
		<header class="p-12px border-b border-gray">
			<div class="container flex justify-between">
				<NuxtLink to="/">Ir al home</NuxtLink>
				<AuthState v-slot="{ loggedIn, user }">
					<div v-if="loggedIn" class="flex gap-3">
						<span class="text-purple">Hola {{ user?.nombres }}</span>
						<NuxtLink to="/admin">Ir al admin</NuxtLink>
						<button @click="logout" class="text-red">Cerrar sesión</button>
					</div>
				</AuthState>
			</div>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>