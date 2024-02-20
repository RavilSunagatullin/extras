<template>
	<div v-if='isOpen' class='popup-overlay'>
		<div class='popup-container'>
			<div class='popup-header'>
				<span class='popup-title'>{{ title }}</span>
				<button @click='closePopup()' class='close-btn'>X</button>
			</div>
			<div class='popup-content'>
				<form @submit.prevent='submitForm'>
					<div>
						<label for='name'>Название:</label>
						<input type='text' id='name' v-model='name' required>
					</div>
					<div>
						<label for='message'>Содержание:</label>
						<textarea id='message' v-model='message' required></textarea>
					</div>
					<button type='submit' >Submit</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
const name = ref('')
const message = ref('')
const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: 'Popup Title'
	}
})
const emit = defineEmits(['close-popup'])

function closePopup() {
	let data = {
		name: name.value,
		message: message.value,
	}
	emit('close-popup', data)
}

const submitForm = () => {
	closePopup()
}

</script>

<style scoped>
.popup-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.popup-container {
	background: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.popup-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.popup-title {
	font-size: 18px;
	font-weight: bold;
}

.close-btn {
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
	color: #333;
}
form {
	display: flex;
	flex-direction: column;
}
form div{
	display: flex;
	flex-direction: column;
	gap: 15px;
	justify-content: center;
}
label {
	margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
}
textarea{
	max-width: 400px;
	max-height: 200px;
}

button {
	padding: 10px 20px;
	background-color: #2196f3;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
}

button:hover {
	background-color: #2196f3;
	color: #fff;
}
</style>
