<script lang="ts" setup>

const informacion = ref<null | object>(null)

async function buscarInformacionPrivada() {
	try {
		informacion.value = await $fetch('/api/admin')
	} catch (ex) {
		if (typeof ex === 'object') {
			informacion.value = ex
		}

		console.error(ex)
	}
}

</script>

<template>
	<div>
		<button class="text-white bg-purple-600 py-8px px-12px rounded hover:bg-purple-500" @click="buscarInformacionPrivada">Acción que solo resulta si estoy logueado</button>
		<pre v-if="informacion">{{ informacion }}</pre>
	</div>
</template>