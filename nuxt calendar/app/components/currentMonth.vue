<template>
	<h2>{{ currentMonth }}</h2>
</template>

<script>
export default {
	props: {
		currentMonth: {
			type: String,
			required: true
		}
	}
};
</script>
