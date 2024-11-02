<template>
	<div class="pt-64px container">
		<h1 class="font-bold text-8 mb-8px">Home</h1>
		<div class="mb-8px">
			<NuxtLink to="/auth/registro" class="text-purple mr-12px">Registro</NuxtLink>
			<NuxtLink to="/auth/login" class="text-blue">Login</NuxtLink>
		</div>
		<SoloUsuarios></SoloUsuarios>
	</div>
</template>