<template>
  <div class="my-3 flex w-full flex-col">
    <div class="flex w-full">
      <input
        class="flex-grow appearance-none border rounded py-2 px-3 mr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:bg-white"
        placeholder="Input your task"
        v-model="message"
        @input="error = ''"
      />
      <button
        class="relative bg-gray-800 hover:bg-gray-900 text-white font-bold border-blue-100 border-spacing-0.5 px-3 py-2 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-gray-800 transition-colors duration-300 ease-in-out"
        @click="addTask"
      >
        Add Task
      </button>
    </div>
    <div class="h-5">
      <div v-show="error" class="mt-1 text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
  name: 'VtmAddTaskForm',
  data() {
    return {
      message: '',
      error: '',
    }
  },
  methods: {
    addTask() {
      if (!this.message.trim()) {
        this.error = "Can't add the empty task"
        return
      }
      const taskId = uuidv4()
      this.$store.commit('addTask', {
        id: taskId,
        message: this.message.trim(),
        completed: false,
      })
      this.message = ''
    },
  },
}
</script>
