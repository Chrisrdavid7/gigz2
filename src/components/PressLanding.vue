<template>
  <q-page class="press-page">
    <!-- ======= Futuristic Hero ======= -->
    <header class="press-hero">
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="glow-ring ring-1"></div>
        <div class="glow-ring ring-2"></div>
      </div>

      <div class="hero-content">
        <div class="eyebrow">GIGZ FEED</div>
        <h1 class="hero-title">
          In the Press
          <span class="cursor-scan" aria-hidden="true"></span>
        </h1>
        <p class="hero-sub">Real-time highlights from media tracking</p>

        <!-- quick actions -->
        <div class="hero-actions">
          <q-input
            v-model="query"
            dense
            standout
            placeholder="Search articles"
            class="search-input"
            input-class="search-input__inner"
            :clearable="true"
          >
            <template #prepend>
              <i class="fas fa-magnifying-glass"></i>
            </template>
          </q-input>

          <q-select
            v-model="sortBy"
            :options="sortOptions"
            dense standout
            class="sort-select"
            emit-value map-options
          >
            <template #prepend>
              <i class="fas fa-arrow-up-wide-short"></i>
            </template>
          </q-select>
        </div>
      </div>
    </header>

    <!-- ======= Grid ======= -->
    <section class="press-grid">
      <q-card
        v-for="article in sortedAndFiltered"
        :key="article.id"
        class="press-card glass"
        flat
        bordered
        clickable
        @click="open(article.link)"
      >
        <div class="card-media">
          <q-img :src="article.image" :alt="article.title" ratio="16/9" />
          <div class="date-chip">{{ formatDate(article.date) }}</div>
        </div>

        <q-card-section class="card-body">
          <div class="source-line">
            <span class="source-dot"></span>
            <span class="source">{{ article.source }}</span>
          </div>
          <h3 class="card-title">{{ article.title }}</h3>
          <p class="card-excerpt">{{ article.excerpt }}</p>
        </q-card-section>

        <q-card-actions align="right" class="card-actions">
          <q-btn
            outline
            color="primary"
            label="Read"
            @click.stop="open(article.link)"
          />
        </q-card-actions>

        <!-- subtle scanline -->
        <div class="scanline" aria-hidden="true"></div>
      </q-card>

      <div v-if="!sortedAndFiltered.length" class="empty-state">
        <div class="empty-icon">
          <i class="fas fa-newspaper"></i>
        </div>
        <div>No results. Try a different search.</div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const query = ref('')
const sortBy = ref('newest')
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Source (A–Z)', value: 'source' }
]

