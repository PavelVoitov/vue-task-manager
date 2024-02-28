import {createStore} from 'vuex'

export default createStore({
  state: {
    tasks: null,
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    addTask(state, task) {
      state.tasks = [...state.tasks, task]
    },
    editTask(state, {id, editedMessage}) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? {...task, message: editedMessage} : task,
      )
    },
    completeTask(state, taskId) {
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      )
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((t) => t.id !== taskId)
    },
  },
})
