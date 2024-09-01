<template>
    <div>
        <button class="button" @click="goToIncomesChart">Incomes Chart</button>
    </div>
</template>

<script setup>
import router from '@/router/routes';

function goToIncomesChart() {
    router.push('/incomesChart');
}
</script>

<style scoped>
.button {
    margin: 1.5rem 0;
}
</style>