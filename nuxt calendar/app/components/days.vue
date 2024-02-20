<template>
	<div class='days'>
		<div v-for='day in daysInMonth' :key='day' class='day' :class='{ today: isToday(day), selected: isSelected(day) }'
		     @click='handleDateClick(day)'>
			{{ day}}
			<div v-if='findId(day)!==-1'>{{addInfo[findId(day)].data.name}}, {{addInfo[findId(day)].data.message}}</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(
	{
		daysInMonth:
			{
				type: Array,
				required:
					true
			}
		,
		isToday: {
			type: Function,
			required:
				true
		}
		,
		isSelected: {
			type: Function,
			required:
				true
		}
		,
		selectDate: {
			type: Function,
			required:
				true
		},
		addInfo: {
			type:Array
		}
	})

const emit = defineEmits(['open-popup'])
function handleDateClick(day) {
	props.selectDate(day)
	emit('open-popup')
}
function findId(id) {
	id = Number(id);
	return props.addInfo.findIndex((elem)=> elem.id === id)
}
function getName(id){
	return props.addInfo[id].name
}
</script>

<style scoped>
.days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 15px;
	height: 100%;
}

.day {
	cursor: pointer;
	padding: 10px;
	border-radius: 5px;
	text-align: center;
	border: 1px solid #e0e0e0;
	font-size: 32px;
}

.today {
	background-color: #e0e0e0;
}

.selected {
	background-color: #2196f3;
	border: 1px solid #2196f3;
	color: white;
}
</style>