const articles = ref([
  {
    id: 1,
    title: 'ILLENIUM Reveals Lineup for 2025 Edition of Curated Destination Festival, Ember Shores',
    source: 'EDM.com',
    date: '2025-08-01',
    excerpt: 'The three-day festival returns to Mexico in December with Seven Lions, Crankdat, Wooli, Dab The Sky and more. …',
    link: 'https://edm.com/events/ember-shores-festival-lineup-2025',
    image: '/images/press/edm.png'
  },
  {
    id: 2,
    title: 'ILLENIUM Reveals 2025 Ember Shores Lineup',
    source: 'EDM Tunes',
    date: '2025-08-01',
    excerpt: 'The full lineup for Ember Shores 2025 has been revealed, and it’s full of fan-favorite artists from top to bottom…',
    link: 'https://www.edmtunes.com/2025/08/illenium-reveals-2025-ember-shores-lineup/',
    image: '/images/press/edmTunes.png'
  },
  {
    id: 3,
    title: 'Illenium Reveals Full Lineup for Ember Shores 2025',
    source: 'EDM Identity',
    date: '2025-08-01',
    excerpt: 'Crankdat, Dab The Sky, Wooli, Jessica Audiffred, ALLEYCVT, Elephante, Boombox Cartel, Blanke, BIJOU, and more are set to join Illenium at Ember Shores this year!',
    link: 'https://edmidentity.com/2025/07/31/ember-shores-2025-lineup/',
    image: '/images/press/edmID.png'
  },
  {
    id: 4,
    title: 'Def Leppard and Mötley Crüe Teaming Up For First Rock the Tides Destination Festival in Mexico',
    source: 'Billboard',
    date: '2025-04-18',
    excerpt: 'The November event will also feature sets from Bret Michaels, Living Colour, Extreme and others.',
    link: 'https://www.billboard.com/music/rock/def-leppard-motley-crue-2025-rock-the-tides-festival-mexico-1235949841/',
    image: '/images/press/Rolling-Stone-Logo.jpg'
  },
  {
    id: 5,
    title: 'Def Leppard, Motley Crue Team for Rock the Tides Festival in Mexico',
    source: 'Rolling Stone',
    date: '2025-04-17',
    excerpt: 'Bret Michaels, Extreme, the Struts, Buckcherry, and others will perform this fall at the fest in Riviera Maya',
    link: 'https://www.rollingstone.com/music/music-news/def-leppard-motley-crue-rock-the-tides-festival-mexico-1235319723/',
    image: '/images/press/Rolling-Stone-Logo.jpg'
  },
  {
    id: 6,
    title: 'Def Leppard Team Up With Fellow 80s Rock Legends For Destination Festival',
    source: 'iHeart',
    date: '2025-04-17',
    excerpt: 'Def Leppard and Motley Crue are teaming up to host an all-inclusive destination festival this fall called Rock The Tides. The weekend-long event is set to go down November 7-9 on Mexicos Riviera Maya.',
    link: 'https://www.iheart.com/content/2025-04-17-def-leppard-team-up-with-fellow-80s-rock-legends-for-destination-festival/',
    image: '/images/press/Rolling-Stone-Logo.jpg'
  },
  {
    id: 7,
    title: 'Inside TOOL Live in the Sand: Promoters give preview of TOOL’s first-ever festival',
    source: 'Revolver Magazine',
    date: '2025-02-19',
    excerpt: 'A behind-the-scenes look at the luxury alt-metal event in the Dominican Republic',
    link: 'https://www.revolvermag.com/feature/inside-tool-live-in-the-sand-promoters-give-preview-of-tools-first-ever-festival/',
    image: '/images/press/revolver.png'
  },
  {
    id: 8,
    title: 'Destination Events Get Heavy With ‘Tool Live In The Sand’',
    source: 'PollStar',
    date: '2025-02-19',
    excerpt: '“We were really excited that they wanted to work with us on curating their destination event,” said Tyler Fey, partner and co-founder of destination event producer Festication.',
    link: 'https://news.pollstar.com/2024/11/15/destination-events-get-heavy-with-tool-live-in-the-sand/',
    image: '/images/press/revolver.png'
  },
  {
    id: 9,
    title: 'Headbangers Paradise Excision Announces New Oceanfront Music Festival in Cancún',
    source: 'EDM.com',
    date: '2021-08-03',
    excerpt: 'The inaugural Paradise Blue festival will feature performances by Zomboy, Virtual Riot, 12th Planet, and three sets from Excision himself.',
    link: 'https://edm.com/events/excision-announces-paradise-blue-destination-music-festival-cancun',
    image: '/images/press/edm.png'
  },
  {
    id: 10,
    title: 'deadmau5 Announces Destination Music Festival In Cancún',
    source: 'EDM.com',
    date: '2022-08-27',
    excerpt: 'We Are Friends converges on Paradisus, home of ILLENIUMs Ember Shores and Kaskades Sun Soaked festivals, among others.',
    link: 'https://edm.com/events/deadmau5-destination-music-festival-cancun',
    image: '/images/press/edm.png'
  }
])

const formatDate = (d) =>
  new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })

const open = (url) => window.open(url, '_blank', 'noopener')

const sortedAndFiltered = computed(() => {
  let list = articles.value.filter(a =>
    [a.title, a.source, a.excerpt].join(' ').toLowerCase().includes(query.value.toLowerCase().trim())
  )
  if (sortBy.value === 'newest') list.sort((a, b) => +new Date(b.date) - +new Date(a.date))
  if (sortBy.value === 'oldest') list.sort((a, b) => +new Date(a.date) - +new Date(b.date))
  if (sortBy.value === 'source') list.sort((a, b) => a.source.localeCompare(b.source))
  return list
})
</script>

