<template>
  <div class="home-view">
    <h1>Expense Tracker</h1>
    <TotalBalance />
    <SortButtons/>
    <Transactions />
    <HomeViewButtons />
  </div>
</template>

<script setup>
import SortButtons from '@/components/SortButtons.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Transactions from '@/components/Transactions.vue';
import HomeViewButtons from '@/components/HomeViewButtons.vue';

</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

.home-view {
  font-size: 1.9rem;
}
</style>