<template>
  <div class="press rv">
    <div class="press-inner">
      <span class="press-lbl">Covered by</span>
      <img :src="img_rs"       alt="Rolling Stone" class="press-logo rs" />
      <img :src="img_edmtunes" alt="EDM Tunes"     class="press-logo" style="height:14px" />
      <img :src="img_edmid"    alt="EDM Identity"  class="press-logo" style="height:12px" />
      <img :src="img_revolver" alt="Revolver"      class="press-logo" style="height:11px" />
      <img :src="img_edm"      alt="EDM.com"       class="press-logo edm-com" />
    </div>
  </div>
</template>
<script setup>
import { img_rs, img_edmtunes, img_edmid, img_revolver, img_edm } from '../assets/images.js'
</script>
<style scoped>
.press{padding:20px;background:var(--black);border-bottom:1px solid var(--border)}
.press-inner{max-width:1280px;margin:0 auto;display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:center}
.press-lbl{font-size:.58rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.18);width:100%;text-align:center}
.press-logo{height:15px;width:auto;opacity:.35;filter:grayscale(1) brightness(3);transition:opacity .2s}
.press-logo.rs{height:13px}
.press-logo.edm-com{height:19px;filter:grayscale(1) brightness(3) saturate(0)}
.press-logo:hover{opacity:.75}
@media(min-width:768px){
  .press{padding:24px 44px}
  .press-lbl{width:auto;font-size:.62rem}
  .press-logo{height:18px}
  .press-logo.rs{height:15px}
  .press-logo.edm-com{height:22px}
}
</style>
