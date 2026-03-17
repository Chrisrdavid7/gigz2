<template>
  <div class="hero">
    <img :src="bg" alt="Ember Shores" class="hero-bg" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-eyebrow"><div class="pulse"></div>The Platform for Artists Who Play Live</div>
      <h1>Your Live Career.<br/><span class="red">Built on Data.</span><br/><span class="dim">Powered by Gigz.</span></h1>
      <p class="hero-sub">Find shows, book venues, forecast demand, manage fans, and track revenue — <strong>everything you need to grow your live career in one platform.</strong></p>
      <div class="hero-tags">
        <span class="hero-tag">🗺 Demand Heatmap</span>
        <span class="hero-tag">🎪 Find Gigz</span>
        <span class="hero-tag">🧙 Show Creation Wizard</span>
        <span class="hero-tag">👥 Fan Analytics</span>
        <span class="hero-tag">💰 Revenue Tracking</span>
      </div>
      <div class="hero-ctas">
        <a href="https://app.playgigz.com/register" target="_blank" rel="noopener" class="btn-primary">Create Your Free Account →</a>
        <a href="#features" class="btn-ghost">See the Platform</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hp-label">Demand Forecast — Live in App</div>
      <div v-for="row in rows" :key="row.city" class="hp-row">
        <span class="hp-city">{{ row.city }}</span>
        <div class="hp-bar-wrap"><div class="hp-bar" :style="{ width: row.score + '%', background: row.color }"></div></div>
        <span class="hp-pct" :style="{ color: row.color }">{{ row.score }}</span>
      </div>
      <div class="hp-caption">Sign up to see your cities →</div>
    </div>
  </div>
</template>

<script setup>
import { img_ember25 } from '../assets/images.js'
const bg = img_ember25
const rows = [
  { city: 'Austin, TX',      score: 92, color: 'var(--green)' },
  { city: 'Los Angeles, CA', score: 87, color: 'var(--green)' },
  { city: 'Denver, CO',      score: 74, color: 'var(--amber)' },
  { city: 'Chicago, IL',     score: 61, color: 'var(--amber)' },
  { city: 'Boston, MA',      score: 38, color: 'rgba(255,255,255,.25)' },
]
</script>

<style scoped>
.hero{position:relative;min-height:100svh;margin-top:60px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}
.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%;z-index:1}
.hero-overlay{position:absolute;inset:0;z-index:2;background:linear-gradient(to top,rgba(6,6,8,1) 0%,rgba(6,6,8,.85) 45%,rgba(6,6,8,.4) 100%)}
.hero-content{position:relative;z-index:3;padding:32px 20px 28px}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;background:rgba(227,24,55,.1);border:1px solid rgba(227,24,55,.28);border-radius:4px;padding:6px 12px;font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
.pulse{width:6px;height:6px;border-radius:50%;background:var(--red);animation:blink 1.8s ease infinite;flex-shrink:0}
h1{font-family:var(--ft);font-size:clamp(2.6rem,10vw,5.6rem);font-weight:900;line-height:.93;letter-spacing:-.038em;margin-bottom:18px}
.hero-sub{font-size:.92rem;line-height:1.68;color:var(--muted2);margin-bottom:24px;max-width:560px}
.hero-sub strong{color:#fff;font-weight:700}
.hero-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px}
.hero-tag{font-size:.68rem;font-weight:600;color:rgba(255,255,255,.45);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:100px;padding:5px 13px}
.hero-ctas{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--red);color:#fff;font-size:.9rem;font-weight:700;padding:15px 28px;border-radius:5px;transition:background .2s,transform .15s,box-shadow .2s}
.btn-primary:hover{background:var(--red2);transform:translateY(-2px);box-shadow:0 10px 32px rgba(227,24,55,.4)}
.btn-ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:.88rem;font-weight:600;color:rgba(255,255,255,.6);border:1.5px solid rgba(255,255,255,.16);padding:14px 26px;border-radius:5px;transition:all .2s}
.btn-ghost:hover{border-color:rgba(255,255,255,.4);color:#fff;background:rgba(255,255,255,.05)}
.hero-panel{position:relative;z-index:3;margin:0 20px 24px;background:rgba(14,14,16,.95);border:1px solid var(--border2);border-radius:12px;padding:18px 20px;backdrop-filter:blur(24px)}
.hp-label{font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;display:flex;align-items:center;gap:6px}
.hp-label::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--green);display:inline-block}
.hp-row{display:flex;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)}
.hp-row:last-of-type{border-bottom:none}
.hp-city{font-size:.78rem;font-weight:600;min-width:110px}
.hp-bar-wrap{flex:1;height:4px;background:rgba(255,255,255,.07);border-radius:2px;margin:0 10px;overflow:hidden}
.hp-bar{height:100%;border-radius:2px}
.hp-pct{font-size:.72rem;font-weight:700;min-width:24px;text-align:right}
.hp-caption{font-size:.6rem;color:rgba(255,255,255,.2);margin-top:10px;text-align:center;letter-spacing:.04em}
@media(min-width:768px){
  .hero{display:block;min-height:auto;height:100vh;max-height:820px;margin-top:66px}
  .hero-overlay{background:linear-gradient(to right,rgba(6,6,8,.97) 30%,rgba(6,6,8,.48) 60%,rgba(6,6,8,.65) 100%),linear-gradient(to top,rgba(6,6,8,1) 0%,transparent 40%)}
  .hero-content{position:absolute;z-index:3;top:50%;transform:translateY(-50%);left:0;padding:0 44px;max-width:660px;width:100%}
  .hero-sub{font-size:1.05rem;margin-bottom:28px}
  .hero-ctas{flex-direction:row;margin-bottom:24px}
  .hero-panel{position:absolute;right:44px;top:50%;transform:translateY(-50%);margin:0;width:304px;padding:22px 26px}
  .hp-city{font-size:.82rem;min-width:122px}
  .hp-pct{font-size:.75rem;min-width:28px}
}
</style>
