
<template>
    <div class="container">
    <table class="table rounded">
  <thead class="">
    <tr>
      <th scope="col-1">Id</th>
      <th scope="col-3">Name</th>
      <th scope="col-3">Cost</th>
      <th scope="col-4">Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in store.counter" :key="index" class="item">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{item.name_uz}}</td>
      <td>{{item.cost}}</td>
      <td>{{item.address}}</td>
      <td><button class="btn btn-primary" @click="pass_category(item?.id)">Edit</button></td>
      <td><button class="btn btn-danger" @click="delete_category(item?.id)">Delete</button></td>
    </tr>
  </tbody>
  {{store.counter  }}
</table>
    
    
  </div>
</template>

<script setup lang="ts">
import {useCounterStore} from '../stores/counter'
import type { Catalog } from '@/models/types';
import {ref} from 'vue'

const store = useCounterStore()
const catalog = ref<Catalog[]>([])

const {delete_category,pass_category } = store

</script>

<style>
</style>