<template>
    <div class="button-group">
        <button class="button" @click="goToAddIncomeView">Add Income</button>
        <button class="button" @click="goToAddExpenseView">Add Expenses</button>
        <button class="button" @click="goToChartView">Check Chart</button>
    </div>
</template>

<script setup>
import router from '@/router/routes';

function goToAddExpenseView() {
    router.push('/addExpenses')
}

function goToAddIncomeView() {
    router.push('/addIncome')
}

function goToChartView() {
    router.push('/expensesChart')
}
</script>

<style scoped>
.home-view {
    font-size: 1.9rem;
}

.button-group {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.button {
    margin: 1rem 0;
}
</style>