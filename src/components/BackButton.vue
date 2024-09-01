<template>
    <div>
        <button class="button" @click="goBack">Back</button>
    </div>
</template>

<script setup>
import router from '@/router/routes';

function goBack() {
    router.push('/');
}
</script>

<style scoped>
.button {
    margin: 1.5rem 0;
}
</style>