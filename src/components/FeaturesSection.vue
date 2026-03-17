<template>
  <div class="features rv" id="features">
    <div class="features-inner">
      <div class="sec-label">The Platform</div>
      <div class="features-head">
        <p class="features-kicker">Built for artists at every level</p>
        <h2>Everything You Need<br/>to Grow Your<br/><span class="features-gradient">Live Career.</span></h2>
        <p class="features-sub">From your first venue to destination festivals — Gigz gives you the intelligence and tools to build a live career on your terms.</p>
      </div>
      <div class="feat-grid">
        <div v-for="f in features" :key="f.title" class="feat-card rv">
          <span class="feat-icon">{{ f.icon }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <span class="feat-pill" :class="f.pillClass">{{ f.pill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '🗺', title: 'Demand Heatmap', pill: 'Free', pillClass: 'pill-free', desc: 'See which cities have the highest demand for your music, ranked by metro. Powered by Soundcharts — search by city, toggle the heatmap, and see your top recommended markets instantly.' },
  { icon: '🎪', title: 'Find Gigz', pill: 'SaaS', pillClass: 'pill-saas', desc: 'Browse festivals, venues, and events across the Gigz network — Red Rocks, Coachella, Salt Shed, and hundreds more. Submit directly to perform, no agent required.' },
  { icon: '🧙', title: 'Show Creation Wizard', pill: 'SaaS', pillClass: 'pill-saas', desc: "AI-guided show building: pick your cities, select a venue, set production details, configure ticketing, and submit — all in one flow. Built for artists who've never booked a show themselves." },
  { icon: '🎟', title: 'Bookings Management', pill: 'SaaS', pillClass: 'pill-saas', desc: 'Track every booking across pending, approved, and complete stages. Create bookings directly against venues in the network — all your show history in one place.' },
  { icon: '👥', title: 'Fan Intelligence', pill: 'SaaS', pillClass: 'pill-saas', desc: 'See your top fans ranked by ticket spend and shows attended, your top influencers by platform and follower count, and your full social media presence aggregated across channels.' },
  { icon: '📣', title: 'Promotions', pill: 'SaaS', pillClass: 'pill-saas', desc: 'Create and manage ad campaigns with budget, start/end dates, and status tracking. Monitor CTR, daily spend, follower growth, and top-performing campaigns — all from your dashboard.' },
]
</script>

<style scoped>
.features{padding:52px 20px;background:var(--dark);border-bottom:1px solid var(--border)}
.features-inner{max-width:1280px;margin:0 auto}
.features-head{margin-bottom:40px}
.features-kicker{font-size:.68rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.features-head h2{font-family:var(--ft);font-size:clamp(2.2rem,7vw,3.8rem);font-weight:900;letter-spacing:-.04em;line-height:.92;margin-bottom:16px}
.features-gradient{background:linear-gradient(135deg,#fff 0%,rgba(227,24,55,.85) 60%,#FF1F3D 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.features-sub{font-size:.95rem;color:var(--muted);line-height:1.75;max-width:480px}
.feat-grid{display:grid;grid-template-columns:1fr;gap:12px}
.feat-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:20px;transition:border-color .25s}
.feat-card:hover{border-color:rgba(227,24,55,.25)}
.feat-icon{font-size:1.4rem;margin-bottom:12px;display:block}
.feat-card h3{font-size:.95rem;font-weight:700;color:#fff;margin-bottom:6px}
.feat-card p{font-size:.8rem;color:var(--muted);line-height:1.62}
.feat-pill{display:inline-block;font-size:.58rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:3px;margin-top:10px}
.pill-free{background:rgba(0,201,107,.12);color:var(--green);border:1px solid rgba(0,201,107,.2)}
.pill-saas{background:rgba(91,91,214,.12);color:#8B8BE8;border:1px solid rgba(91,91,214,.2)}
@media(min-width:768px){
  .features{padding:80px 44px}
  .feat-grid{grid-template-columns:repeat(3,1fr)}
}
</style>
