<template>
    <div>
        <button class="button" @click="goToExpensesChart">Expenses Chart</button>
    </div>
</template>

<script setup>
import router from '@/router/routes';

function goToExpensesChart() {
    router.push('/expensesChart');
}
</script>

<style scoped>
.button {
    margin: 1.5rem 0;
}
</style>