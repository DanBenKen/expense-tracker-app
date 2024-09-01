<template>
    <div class="container">
        <button class="button" title="Sort by Balance" @click="setSortBy('balance')">
            <font-awesome-icon icon="square-poll-horizontal" />
        </button>

        <button class="button" title="Sort by Income" @click="setSortBy('income')">
            <font-awesome-icon icon="arrow-up-wide-short" />
        </button>

        <button class="button" title="Sort by Expense" @click="setSortBy('expense')">
            <font-awesome-icon icon="arrow-down-wide-short" />
        </button>
    </div>
</template>

<script setup>
import { useExpenseStore } from '@/stores/expenseStore';

const store = useExpenseStore();

const setSortBy = (criterium) => {
    store.$patch({ sortBy: criterium });
}
</script>

<style scoped>
.button {
    width: 5rem;
}

.container {
    justify-content: space-around;
    margin-top: 2.5rem;
}
</style>