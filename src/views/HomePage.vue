<template>
  <div
    class="home flex flex-col items-center justify-center h-screen text-center"
  >
    <h1 class="text-4xl font-bold mb-2 text-white">
      Start your productive day!
    </h1>
    <h2 class="text-lg mb-4">Create your first task!</h2>
    <router-link class="button-animation" :to="{name: 'taskList'}">
      Open Tasks List
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.button-animation {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2d3748;
  color: #fff;
  border: 1px solid #4299e1;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease-in-out;
}

.button-animation:hover {
  background-color: #4a5568;
}
</style>
