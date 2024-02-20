<template>
	<div class='calendar'>
		<Header :changeMonth='changeMonth' :currentMonth='currentMonth' />
		<Days :daysInMonth='daysInMonth' :isToday='isToday' :isSelected='isSelected' :selectDate='selectDate'
		      @open-popup='openPopup' :add-info='events' />
		<Popup title='test' :isOpen='isOpenPopup' @close-popup='closePopup' />
	</div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import Days from './components/days.vue'
import Header from './components/header.vue'
import Popup from './components/popup.vue'

const currentDate = ref(new Date())
const selectedDate = ref(null)
const isOpenPopup = ref(false)
const events = ref([]);

onMounted(() => {
	const savedEvents = localStorage.getItem('events');
	if (savedEvents) {
		events.value = JSON.parse(savedEvents);
	}
});

function openPopup() {
	isOpenPopup.value = true
}

function closePopup(data) {
	isOpenPopup.value = false
	events.value.push({
		data:{
			...data,
		},
		id: selectedDate.value
	})
	localStorage.setItem('events', JSON.stringify(events.value));
}

const currentMonth = computed(() => {
	return currentDate.value.toLocaleString('en-US', { month: 'long', year: 'numeric' })
})

const daysInMonth = computed(() => {
	const year = currentDate.value.getFullYear()
	const month = currentDate.value.getMonth()
	const daysInMonth = new Date(year, month + 1, 0).getDate()
	return Array.from({ length: daysInMonth }, (_, i) => i + 1)
})

function changeMonth(step) {
	const newDate = new Date(currentDate.value)
	newDate.setMonth(newDate.getMonth() + step)
	currentDate.value = newDate
}

function isToday(day) {
	const today = new Date()
	return currentDate.value.getFullYear() === today.getFullYear() &&
		currentDate.value.getMonth() === today.getMonth() &&
		day === today.getDate()
}

function isSelected(day) {
	return selectedDate.value === day
}

function selectDate(day) {
	selectedDate.value = day
}


</script>

<style scoped>
.calendar {
	font-family: Arial, sans-serif;
	padding: 20px;
	height: 100%;
}
</style>

