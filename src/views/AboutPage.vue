<template>
  <div class="container mx-auto mt-5 px-4">
    <h1 class="text-4xl font-bold mb-4">About Task Manager App</h1>
    <p class="text-lg mb-2">
      Welcome to the Task Manager App, a simple Vue.js application for managing
      your tasks.
    </p>
    <span class="mb-6 block">
      This application allows you to create, edit, and delete tasks easily.
    </span>

    <h2 class="text-2xl font-bold mb-2 mx-2">Features:</h2>
    <ul class="list-disc ml-4 md:ml-8">
      <li>Create new tasks</li>
      <li>Edit existing tasks</li>
      <li>Delete tasks</li>
      <li>Responsive design</li>
    </ul>

    <h2 class="text-2xl font-bold mt-8 mb-2">Technologies Used:</h2>
    <ul class="list-disc ml-4 md:ml-8">
      <li>Vue.js</li>
      <li>Vuex for state management</li>
      <li>Vue Router for navigation</li>
      <li>Tailwind CSS for styling</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
