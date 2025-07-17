<template>
  <q-layout>

    <!-- Slide-down overlay with centered Gigz logo -->
    <div v-if="showOverlay" class="slide-overlay">
      <img :src="gigzLogo" alt="Gigz Logo" class="overlay-image" />
    </div>

    <q-page-container>
      <gigz-header />
      <hero-banner />
      <artist-section />
      <gigz-footer />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GigzHeader from 'components/GigzHeader.vue'
import HeroBanner from 'components/HeroBanner.vue'
import ArtistSection from 'components/ArtistSection.vue'
import GigzFooter from 'components/GigzFooter.vue'
import gigzLogo from 'src/assets/GigzLogo.png'

defineOptions({ name: 'MainLayout' })

const showOverlay = ref(true)

onMounted(() => {
  setTimeout(() => {
    showOverlay.value = false
  }, 2000) // 0.8s hold + 1.2s slide
})
</script>

<style scoped>
.slide-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: holdAndSlide 2s forwards;
}

@keyframes holdAndSlide {
  0%   { transform: translateY(0); }
  40%  { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

.overlay-image {
  max-width: 120px;
  width: 80%;
  height: auto;
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
</style>
