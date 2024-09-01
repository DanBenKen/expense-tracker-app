<template>
    <div class="container">
        <ExpensesChartButton/>
        <IncomesChart/>
    </div>
</template>

<script setup>
import IncomesChart from '@/components/IncomesChart.vue';
import ExpensesChartButton from '@/components/ExpensesChartButton.vue';
</script>

<style scoped>
.container {
    flex-direction: column;
}
</style>