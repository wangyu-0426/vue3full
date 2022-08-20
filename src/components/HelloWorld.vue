<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <el-button type="primary" @click="count++">
      <el-icon style="vertical-align: middle">
        <Search />
      </el-icon>
      <span style="vertical-align: middle">Hello count: {{ count }} </span>
    </el-button>
  </p>
</template>
