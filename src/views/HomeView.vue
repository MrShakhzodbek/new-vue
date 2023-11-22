
<template>
  <div class="container">
    <table class="container table rounded">
      <thead class="">
        <tr>
          <th class="col-1">Id</th>
          <th class="col-4">Name</th>
          <th class="col-4">Cost</th>
          <th class="col-4">Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in store.counter" :key="index" class="item">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name_uz }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.address }}</td>
          <td><button class="btn btn-primary" @click="passUpdatePage(item?.id)">Edit</button></td>
          <td><button class="btn btn-danger" @click="delete_category(item?.id)">Delete</button></td>
        </tr>
      </tbody>
      
    </table>


  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { onMounted } from 'vue'

const store = useCounterStore()

onMounted(() => {
  store.get_category()
})
const { delete_category, passUpdatePage } = store

</script>

<style></style>