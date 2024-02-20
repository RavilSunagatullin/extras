<template>
	<button @click="changeMonth(direction)" >{{ symbol }}</button>
</template>

<script setup>
const props = defineProps({
	direction: {
		type: Number,
	},
	symbol: {
		type: String,
	},
	changeMonth: {
		type: Function,
	}
})
</script>

<style scoped>
button{
	background-color: white;
	border: 1px solid #e0e0e0;
	padding: 5px;
	border-radius: 8px;
	transition: all 0.1s;
}
button:hover{
	background-color: #2196f3;
	border: 1px solid #2196f3;
	color: white;
}
</style>
