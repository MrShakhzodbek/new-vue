<template>
    <form class="container" action="">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name"
                v-model="catalog.name">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Cost</label>
            <input autocomplete="off" type="number" class="form-control" id="name" placeholder="Only Name"
                v-model="catalog.cost">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name"
                v-model="store.counter.">
        </div>
        <button class="btn btn-secondary px-5 py-3" @click="put_category">Edit</button>

    </form>
</template>
  
<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import type { Category } from '@/models/types';
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';

const id = Number(route.params.id);
const nameNew = ref(route.query.name as string);
const costNew = ref(Number(route.query.cost) || null);
const addressNew = ref(route.query.address as string);

const store = useCounterStore()

const { put_category } = store
</script>
  
<style scoped>
label {
    font-size: 25px;
}

input {
    padding: 10px 20px;
    font-size: 20px;
}

button {
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
}</style>