<template>
  <footer>
    <div class="foot-inner">
      <img :src="logo" alt="Gigz" class="foot-logo" />
      <div class="foot-links">
        <a href="#proof">The Proof</a>
        <a href="#festivals">Festivals</a>
        <a href="https://festication.com" target="_blank" rel="noopener">Festication</a>
        <a href="https://embershores.com" target="_blank" rel="noopener">Ember Shores</a>
        <a href="mailto:support@playgigz.com">Contact</a>
      </div>
      <div class="foot-copy">© 2026 Gigz Technologies Inc. · All Rights Reserved</div>
    </div>
  </footer>
</template>
<script setup>
import { img_gigz } from '../assets/images.js'
const logo = img_gigz
</script>
<style scoped>
footer{background:var(--black);border-top:1px solid var(--border);padding:32px 20px 44px}
.foot-inner{max-width:1280px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:20px;text-align:center}
.foot-logo{height:26px;opacity:.55}
.foot-links{display:flex;gap:16px;flex-wrap:wrap;justify-content:center}
.foot-links a{font-size:.74rem;color:rgba(255,255,255,.28);transition:color .2s}
.foot-links a:hover{color:#fff}
.foot-copy{font-size:.68rem;color:rgba(255,255,255,.16)}
@media(min-width:768px){
  footer{padding:40px 44px 28px}
  .foot-inner{flex-direction:row;text-align:left;justify-content:space-between;align-items:center}
  .foot-logo{height:28px}
  .foot-links{gap:22px}
  .foot-links a{font-size:.75rem}
}
</style>
