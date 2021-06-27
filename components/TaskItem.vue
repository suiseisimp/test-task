<template>
  <nuxt-link
    :to="{ name: 'task', params: { id: task.id } }"
    :class="{
      'bg-green-100': task.completed,
      'bg-yellow-100': !task.completed,
    }"
    class="w-64 p-2 mb-2 shadow-lg"
  >
    <div class="text-purple-800">
      {{ task.title }}
    </div>
    <div>
      Creator name:
      <span class="font-bold">{{ task.user.name }}</span>
      Username:
      <span class="font-bold">{{ task.user.username }}</span>
    </div>
    <div>
      Status:
      <span v-if="task.completed" class="uppercase text-green-600">completed</span>
      <span v-else class="uppercase text-yellow-600">processing...</span>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    task: { type: Object, required: true }
  }
}

</script>
