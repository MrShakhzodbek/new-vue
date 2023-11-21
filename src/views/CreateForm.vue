<template>
    <div class="container about">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Cost</label>
                <input autocomplete="off" type="number" class="form-control" id="name" placeholder="Only Name"
                    v-model="cost">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name"
                    v-model="address">
            </div>
            <button class="btn btn-secondary px-5 py-3" @click="post_category">CREATE</button>

        </form>
    </div>
</template>
  
<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import type { Catalog } from '@/models/types';
import { ref } from 'vue';

const store = useCounterStore();
const catalog = ref<Catalog[]>([]);
const { post_category, name, cost, address } = store;
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
}
</style>