<style scoped>
/* ===== Base ===== */
.press-page {
  --bg0: #050507;
  --bg1: #0b0e13;
  --neon: #c8ff7a;         /* cyber-lime */
  --neon-soft: rgba(200,255,122,0.18);
  --card: rgba(255,255,255,0.04);
  --stroke: rgba(255,255,255,0.08);
  --muted: #a9b0be;

  background: radial-gradient(1200px 600px at 70% -10%, rgba(200,255,122,0.12), transparent),
              radial-gradient(1000px 800px at 0% 100%, rgba(137,115,255,0.12), transparent),
              linear-gradient(180deg, var(--bg0), var(--bg1));
  min-height: calc(100vh + 140px);
  color: #e9edf5;
}

/* ===== Hero ===== */
.press-hero {
  position: relative;
  padding: 96px 20px 36px;
  overflow: clip;
}

.hero-bg .grid-overlay {
  position: absolute;
  inset: -10% -10% 0 -10%;
  background:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,0.06) 0 1px, transparent 2px) 0 0/32px 32px,
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0 1px, transparent 2px) 16px 16px/32px 32px;
  opacity: .25;
  animation: drift 20s linear infinite;
}
@keyframes drift { to { transform: translateY(-40px); } }

.glow-ring { position: absolute; inset: 0; pointer-events: none; }
.ring-1 { box-shadow: 0 0 120px 30px var(--neon-soft) inset; filter: blur(10px); }
.ring-2 { box-shadow: 0 0 160px 50px rgba(137,115,255,0.14) inset; filter: blur(20px); }

.hero-content { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
.eyebrow { font-size: 12px; letter-spacing: .24em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
.hero-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-shadow: 0 6px 26px rgba(0,0,0,.5);
}
.cursor-scan {
  display: inline-block; width: .75ch; height: 1.1em; vertical-align: -0.1em;
  background: linear-gradient(180deg, rgba(200,255,122,.8), rgba(200,255,122,.2));
  box-shadow: 0 0 22px var(--neon-soft);
  margin-left: .15ch; animation: blink 1.2s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.hero-sub { margin-top: 8px; color: var(--muted); }

.hero-actions {
  margin: 22px auto 0;
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 12px;
  max-width: 720px;
}

.search-input,
.sort-select {
  --q-field-label-color: var(--muted);
  --q-primary: var(--neon);
  border: 1px solid var(--stroke);
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
}
.search-input__inner { color: #e9edf5; }

/* ===== Grid ===== */
.press-grid {
  max-width: 1200px;
  margin: 20px auto 0px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(16px, 2vw, 28px);
}

.glass {
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid var(--stroke);
  border-radius: 16px;
  backdrop-filter: blur(6px);
  transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
  position: relative;
  overflow: hidden;
}
.glass:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(200,255,122,0.08), 0 4px 14px rgba(0,0,0,0.4);
  border-color: rgba(200,255,122,0.32);
}

.card-media { position: relative; }
.card-media .q-img { border-bottom: 1px solid var(--stroke); }

.date-chip {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 999px;
  background: rgba(5,5,7,0.72);
  border: 1px solid var(--stroke);
  box-shadow: 0 0 18px rgba(200,255,122,0.15);
}

.card-body { padding: 14px 16px 8px; }
.source-line { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .14em; }
.source-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--neon); box-shadow: 0 0 10px var(--neon-soft); }
.card-title { margin: 8px 0 6px; font-size: 18px; line-height: 1.3; font-weight: 800; }
.card-excerpt { color: #cfd6e4; font-size: 14px; line-height: 1.6; }

.card-actions { padding: 0 16px 16px; }
.card-actions .q-btn {
  --q-primary: var(--neon);
  color: var(--neon);
  border-color: rgba(200,255,122,0.4);
}
.card-actions .q-btn:hover { box-shadow: 0 0 22px rgba(200,255,122,0.25); }

.scanline {
  position: absolute; inset: 0 -60% auto; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200,255,122,0.22), transparent);
  transform: translateX(-100%);
  animation: sweep 3.2s linear infinite;
  pointer-events: none;
}
@keyframes sweep { to { transform: translateX(100%); } }

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--muted);
  padding: 40px 0 80px;
}
.empty-icon { font-size: 40px; margin-bottom: 10px; }

/* ===== Responsive ===== */
@media (max-width: 720px) {
  .hero-actions { grid-template-columns: 1fr; }
}
</style>
