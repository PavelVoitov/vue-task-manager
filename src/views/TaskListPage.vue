<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    editTask(index) {
      // Реализуйте редактирование задачи
    },
    deleteTask(index) {
      // Реализуйте удаление задачи
    },
  },
  mounted() {
    // Получите сохраненные задачи из vuex store
    this.tasks = this.$store.state.tasks;
  },
};
</script>

