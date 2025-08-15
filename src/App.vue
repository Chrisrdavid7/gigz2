<!-- src/App.vue -->
<template>
  <router-view />
</template>

<script setup>
import { defineOptions, onMounted } from 'vue'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

defineOptions({ name: 'App' })

// Run after the app mounts (client-side)
onMounted(() => {
  inject()
  injectSpeedInsights()
})
</script>
