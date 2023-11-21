<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="container">
    
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
        <RouterLink to="/update">Update</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
