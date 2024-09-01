<template>
    <div class="add-income">
        <h2><font-awesome-icon icon="arrow-up-long" /> Add Incomes</h2>
        <form @submit.prevent="saveIncome">
            <div>
                <span :class="{ hidden: true, error: isError, success: isSuccess }">{{ message }}</span>
                <input type="number" v-model="amount" min="0" placeholder="Amount">
            </div>

            <div>
                <select v-model="selectCategory" id="category">
                    <option disabled value="">Select a category</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>

            <div class="new-category-group">
                <label for="new-category">Or Add New Category</label>
                <input type="text" v-model="newCategory" id="new-category" autocomplete="off"
                    placeholder="New Category">
            </div>

            <div class="form-button-group">
                <button class="button" type="submit">Add</button>
            </div>
        </form>
        <BackButton/>
    </div>
</template>

<script setup>
import BackButton from './BackButton.vue';
import { useExpenseStore } from '@/stores/expenseStore';
import { computed, ref } from 'vue';

const store = useExpenseStore();

const categories = computed(() => store.categories);
let selectCategory = ref('');
const newCategory = ref('');
const amount = ref('');
const message = ref('');
const isError = ref('');
const isSuccess = ref('');

function saveIncome() {
    message.value = '';
    isError.value = false;
    isSuccess.value = false;

    if (!amount.value) {
        message.value = 'Please enter the amount';
        isError.value = true;
        return;
    }

    if (!selectCategory.value && !newCategory.value.trim()) {
        message.value = "Please select a category";
        isError.value = true;
        return;
    }

    const categoryToUse = selectCategory.value || newCategory.value.trim();

    store.incomes.push({
        category: categoryToUse,
        amount: parseFloat(amount.value),
        date: new Date(),
    });

    addNewCategory();

    selectCategory.value = '';
    newCategory.value = '';
    amount.value = '';

    message.value = 'Successfully added!';
    isSuccess.value = true;
    setTimeout(() => {
        message.value = '';
        isSuccess.value = false;
    }, 1500);
}


function addNewCategory() {
    const category = newCategory.value.trim();
    if (category && !store.categories.includes(category)) {
        store.addCategory(newCategory.value);
        selectCategory.value = newCategory.value;
    }
}
</script>

<style scoped>
h2 {
    font-size: 3rem;
}

input,
select {
    border-radius: 1rem;
    border: 0;
    padding: 2rem;
    margin: 2rem 0;
}

input:hover,
input:focus,
input:active,
input:checked,
select:hover,
select:focus,
select:active,
select:checked {
    outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.add-income {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.new-category-group {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    font-size: 1.2rem;
}

.form-button-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.hidden {
    display: block;
    min-height: 2.5rem;
}

.error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
    min-height: 20px;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.success {
    color: green;
    font-size: 12px;
    margin-top: 5px;
    display: block;
    min-height: 20px;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.button {
    margin-top: 2.5rem;
}

</style>