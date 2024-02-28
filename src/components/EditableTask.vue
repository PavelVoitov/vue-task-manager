<template>
  <input
    v-model="editedTaskMessage"
    class="flex-grow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:bg-white"
  />
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3"
    @click="saveEditingTask"
  >
    Save
  </button>
</template>

<script>
export default {
  name: 'VtmEditTask',
  props: {
    taskMessage: {
      type: String,
      required: true,
    },
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editedTaskMessage: this.taskMessage,
    }
  },
  emits: {
    'close-edit-mode': (value) => typeof value === 'string',
  },
  methods: {
    saveEditingTask() {
      this.$store.commit('editTask', {
        id: this.taskId,
        editedMessage: this.editedTaskMessage,
      })
      this.$emit('close-edit-mode', this.taskId, false)
    },
  },
}
</script>
