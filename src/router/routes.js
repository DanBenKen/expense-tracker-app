import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddExpensesView from "@/views/AddExpensesView.vue";
import AddIncomeView from "@/views/AddIncomeView.vue";
import ExpensesChartView from "@/views/ExpensesChartView.vue";
import IncomesChartView from "@/views/IncomesChartView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/addExpenses",
            name: "addExpenses",
            component: AddExpensesView,
        },
        {
            path: "/addIncome",
            name: "addIncome",
            component: AddIncomeView,
        },
        {
            path: "/expensesChart",
            name: "expensesChart",
            component: ExpensesChartView,
        },
        {
            path: "/incomesChart",
            name: "incomesChart",
            component: IncomesChartView,
        },
    ],
});

export default router;
