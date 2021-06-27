<template>
  <label :for="'User' + user.id">
    <div class="p-2 bg-purple-200 mb-1 hover:bg-purple-100 cursor-pointer shadow-md">
      <input :id="'User' + user.id" type="checkbox" :checked="user.isSelected" @change="checkUser(user, $event)">
      {{ user.name }}
    </div>
  </label>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    user: { type: Object, required: true }
  },
  methods: {
    checkUser (user, event) {
      this.$store.dispatch('task-manager/selectUser', {
        user,
        value: event.target.checked
      })
    }

  }
}

</script>
