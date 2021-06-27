<template>
  <div class="flex flex-col justify-center h-screen w-2/5 mx-auto">
    <div class="flex-col border-solid border-4 border-purple-600 p-5">
      <h1 class="text-2xl text-purple-600">
        Task: {{ task.title }}
      </h1>
      <h2 class="text-xl text-purple-500">
        Creator info:
      </h2>
      <table class="table-auto">
        <tbody>
          <tr>
            <td>User ID:</td>
            <td class="font-bold">
              {{ task.userId }}
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td class="font-bold">
              {{ task.user.name }}
            </td>
          </tr>
          <tr>
            <td>Username:</td>
            <td class="font-bold">
              {{ task.user.username }}
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td class="font-bold">
              {{ task.user.email }}
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td class="font-bold">
              {{ task.user.phone }}
            </td>
          </tr>
          <tr>
            <td>Website:</td>
            <td class="font-bold">
              {{ task.user.website }}
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td class="font-bold">
              {{ task.user.address.city }},
              {{ task.user.address.street }},
              {{ task.user.address.suite }},
              {{ task.user.address.zipcode }}
            </td>
          </tr>
          <tr>
            <td>Company:</td>
            <td class="font-bold">
              {{ task.user.company.name }}
            </td>
          </tr>
        </tbody>
      </table>
      <NuxtLink to="/" class="text-xl text-purple-600 underline">
        Back
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  async fetch ({ store, params }) {
    await store.dispatch('task-manager/initTask', { id: params.id })
  },

  computed: {
    ...mapGetters({
      task: 'task-manager/task'
    })
  },

  methods: {

  }

}
</script>
