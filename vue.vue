<template>
    <button :class="{ active: active, theme: theme }" @click="handleClick" :disabled="disabled">
        {{ label }}
    </button>
</template>

<script setup>
    import { ref } from 'vue'; 

    const theme = 'light'; 
    const label = 'Click me';
    const active = ref(true); 
    const disabled = ref(false);

    const handleClick = () => {
        if (!disabled.value) {
            console.log('Button clicked!');
        }
    };
</script>
