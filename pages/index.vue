<template>
  <div class="flex flex-col justify-between h-screen">
    <div class="flex h-14 content-center px-4 bg-purple-800">
      <span class="my-auto text-2xl uppercase text-white">Some task manager</span>
    </div>
    <div class="flex flex-grow">
      <div class="flex flex-col justify-between w-1/4 bg-gray-500">
        <div class="bg-purple-500 my-auto p-2 uppercase text-white">
          Users
        </div>
        <user-list :users="users" />
      </div>
      <div class="flex flex-col justify-between w-3/4 bg-red-400">
        <div class="flex flex-row justify-between bg-purple-400 my-auto p-2 uppercase text-white">
          <div>Tasks</div>
          <div class="w-1/5">
            <input :value="searchText" placeholder="Search (title/name/username)" class="shadow-inner w-full text-black" type="text" @input="setSearchText($event)">
          </div>
        </div>
        <task-list :filtered-tasks="filteredTasks" />
      </div>
    </div>
    <div class="flex h-10 bg-purple-800 text-white text-center">
      <div class="m-auto">
        &copy; 2021 Company name
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import UserList from '~/components/UserList.vue'
import TaskList from '~/components/TaskList.vue'

export default {

  components: { TaskList, UserList },

  async fetch ({ store }) {
    await store.dispatch('task-manager/initAll')
  },

  computed: {
    ...mapGetters({
      users: 'task-manager/users',
      filteredTasks: 'task-manager/filteredTasks',
      searchText: 'task-manager/searchText'
    })
  },

  methods: {
    setSearchText (event) {
      this.$store.dispatch('task-manager/setSearchText', event.target.value)
    }
  }

}
</script>
