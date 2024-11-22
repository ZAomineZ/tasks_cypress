<script setup lang="ts">
  import {ref} from "vue";

  interface Task {
    id: number;
    name: string;
  }

  const tasks = ref<Task[]>([
    {id: 1, name: "Buying milk"}
  ])
  const newTask = ref<string>("")

  const addTask = () => {
    if (newTask.value.trim()) {
      tasks.value.push({id: Date.now(), name: newTask.value})
      newTask.value = ""
    }
  }

  const removeTask = (id: string|number) => {
    tasks.value = tasks.value.filter(item => item.id !== id)
  }
</script>

<template>
  <h1>Task lists</h1>
  <p v-if="tasks.length === 0">No tasks available</p>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
      <button @click="removeTask(task.id)" aria-label="Remove task">x</button>
    </li>
  </ul>
  <form @submit.prevent="addTask">
    <input type="text" v-model="newTask" placeholder="New task">
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>

</style>