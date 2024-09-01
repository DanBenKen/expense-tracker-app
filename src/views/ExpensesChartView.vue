<template>
    <div class="container">
        <IncomesChartButton/>
        <ExpensesChart/>
    </div>
</template>

<script setup>
import ExpensesChart from '@/components/ExpensesChart.vue';
import IncomesChartButton from '@/components/IncomesChartButton.vue';
</script>

<style scoped>
.container {
    flex-direction: column;
}
</style>