<template>
  <div class="flex flex-grow flex-wrap flex-row bg-purple-200 p-4 justify-around overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-300 h-32 overflow-y-scroll">
    <task-item v-for="task in filteredTasks" :key="task.id" :task="task" />
  </div>
</template>

<script>

import TaskItem from '~/components/TaskItem.vue'

export default {
  name: 'TodoItem',
  components: { TaskItem },
  props: {
    filteredTasks: { type: Array, required: true }
  }
}

</script>
