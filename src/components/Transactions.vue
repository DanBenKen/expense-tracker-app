<template>
  <div class="category-balances">
    <div v-for="category in sortedCategories" :key="category" class="category-item">
      <h3>{{ category }}</h3>
      <p>{{ store.displayValue(category) }}</p>
    </div>
  </div>
</template>

<script setup>
import { useExpenseStore } from '@/stores/expenseStore';
import { computed } from 'vue';

const store = useExpenseStore();

const sortedCategories = computed(() => store.sortedCategories);
</script>

<style scoped>
.category-balances {
  margin-top: 1rem;
  max-height: 30rem;
  overflow-y: auto;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
}
</style>
