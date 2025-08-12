<template>
    <q-layout>
      <q-page-container>
        <gigz-header />
 <EventsLanding />
 <gigz-footer />
  </q-page-container>
  </q-layout>
  </template>



<script setup>
import { ref } from 'vue'

import GigzHeader from 'components/GigzHeader.vue'
import EventsLanding from 'components/EventsLanding.vue'
import GigzFooter from 'components/GigzFooter.vue'


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

  <style lang="scss">
  
  </style>
  