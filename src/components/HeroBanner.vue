<template>
  <div class="hero-container">
    <div class="hero-img-wrapper">
      <!-- Background Video -->
      <video autoplay muted loop playsinline class="hero-video">
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Headline Over Video -->
      <div class="hero-main-headline">
        <h1>Perform </h1>
        <h1 class="accent">At Over 40 Festivals</h1>
      </div>
    </div> <!-- ✅ closing .hero-img-wrapper -->

    <FestivalCards />

    <div class="hero-headline2">
      <div class="headline-text">
        <span class="accent-text">1000 </span><span>CLUB AND THEATER SHOWS</span>
      </div>
      <div class="venue-logos">
        <img :src="canopyLogo" alt="Canopy Club" />
        <img :src="siloLogo" alt="Silo Dallas" />
        <img :src="mileHighLogo" alt="Mile High Spirits" />
      </div>
    </div>
  </div> <!-- ✅ closing .hero-container -->
</template>

<script>
import FestivalCards from './FestivalCards'
import asapVideo from '../videos/asapRolling.mp4'

const canopyLogo = require('../logos/canopy.png')
const siloLogo = require('../logos/silo.jpg')
const mileHighLogo = require('../logos/mile.png')

export default {
  name: 'HeroBanner',
  components: {
    FestivalCards
  },
  data() {
    return {
      videoSrc: asapVideo,
      canopyLogo,
      siloLogo,
      mileHighLogo,
      
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Lab Grotesque';
  src: url('/media/fonts/LabGrotesque/LabGrotesqueBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Lab Grotesque';
  src: url('/media/fonts/LabGrotesque/LabGrotesqueMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Soehne';
  src: url('/fonts/Soehne5.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Neue Montreal';
  src: url('/fonts/ppneuemontreal-thin.otf') format('opentype');
  font-weight: 100; /* 'thin' is 100 */
  font-style: normal;
}

@font-face {
  font-family: 'Neue Montreal';
  src: url('/fonts/ppneuemontreal-medium.otf') format('opentype');
  font-weight: 500; /* 'medium' is 500 */
  font-style: normal;
}

@font-face {
  font-family: 'Neue Montreal';
  src: url('/fonts/ppneuemontreal-book.otf') format('opentype');
  font-weight: 400; /* 'medium' is 500 */
  font-style: normal;
}


body, html {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000000;
  width: 100%;
  position: relative;
}

.hero-img-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 1rem;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
}

.hero-main-headline {
  position: absolute;
  top: 75%;
  left: 8%;
  z-index: 2;
  color: white;
  text-align: left;

  h1 {
    font-family: 'Neue Montreal', sans-serif;
  font-size: 5.5rem;
  color: #fff;
   letter-spacing: 0.1em;
    font-weight: 500;
  
    margin: 0;
    line-height: 1.1;
  }

  .accent {
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 6vw;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 8vw;
    }
  }
}




.hero-headline2 {
  font-family: 'Lab Grotesque', sans-serif;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;

  .headline-text {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1em;
    margin-bottom: 60px;
  }

  .venue-logos {
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    img {
      height: auto;
      max-height: 80px;
      min-height: 28px;
      min-width: 100px;
      object-fit: contain;
      img {
  filter: none; // no inversion
}

    }
  }

  @media (max-width: 768px) {
    .headline-text {
      font-size: 14px;
      letter-spacing: 0.5em;
    }

    .venue-logos {
      gap: 16px;

      img {
        max-height: 28px;
      }
    }
  }
}
</style>
