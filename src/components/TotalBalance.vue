<template>
    <div class="container">
        <div class="total-balance">
            <h2>Total Balance</h2>
            <p><font-awesome-icon :icon="['fas', 'equals']"/> {{ store.formatCurrency(totalBalance) }}</p>
            <div class="container total-income-expenses-container">
                <p><font-awesome-icon icon="arrow-up-long"/> {{ store.formatCurrency(totalIncome) }}</p>
                <p><font-awesome-icon icon="arrow-down-long"/> {{ store.formatCurrency(totalExpenses) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useExpenseStore } from '@/stores/expenseStore';
import { computed } from 'vue';

const store = useExpenseStore();

const totalBalance = computed(() => store.totalBalance);

const totalIncome = computed(() => store.totalIncome);

const totalExpenses = computed(() => store.totalExpenses);
</script>

<style scoped>
.total-balance {
    width: 100%;
    text-align: center;
    border-radius: 2rem;
    padding: 0.6rem;
    font-size: 1.5rem;
    background-image: linear-gradient(-135deg, rgb(39, 28, 243), #ec2f12);
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset;
    color: #fff;
    font-size: 1.8rem;
}

h2 {
    margin-bottom: 0.5rem;
}

.total-income-expenses-container {
    margin: 2rem 0;
    justify-content: space-around;
}
</style>