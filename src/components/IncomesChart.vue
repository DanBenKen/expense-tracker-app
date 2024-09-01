<template>
    <div class="container">
        <h2>Incomes Chart</h2>
        <div>
            <Doughnut class="doughnut" :data="chartData" :options="chartOptions" />
        </div>
        <div>
            <BackButton/>
        </div>
    </div>
</template>

<script setup>
import BackButton from './BackButton.vue';
import { computed } from 'vue';
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import { useExpenseStore } from '@/stores/expenseStore';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const store = useExpenseStore();

const chartData = computed(() => {
    const categories = store.categories;
    const categoryIncomes = categories.map(category => {
        const totalForCategory = store.incomes
            .filter(income => income.category === category)
            .reduce((total, income) => total + (income.amount || 0), 0);

        return totalForCategory;
    })

    return {
        labels: categories,
        datasets: [
            {
                label: 'Incomes by category',
                data: categoryIncomes,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#ff2e2e'],
            }
        ]
    }
});

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
          font: {
            size: 18,
      }
    },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Amount: ${tooltipItem.raw}`,
      },
    },
  },
}));
</script>

<style scoped>
h2 {
    font-size: 3rem;
}

.doughnut {
    margin: 3rem;
    padding: 2rem;
}

.container {
    flex-direction: column;
}
</style>