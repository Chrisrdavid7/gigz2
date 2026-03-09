<template>
  <div class="proof rv" id="proof">
    <div class="proof-inner">
      <div class="proof-left">
        <h2>The Festivals<br/>Are the <span class="red">Proof.</span></h2>
        <p class="lede">We didn't build a forecasting tool and go test it. <strong>We built destination festivals that needed to sell out — and built this system to make sure they did.</strong></p>
        <p class="pull">Every artist on every Festication lineup was identified by data before they were booked. We knew their streaming trajectory, their geographic fanbase density, their ticket-buying audience. We didn't guess. The festivals sold out. That's the proof.</p>
      </div>
      <div class="proof-stats">
        <div v-for="ps in stats" :key="ps.num" class="ps">
          <div class="ps-num">{{ ps.num }}</div>
          <div class="ps-body"><strong>{{ ps.title }}</strong><p>{{ ps.desc }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const stats = [
  { num: '100%', title: 'Sell-Through Rate',  desc: 'Every Festication festival has sold out since inception — 10 events and counting across 4 annual franchises.' },
  { num: '5+',   title: 'Years Running',       desc: "This isn't a prototype. We've been running this system internally since the first Ember Shores in 2021." },
  { num: '400+', title: 'Artists Validated',   desc: 'Every artist who performed was demand-validated before booking. The lineups are the track record.' },
]
</script>
<style scoped>
.proof{padding:52px 20px;background:var(--dark);border-bottom:1px solid var(--border)}
.proof-inner{max-width:1280px;margin:0 auto;display:flex;flex-direction:column;gap:36px}
.proof-left h2{font-family:var(--ft);font-size:clamp(2rem,8vw,3.6rem);font-weight:900;letter-spacing:-.035em;line-height:.94;margin-bottom:18px}
.lede{font-size:.95rem;line-height:1.72;color:var(--muted2);margin-bottom:14px}
.lede strong{color:#fff;font-weight:700}
.pull{font-size:.85rem;line-height:1.74;color:var(--muted);border-left:2px solid rgba(227,24,55,.4);padding-left:16px}
.proof-stats{display:flex;flex-direction:column;gap:12px}
.ps{display:flex;align-items:center;gap:16px;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:18px 20px;transition:border-color .3s}
.ps:hover{border-color:rgba(227,24,55,.3)}
.ps-num{font-family:var(--ft);font-size:1.8rem;font-weight:900;letter-spacing:-.03em;color:var(--red);min-width:76px;line-height:1}
.ps-body strong{display:block;font-size:.88rem;font-weight:700;margin-bottom:3px;color:#fff}
.ps-body p{font-size:.78rem;color:var(--muted);line-height:1.55}
@media(min-width:768px){
  .proof{padding:80px 44px}
  .proof-inner{display:grid;grid-template-columns:1.1fr 1fr;gap:72px;flex-direction:unset}
  .proof-left h2{font-size:clamp(2.2rem,4vw,3.6rem)}
  .ps-num{font-size:2rem;min-width:86px}
  .ps-body strong{font-size:.9rem}
  .ps-body p{font-size:.8rem}
}
</style>
