<template>
  <nav class="nav">
    <img :src="logo" alt="Gigz" class="logo-img" />
    <div class="nav-links">
      <a href="#features" class="nav-text">Features</a>
      <a href="#festivals" class="nav-text">Festivals</a>
      <a href="https://app.playgigz.com/login" class="nav-text">Sign In</a>
      <a href="https://app.playgigz.com/register" target="_blank" rel="noopener" class="btn-nav">Get Started →</a>
    </div>
  </nav>
</template>

<script setup>
import { img_gigz } from '../assets/images.js'
const logo = img_gigz
</script>

<style scoped>
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:60px;display:flex;align-items:center;padding:0 20px;background:rgba(6,6,8,.97);backdrop-filter:blur(18px);border-bottom:1px solid var(--border)}
.logo-img{height:30px;flex-shrink:0}
.nav-links{display:flex;align-items:center;gap:16px;margin-left:auto}
.nav-links a{font-size:.78rem;font-weight:500;color:var(--muted);transition:color .2s;white-space:nowrap}
.nav-links a:hover{color:#fff}
.nav-text{display:none}
.btn-nav{background:var(--red);color:#fff !important;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:9px 16px;border-radius:5px;transition:background .2s,transform .15s}
.btn-nav:hover{background:var(--red2) !important;transform:translateY(-1px)}
@media(min-width:768px){
  .nav{height:66px;padding:0 44px}
  .logo-img{height:34px}
  .nav-text{display:block}
  .nav-links{gap:24px}
  .btn-nav{padding:10px 22px}
}
</style>
