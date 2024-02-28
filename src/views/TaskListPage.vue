<template>
  <div class="mx-2 md:mx-5 lg:w-1/2 xl:w-1/3">
    <vtm-add-task-form />
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
        class="flex flex-col md:flex-row mb-2 w-full rounded-md"
      >
        <div class="flex items-center mb-2 md:mb-0 md:mr-0 w-full">
          <input
            type="checkbox"
            class="h-auto w-6 rounded mr-2 cursor-pointer"
            @input="handleTaskCompletion(task.id)"
            v-model="task.completed"
          />
          <div
            v-if="!editMode || task.id !== editingTaskId"
            class="flex-grow md:w-full items-start"
            :class="{'completed-task': task.completed}"
          >
            <p
              class="bg-header py-2 px-3 border rounded focus:shadow-outline-blue text-white break-all"
            >
              {{ task.message }}
            </p>
          </div>
          <button
            v-if="!editMode || task.id !== editingTaskId"
            class="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            @click="handleEditMode(task.id, true)"
          >
            Edit
          </button>
          <vtm-edit-task
            v-if="editMode && task.id === editingTaskId"
            :task-message="task.message"
            :task-id="task.id"
            @close-edit-mode="handleEditMode"
          />
          <button
            class="bg-red-500 hover:bg-red-700 h-10 text-white font-bold py-2 px-4 rounded ml-2"
            @click="deleteTask(task.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import VtmAddTaskForm from '@/components/AddTaskForm.vue'
import {mapState} from 'vuex'
import VtmEditTask from '@/components/EditableTask.vue'

export default {
  name: 'TaskListPage',
  components: {VtmEditTask, VtmAddTaskForm},
  data() {
    return {
      editMode: false,
      editingTaskId: null,
    }
  },
  methods: {
    handleEditMode(taskId, action) {
      this.editMode = action
      this.editingTaskId = taskId
    },
    deleteTask(taskId) {
      this.$store.commit('deleteTask', taskId)
    },
    handleTaskCompletion(taskId) {
      this.$store.commit('completeTask', taskId)
    },
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
    }),
  },
  watch: {
    tasks() {
      sessionStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
  },
  mounted() {
    const savedTasks = sessionStorage.getItem('tasks')
    const tasks = savedTasks ? JSON.parse(savedTasks) : []
    this.$store.commit('setTasks', tasks)
  },
}
</script>

<style scoped>
.completed-task p {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
