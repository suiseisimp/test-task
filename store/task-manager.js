
export const state = () => ({
  tasks: [],
  users: [],
  filteredTasks: [],
  task: null,
  searchText: ''
})

export const mutations = {
  INIT_TASKS (state, tasks) {
    state.tasks = tasks
    state.filteredTasks = [...tasks]
  },

  INIT_TASK (state, task) {
    state.task = task
  },

  INIT_USERS (state, users) {
    state.users = users
  },

  SELECT_USER (state, payload) {
    payload.user.isSelected = payload.value
  },

  SET_FILTERED_TASKS (state, tasks) {
    state.filteredTasks = tasks
  },

  SET_SEARCH_TEXT (state, text) {
    state.searchText = text
  }

}

export const actions = {

  async initAll ({ commit }) {
    try {
      const usersRes = await this.$axios.get('/users')
      const users = usersRes.data.map((user) => {
        user.isSelected = true
        return user
      })

      commit('INIT_USERS', users)

      const tasksRes = await this.$axios.get('/todos')

      const tasks = tasksRes.data.map((task) => {
        task.user = users.find(u => u.id === task.userId)
        return task
      })

      commit('INIT_TASKS', tasks)
    } catch (error) {}
  },

  async initTask ({ commit, state }, payload) {
    try {
      const { data } = await this.$axios.get('/todos?id=' + payload.id)
      const task = data[0]

      task.user = state.users.find(u => u.id === task.userId)

      commit('INIT_TASK', task)
    } catch (e) {}
  },

  selectUser ({ commit, dispatch }, payload) {
    commit('SELECT_USER', payload)
    dispatch('filterTasks')
  },

  setSearchText ({ commit, dispatch }, text) {
    commit('SET_SEARCH_TEXT', text)
    dispatch('filterTasks')
  },

  filterTasks ({ commit, state }) {
    const selectedUsers = state.users.filter(u => u.isSelected)

    const filteredTasks = state.tasks.filter(
      task => !!selectedUsers.find(u => u.id === task.userId) && (
        state.searchText === '' ||
          task.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
          task.user.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
          task.user.username.toLowerCase().includes(state.searchText.toLowerCase())
      )
    )

    commit('SET_FILTERED_TASKS', filteredTasks)
  }

}

export const getters = {

  filteredTasks (state) {
    return state.filteredTasks
  },

  tasks (state) {
    return state.tasks
  },

  task (state) {
    return state.task
  },

  users (state) {
    return state.users
  },

  searchText (state) {
    return state.searchText
  }
}
