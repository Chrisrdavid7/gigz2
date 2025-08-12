<!-- EventsLanding.vue -->
<template>
    <div class="events-wrap">
      <!-- FX layers -->
      <div class="fx fx-grid" aria-hidden="true"></div>
      <div class="fx fx-aurora a1" aria-hidden="true"></div>
      <div class="fx fx-aurora a2" aria-hidden="true"></div>
      <div class="fx fx-vignette" aria-hidden="true"></div>
  
      <!-- ===== Hero / Upcoming Event ===== -->
      <section class="hero" :style="heroStyle">
        <div class="hero-overlay" aria-hidden="true"></div>
  
        <div class="hero-content">
          <div class="eyebrow">Upcoming Events</div>
          <h1 class="hero-title">{{ upcoming.title }}</h1>
  
          <div class="meta">
            <div class="meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4H5a2 2 0 0 0-2 2v12a2
              2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0
              0 0-2-2Zm0 14H5V10h14Zm0-10H5V6h14Z"/></svg>
              <span>{{ dateFormatted }}</span>
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7
              13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0
              9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
              <span>{{ upcoming.location }}</span>
            </div>
            <div class="meta-item" v-if="countdown && countdown.totalMs > 0">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2h-2v2H8v2h8V4h-3zM7
              8V6H5v2H3v13h18V8zm2 2h10v9H5v-9z"/></svg>
              <span class="countdown">{{ countdown.days }}d {{ countdown.hours }}h {{ countdown.minutes }}m</span>
            </div>
          </div>
  
          <div class="ctas">
            <a :href="upcoming.primaryCta.href" class="btn btn-primary">{{ upcoming.primaryCta.label }}</a>
            <a :href="upcoming.secondaryCta.href" class="btn">{{ upcoming.secondaryCta.label }}</a>
          </div>
        </div>
      </section>
  
      <!-- ===== Previous Events ===== -->
      <section class="previous">
        <header class="prev-head">
          <h2>Previous Events</h2>
          <p>Highlights from recent shows powered by Gigz.</p>
        </header>
  
        <div class="grid">
          <article 
  v-for="(ev, i) in previous" 
  :key="i" 
  class="card"
  :class="{ 'wide-card': ev.year === 2024 }"
