<template>
	<div class='header'>
		<Button :direction='-1' symbol='&lt;' :changeMonth='changeMonth' />
		<Month :currentMonth='currentMonth'/>
		<Button :direction='1' symbol='&gt;' :changeMonth='changeMonth' />
	</div>
</template>

<script setup>
import Button from '@/components/button.vue'
import Month from '@/components/currentMonth.vue'

const props = defineProps({
	currentMonth: {
		type: String,
		required: true
	},
	changeMonth: {
		type: Function,
		required: true
	}
})
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
}
</style>
