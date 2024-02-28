<template>
  <header class="bg-header py-4 flex justify-between items-center">
    <router-link :to="{name: 'home'}" class="flex items-center ml-5">
      <img src="../assets/logo.png" alt="Логотип" class="mr-2 h-5" />
      <span class="text-white text-lg font-semibold">Task Manager</span>
    </router-link>
    <router-link
      :to="{name: 'about'}"
      class="text-link hover:text-gray-400 mr-5 h-5"
    >
      About
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'VtmHeader',
}
</script>