>
            <div class="rim" aria-hidden="true"></div>
            <figure class="media">
              <img :src="ev.image" :alt="ev.title" loading="lazy" />
              <figcaption class="badge">{{ ev.year }}</figcaption>
            </figure>
            <div class="body">
              <h3 class="title">{{ ev.title }}</h3>
              <div class="sub">
                <span>{{ ev.city }}</span>
                <span class="dot">•</span>
                <span>{{ ev.attendance.toLocaleString() }} attendees</span>
              </div>
              <div class="tags">
                <span v-for="(t, j) in ev.tags" :key="j" class="tag">{{ t }}</span>
              </div>
            </div>
            <a v-if="ev.link" :href="ev.link" class="ghost" aria-label="Open event"></a>
          </article>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, onBeforeUnmount, reactive } from 'vue'
  
  /**
   * Replace the demo data below with your live content.
   * Images can be local (/images/...) or remote (https://...).
   */
  const upcoming = reactive({
    title: 'Ember Shores',
    date: '2025-12-05T09:00:00-04:00', // ISO string
    location: 'Cancun, Mexico',
    heroImage: '/images/embers2025.png', // keep or swap
    primaryCta: { label: 'Get Tickets', href: 'https://embershores.com/' },
    secondaryCta: { label: 'Notify Me', href: 'mailto:info@playgigz.com?subject=Embers%20Information%20Inquiry' }
  })
  
  const previous = reactive([
  {
      title: 'Tool In The Sand',
      year: 2025,
      city: 'Punta Cana, Dominican Republic',
      attendance: 7715,
      
      image: '/images/Tool2025.jpg',
      link: 'https://toolinthesand.com/'
    },
    {
      title: 'Paradise Blue',
      year: 2024,
      city: 'Cancun, Mexico',
      attendance: 7200,
    
      image: '/images/blue2024.png',
      link: 'https://paradisebluefestival.com/'
    },
    {
      title: 'Ember Shores',
      year: 2023,
      city: 'Cancun, Mexico',
      attendance: 8900,
    
      image: '/images/embers2023.png',
      link: 'https://embershores.com/'
    },
    {
      title: 'Paradise Blue',
      year: 2023,
      city: 'Cancun, Mexico',
      attendance: 5520,
    
      image: '/images/blue2024.png',
      link: 'https://paradisebluefestival.com/'
    },
    {
      title: 'Sun SoaKed & Friend5!',
      year: 2022,
      city: 'Cancun, Mexico',
      attendance: 4430,
    
      image: '/images/sunsoak.png',
      link: 'https://sunsoaked.insomniac.com/'
    },
    {
      title: 'Ember Shores',
      year: 2022,
      city: 'Cancun, Mexico',
      attendance: 6200,
    
      image: '/images/embershores2022.jpg',
      link: 'https://embershores.com/'
    },
    {
      title: 'Paradise Blue',
      year: 2022,
      city: 'Cancun, Mexico',
      attendance: 8200,
    
      image: '/images/paradiseBlue2022.png',
      link: 'https://paradisebluefestival.com/'
    },
    {
      title: 'Ember Shores',
      year: 2021,
      city: 'Cancun, Mexico',
      attendance: 5200,
    
      image: '/images/embersShores2021.jpg',
      link: 'https://paradisebluefestival.com/'
    },
  ])
  
  // ===== Hero styles
  const heroStyle = computed(() => ({
    '--hero': `url("${upcoming.heroImage}")`
  }))
  
  // ===== Date + countdown
  const dateFormatted = computed(() => {
    try {
      return new Date(upcoming.date).toLocaleString(undefined, {
        weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit'
      })
    } catch { return upcoming.date }
  })
  
  const countdown = reactive({ days: 0, hours: 0, minutes: 0, totalMs: 0 })
  let timer
  const tick = () => {
    const target = new Date(upcoming.date).getTime()
    const now = Date.now()
    const diff = Math.max(0, target - now)
    countdown.totalMs = diff
    countdown.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    countdown.hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    countdown.minutes = Math.floor((diff / (1000 * 60)) % 60)
  }
  onMounted(() => {
    tick()
    timer = setInterval(tick, 30_000) // update every 30s
  })
  onBeforeUnmount(() => clearInterval(timer))
  </script>
  
  <style scoped lang="scss">
  /* ================== TOKENS ================== */
  .events-wrap{
    --bg0:#040506;
    --bg1:#0b0e13;
    --grid:rgba(255,255,255,.06);
    --stroke:rgba(255,255,255,.12);
    --glass1:rgba(255,255,255,.06);
    --glass2:rgba(255,255,255,.02);
    --text:#e9edf5;
    --muted:#a9b0be;
    --neon:#c8ff7a;     /* cyber-lime */
    --violet:#8f7aff;
    --shadow:rgba(0,0,0,.5);
    color: var(--text);
    background: linear-gradient(180deg, var(--bg0), var(--bg1));
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }
  
  /* ================== BG FX ================== */
  .fx{ position:absolute; inset:0; pointer-events:none; }
  .fx-grid{
    opacity:.14;
    background:
      repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 28px),
      repeating-linear-gradient(0deg,  var(--grid) 0 1px, transparent 1px 28px);
    animation:gridShift 28s linear infinite;
  }
  @keyframes gridShift{ to{ transform: translateY(-60px); } }
  .fx-aurora{ filter: blur(28px); mix-blend-mode: screen; }
  .fx-aurora.a1{ background: radial-gradient(560px 360px at 12% 8%, rgba(200,255,122,.18), transparent 60%); }
  .fx-aurora.a2{ background: radial-gradient(560px 360px at 88% 92%, rgba(143,122,255,.16), transparent 60%); }
  .fx-vignette{ background: radial-gradient(1200px 700px at 50% 38%, transparent 60%, rgba(0,0,0,.55)); }
  
  /* ================== HERO ================== */
  .hero{
    min-height: clamp(70vh, 86vh, 92vh);
    display:grid;
    place-items:end start;
    padding: clamp(18px, 4vw, 48px);
    background:
      linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.65)),
      var(--hero) center/cover no-repeat;
    position: relative;
  }
  .hero-overlay{
    position:absolute; inset:0;
    background:
      radial-gradient(1200px 600px at 80% 20%, rgba(200,255,122,.12), transparent 60%),
      radial-gradient(1000px 600px at 10% 100%, rgba(143,122,255,.12), transparent 60%);
    mix-blend-mode: screen;
  }
  .hero-content{
    position:relative; z-index:1;
    max-width: min(1000px, 92%);
    backdrop-filter: blur(6px);
    background: linear-gradient(180deg, var(--glass1), var(--glass2));
    border:1px solid var(--stroke);
    border-radius: 18px;
    padding: clamp(16px, 3vw, 28px);
    box-shadow: 0 24px 60px var(--shadow);
  }
  .eyebrow{
    font-size: .8rem; letter-spacing: .3em; text-transform: uppercase;
    color: var(--muted); margin-bottom: .35rem;
  }
  .hero-title{
    font-weight: 900;
    font-size: clamp(32px, 6vw, 72px);
    letter-spacing: -0.01em;
    margin: 0 0 .5rem;
    text-shadow: 0 10px 28px rgba(0,0,0,.6);
  }
  .meta{
    display:flex; flex-wrap:wrap; gap: 14px 24px; margin: .25rem 0 .75rem;
  }
  .meta-item{
    display:inline-flex; align-items:center; gap:10px; color: var(--text);
    svg{ width:18px; height:18px; fill: currentColor; opacity:.9; }
  }
  .countdown{ color:#0b0e13; background: var(--neon); padding:2px 8px; border-radius:999px; font-weight:800; }
  
  /* CTA buttons */
  .ctas{ display:flex; gap:12px; margin-top: .5rem; flex-wrap: wrap; }
  .btn{
    position:relative; display:inline-flex; align-items:center; justify-content:center;
    padding: 12px 16px; border-radius: 12px; text-decoration:none; color: var(--text);
    border:1px solid rgba(255,255,255,.2);
    background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
    font-weight: 800; letter-spacing:.02em;
    transition: transform .12s ease, box-shadow .2s ease, border-color .2s ease;
  }
  .btn::before{
    content:""; position:absolute; inset:0; border-radius:12px; pointer-events:none;
    background: conic-gradient(from 120deg, rgba(200,255,122,.0), rgba(200,255,122,.35), rgba(143,122,255,.25), rgba(200,255,122,.0));
    filter: blur(12px); opacity:.25; transition: opacity .25s ease;
  }
  .btn:hover{ transform: translateY(-1px); border-color: rgba(200,255,122,.5); box-shadow: 0 10px 24px rgba(200,255,122,.12), 0 4px 10px rgba(0,0,0,.4); }
  .btn:hover::before{ opacity:.5; }
  
  .btn-primary{
    color:#0b0e13;
    background: linear-gradient(135deg, #ffd34e, #c0961a);
 
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }
  
  /* ================== PREVIOUS ================== */
  .previous{
    padding: clamp(28px, 6vw, 64px) clamp(16px, 5vw, 32px) clamp(36px, 8vw, 80px);
    position:relative; z-index:1;
  }
  .prev-head{
    max-width: 1200px; margin: 0 auto 16px;
    h2{ font-size: clamp(24px, 3.8vw, 40px); margin: 0 0 4px; font-weight: 900; }
    p{ color: var(--muted); margin: 0; }
  }
  
  .grid{
    max-width: 1200px; margin: 18px auto 0;
    display:grid; gap: 18px;
    grid-template-columns: repeat(12, 1fr);
  }
  @media (max-width: 980px){
    .grid{ grid-template-columns: repeat(6, 1fr); }
  }
  @media (max-width: 640px){
    .grid{ grid-template-columns: repeat(2, 1fr); }
  }
  .card{
    grid-column: span 3;
    position:relative; border-radius:16px; overflow:hidden;
    background: linear-gradient(180deg, var(--glass1), var(--glass2));
    border:1px solid var(--stroke);
    box-shadow: 0 14px 36px var(--shadow);
    transition: transform .2s ease, box-shadow .25s ease, border-color .2s ease, filter .25s ease;
  }
  .card:nth-child(1){ grid-column: span 6; }
  .card:nth-child(3){ grid-column: span 4; }
  .card:nth-child(4){ grid-column: span 4; }
  @media (max-width: 980px){
    .card, .card:nth-child(1), .card:nth-child(3), .card:nth-child(4){ grid-column: span 3; }
  }
  @media (max-width: 640px){
    .card, .card:nth-child(1), .card:nth-child(3), .card:nth-child(4){ grid-column: span 2; }
  }
  .card:hover{
    transform: translateY(-6px);
    border-color: rgba(200,255,122,.5);
    box-shadow: 0 22px 50px rgba(0,0,0,.6), 0 0 22px rgba(200,255,122,.16);
    filter: saturate(1.06) contrast(1.02);
  }
  /* neon rim */
  .card .rim{
    content:""; position:absolute; inset:-1px; border-radius:16px; pointer-events:none;
    background: linear-gradient(135deg, rgba(200,255,122,.0) 0%, rgba(200,255,122,.55) 40%, rgba(143,122,255,.55) 60%, rgba(200,255,122,.0) 100%);
    opacity:.35; filter: blur(.2px);
  }
  .media{ position:relative; aspect-ratio: 16/9; overflow:hidden; }
  .media img{ width:100%; height:100%; object-fit: cover; display:block; }
  .badge{
    position:absolute; left:12px; top:12px;
    background: rgba(0,0,0,.6); color: #fff; padding: 4px 8px; border-radius: 999px;
    font-weight: 800; letter-spacing:.02em; border:1px solid rgba(255,255,255,.2);
  }
  .body{ padding: 12px 14px 16px; }
  .title{ font-size: 1.05rem; margin: 2px 0 6px; font-weight: 800; }
  .sub{ color: var(--muted); font-size:.92rem; }
  .dot{ opacity:.6; margin: 0 6px; }
  .tags{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
  .tag{
    font-size:.78rem; color:#0b0e13; font-weight:800;
    background: linear-gradient(180deg, var(--neon), #a8ff4d);
    border:1px solid rgba(200,255,122,.6);
    border-radius:999px; padding: 4px 10px;
  }
  .ghost{ position:absolute; inset:0; }
  
  /* ================== A11Y / Motion ================== */
  @media (prefers-reduced-motion: reduce){
    .fx-grid{ animation: none !important; }
    .card, .btn{ transition: none !important; }
  }
  /* Make the 2024 event take up 2 columns on larger screens */
.wide-card {
  grid-column: span 5;
}

/* Optional: make it taller for balance */
@media (min-width: 768px) {
  .wide-card {
    min-height: 420px;
  }
}
/* ============ Mobile polish ============ */
@media (max-width: 680px){

/* Tone down FX + save GPU */
.fx-grid{ opacity:.08; animation: none; }
.fx-aurora{ filter: blur(20px); }

/* Hero */
.hero{
  min-height: 70vh;
  padding: 14px 14px 18px;
  background:
    linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.75)),
    var(--hero) center 20%/cover no-repeat;
}
.hero-content{
  width: 100%;
  max-width: none;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 12px 30px var(--shadow);
}
.eyebrow{ font-size:.72rem; letter-spacing:.24em; }
.hero-title{
  font-size: clamp(22px, 7.2vw, 34px);
  line-height: 1.12;
  margin-bottom: .35rem;
}

/* Meta rows stack cleanly */
.meta{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: .25rem 0 .6rem;
}
.meta-item{ font-size: .95rem; }
.meta-item svg{ width:16px; height:16px; }

/* Neon countdown chip—bigger tap target */
.countdown{
  font-variant-numeric: tabular-nums;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 8px 18px rgba(200,255,122,.22), 0 2px 6px rgba(0,0,0,.45);
}

/* CTAs go full width, stacked */
.ctas{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.btn{
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-size: .95rem;
}

/* Previous Events */
.previous{
  padding: 22px 14px 56px;
}
.prev-head h2{ font-size: 22px; }
.prev-head p{ font-size: .92rem; }

/* 2-up grid -> 1-up for clean scroll */
.grid{
  grid-template-columns: 1fr;
  gap: 14px;
  max-width: 680px;
}

.card{
  grid-column: auto !important;     /* ignore special spans on mobile */
  border-radius: 14px;
}
.media{ aspect-ratio: 16/10; }
.badge{ left:10px; top:10px; padding: 3px 8px; }

.title{ font-size: 1rem; }
.sub{ font-size: .9rem; }
.tags{ gap: 6px; }
.tag{ font-size: .74rem; padding: 3px 9px; }

/* Reduce motion if user prefers */
@media (prefers-reduced-motion: reduce){
  .btn, .card{ transition: none !important; }
}
}

/* Slight tablet tune so the “2024 wide” card still looks good */
@media (min-width: 681px) and (max-width: 980px){
.grid{ grid-template-columns: repeat(6, 1fr); }
.wide-card{ grid-column: span 4; }  /* not too huge on tablets */
}


  </style>
  