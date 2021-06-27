<template>
  <div class="bg-purple-300 p-2 pr-4 flex-grow overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-300 h-32 overflow-y-scroll">
    <user-item v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>

import UserItem from '~/components/UserItem.vue'

export default {
  name: 'TodoItem',
  components: { UserItem },
  props: {
    users: { type: Array, required: true }
  }
}

</script>
