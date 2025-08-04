<template>
    <q-layout>
      <q-page-container>
        <gigz-header />
 <PressLanding />
 <gigz-footer />
  </q-page-container>
  </q-layout>
  </template>



<script setup>
import { ref } from 'vue'

import GigzHeader from 'components/GigzHeader.vue'
import PressLanding from 'src/components/PressLanding.vue'
import GigzFooter from 'components/GigzFooter.vue'
import gigzLogo from 'src/assets/GigzLogo.png'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

  <style lang="scss">
  
  </style>
  