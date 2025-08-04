<template>
    <q-page class="press-landing">
      <!-- ======= Hero / Title ======= -->
      <div class="text-h2 press-title">In the Press</div>
  
      <!-- ======= Article Loop ======= -->
      <q-card
        v-for="article in articles"
        :key="article.id"
        flat
        bordered
        class="q-mb-xl shadow-1 press-card"
      >
        <q-img
          :src="article.image"
          :alt="article.title"
          class="press-image"
          :ratio="16/9"
          fit="cover"
        />
  
        <q-card-section>
          <div class="text-h5 text-weight-bold">{{ article.title }}</div>
          <div class="text-subtitle2 text-grey-5 q-mt-xs">
            {{ article.source }} — {{ formatDate(article.date) }}
          </div>
          <div class="q-mt-md line-clamp-3">
            {{ article.excerpt }}
          </div>
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn color="primary" :href="article.link" target="_blank" label="Read More" />
        </q-card-actions>
      </q-card>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
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
      title: 'Def Leppard, Motley Crue Team for Rock the Tides Festival in Mexico',
      source: 'Rolling Stone',
      date: '2025-04-17',
      excerpt: 'Bret Michaels, Extreme, the Struts, Buckcherry, and others will perform this fall at the fest in Riviera Maya',
      link: 'https://www.rollingstone.com/music/music-news/def-leppard-motley-crue-rock-the-tides-festival-mexico-1235319723/',
      image: '/images/press/Rolling-Stone-Logo.jpg'
    },
    {
      id: 5,
      title: 'Inside TOOL Live in the Sand: Promoters give preview of TOOL’s first-ever festival',
      source: 'Revolver Mag',
      date: '2025-02-19',
      excerpt: 'A behind-the-scenes look at the luxury alt-metal event in the Dominican Republic',
      link: 'https://edm.com/events/deadmau5-destination-music-festival-cancun',
      image: '/images/press/revolver.png'
    },
    {
      id: 6,
      title: 'Headbangers Paradise Excision Announces New Oceanfront Music Festival in Cancún',
      source: 'EDM.com',
      date: '2021-08-03',
      excerpt: 'The inaugural Paradise Blue festival will feature performances by Zomboy, Virtual Riot, 12th Planet, and three sets from Excision himself.',
      link: 'https://edm.com/events/excision-announces-paradise-blue-destination-music-festival-cancun',
      image: '/images/press/edm.png'
    },
    {
      id: 7,
      title: 'deadmau5 Announces Destination Music Festival In Cancún',
      source: 'EDM.com',
      date: '2022-08-27',
      excerpt: 'We Are Friends converges on Paradisus, home of ILLENIUMs Ember Shores and Kaskades Sun Soaked festivals, among others.',
      link: 'https://edm.com/events/deadmau5-destination-music-festival-cancun',
      image: '/images/press/edm.png'
    }
  ])
  
  function formatDate(d) {
    return new Date(d).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  </script>
  
  <style scoped>
.press-landing {
  max-width: 920px;
  margin: 0 auto;
  padding: 120px 16px 48px; /* more top and bottom padding */
}

.press-title {
  margin-bottom: 40px; /* increased from 32px */
  text-align: center;
}

  .press-image {
    width: 100%;
    height: auto;
    max-height: 240px;
    object-fit: contain;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    .press-image {
      max-height: 120px;
      object-fit: contain;
      border-radius: 4px;
    }
  }
  
  .press-card {
    overflow: hidden;
    border-radius: 12px;
    background-color: white;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  