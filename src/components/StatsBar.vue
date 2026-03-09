<template>
  <div class="stats-bar rv">
    <div class="stats-inner">
      <div v-for="s in stats" :key="s.num" class="stat">
        <div class="stat-num">{{ s.num }}</div>
        <div class="stat-lbl">{{ s.label }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const stats = [
  { num: '17M+',    label: 'Tickets Sold by Our Founders' },
  { num: '17,000+', label: 'Events Produced Since 1994' },
  { num: '400+',    label: 'Artists Booked Via This System' },
  { num: '10',      label: 'Sold-Out Festivals & Counting' },
]
</script>
<style scoped>
.stats-bar{background:var(--red)}
.stats-inner{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr}
.stat{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:22px 12px;border-right:1px solid rgba(255,255,255,.18);border-bottom:1px solid rgba(255,255,255,.18)}
.stat:nth-child(2){border-right:none}
.stat:nth-child(3){border-bottom:none}
.stat:nth-child(4){border-right:none;border-bottom:none}
.stat-num{font-family:var(--ft);font-size:clamp(1.6rem,6vw,2.9rem);font-weight:900;letter-spacing:-.03em;color:#fff;line-height:1}
.stat-lbl{font-size:.6rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:rgba(255,255,255,.68);margin-top:4px;text-align:center}
@media(min-width:768px){
  .stats-inner{display:flex}
  .stat{flex:1;padding:28px 16px;border-right:1px solid rgba(255,255,255,.18);border-bottom:none}
  .stat:nth-child(2){border-right:1px solid rgba(255,255,255,.18)}
  .stat:last-child{border-right:none}
  .stat-lbl{font-size:.68rem}
}
</style>
