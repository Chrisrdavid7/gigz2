<template>
  <NavBar />
  <HeroSection />
  <StatsBar />
  <FeaturesSection />
  <ProofSection />
  <PressBar />
  <FestivalsSection />
  <CtaBanner />
  <SiteFooter />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar          from './components/NavBar.vue'
import HeroSection     from './components/HeroSection.vue'
import StatsBar        from './components/StatsBar.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ProofSection    from './components/ProofSection.vue'
import PressBar        from './components/PressBar.vue'
import FestivalsSection from './components/FestivalsSection.vue'
import CtaBanner       from './components/CtaBanner.vue'
import SiteFooter      from './components/SiteFooter.vue'

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target) }
    })
  }, { threshold: 0.05 })

  setTimeout(() => {
    document.querySelectorAll('.rv').forEach(el => observer.observe(el))
    document.querySelectorAll('.feat-grid, .proof-stats, .fest-grid').forEach(grid => {
      Array.from(grid.children).forEach((c, i) => { c.style.transitionDelay = `${i * 0.08}s` })
    })
  }, 50)
})

onUnmounted(() => { if (observer) observer.disconnect() })
</script>
