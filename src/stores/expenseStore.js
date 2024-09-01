import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expenseStore", () => {
    const incomes = ref([
        { amount: 0, category: "Food"},
        { amount: 0, category: "Shopping"},
        { amount: 2000, category: "Passive Inc."},
        { amount: 5000, category: "Salary" },
        { amount: 0, category: "Travel" },
    ]);
    const expenses = ref([
        { amount: 1232, category: "Food" },
        { amount: 750, category: "Shopping" },
        { amount: 0, category: "Salary" },
        { amount: 948, category: "Travel" },
        { amount: 2000, category: "Housing" },
    ]);
    const categories = ref([`Salary`, `Food`, `Shopping`, `Entertainment`, `Passive Inc.`, `Travel`, `Housing`]);
    const sortBy = ref('');

    const totalIncome = calculateTotalIncome(incomes);

    const totalExpenses = calculateTotalExpenses(expenses);

    const totalBalance = calculateTotalBalance(totalIncome, totalExpenses);

    const categoryBalance = calculateCategoryBalance(categories, incomes, expenses);

    const sortedCategoriesByExpense = sortCategoriesByExpenses(categories, expenses);

    const sortedCategoriesByIncome = sortCategoriesByIncome(categories, incomes);
    
    const sortedCategoriesAlphabetically = sortCategoriesAlphabetically(categories);

    const sortedCategories = sortCategories(sortBy, sortedCategoriesByExpense, sortedCategoriesAlphabetically, sortedCategoriesByIncome, categories);

    return {
        incomes,
        expenses,
        categories,
        totalIncome,
        totalExpenses,
        sortedCategoriesByExpense,
        sortedCategoriesAlphabetically,
        sortBy,
        totalBalance,
        sortedCategories,
        addIncome,
        addExpense,
        addCategory,
        formatCurrency,
        displayValue,
        categoryBalance,
    };

    function addIncome(amount, category) {
        incomes.value.push({ amount, category });
    }

    function addExpense(amount, category) {
        expenses.value.push({ amount, category });
    }

    function addCategory(category) {
        if (!categories.value.includes(category)) {
            categories.value.push(category);
        }
    }

    function displayValue(category) {
        const balance = categoryBalance.value[category];

        if (!balance) return "0.00";

        return formatCurrency(
            sortBy.value === 'income' ? balance.income :
            sortBy.value === 'expense' ? balance.expense :
            balance.balance
        );
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    }
    
    function sortCategories(sortBy, sortedCategoriesByExpense, sortedCategoriesAlphabetically, sortedCategoriesByIncome, categories) {
        return computed(() => {
            if (sortBy.value === 'expense') {
                return sortedCategoriesByExpense.value;
            } else if (sortBy.value === 'balance') {
                return sortedCategoriesAlphabetically.value;
            } else if (sortBy.value === 'income') {
                return sortedCategoriesByIncome.value;
            }
    
            return categories.value;
        });
    }
    
    function sortCategoriesAlphabetically(categories) {
        return computed(() => {
            return [...categories.value].sort((a, b) => a.localeCompare(b));
        });
    }
    
    function sortCategoriesByIncome(categories, incomes) {
        return computed(() => {
            return [...categories.value].sort((a, b) => {
                const incomeA = incomes.value
                    .filter((income) => income.category === a)
                    .reduce((total, income) => total + (income.amount || 0), 0);
    
                const incomeB = incomes.value
                    .filter((income) => income.category === b)
                    .reduce((total, income) => total + (income.amount || 0), 0);
    
                return incomeB - incomeA;
            });
        });
    }
    
    function sortCategoriesByExpenses(categories, expenses) {
        return computed(() => {
            return [...categories.value].sort((a, b) => {
                const expenseA = expenses.value
                    .filter((expense) => expense.category === a)
                    .reduce((total, expense) => total + expense.amount, 0);
    
                const expenseB = expenses.value
                    .filter((expense) => expense.category === b)
                    .reduce((total, expense) => total + expense.amount, 0);
                return expenseB - expenseA;
            });
        });
    }
    
    function calculateCategoryBalance(categories, incomes, expenses) {
        return computed(() => {
            const balances = {};
    
            categories.value.forEach((category) => {
                const categoryIncomes = incomes.value.filter(
                    (transaction) => transaction.category === category
                );
    
                const categoryExpenses = expenses.value.filter(
                    (transaction) => transaction.category === category
                );
    
                const totalIncomes = categoryIncomes.reduce(
                    (total, income) => total + (income.amount || 0), 0
                );
    
                const totalExpenses = categoryExpenses.reduce(
                    (total, expense) => total + (expense.amount || 0), 0
                );
    
                balances[category] = {
                    income: totalIncomes,
                    expense: totalExpenses,
                    balance: totalIncomes - totalExpenses,
                };
            });
    
            return balances;
        });
    }
    
    function calculateTotalBalance(totalIncome, totalExpenses) {
        return computed(() => {
            return totalIncome.value - totalExpenses.value;
        });
    }
    
    function calculateTotalExpenses(expenses) {
        return computed(() => {
            return expenses.value.reduce(
                (total, expense) => total + (expense.amount || 0), 0
            );
        });
    }
    
    function calculateTotalIncome(incomes) {
        return computed(() => {
            return incomes.value.reduce(
                (total, income) => total + (income.amount || 0), 0
            );
        });
    }
});
