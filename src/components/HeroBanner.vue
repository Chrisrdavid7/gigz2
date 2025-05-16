<template>
  <div class="hero-container">
    <div class="hero-img-wrapper">
      <img class="hero-img" src="../assets/embersBanner.png" alt="Hero Banner" />

      <!-- Text block -->
      <div class="hero-text-block">
        <span class="line-one">FROM DENVER TO</span>
        <span class="line-two">2.5M GLOBAL</span>
        <span class="line-three">TICKET SALES</span>
      </div>

      <div class="bottom-right-wrapper">
        <img class="bottom-right-logo" src="../assets/gigzAc1.png" alt="Gigz Logo" />
        <span class="bottom-right-text">Ember Shores</span>
      </div>
    </div>

    <div class="hero-headline">
      <span>PERFORM AT OVER </span><span class="accent-text">40 FESTIVALS</span>
    </div>

    <FestivalCards />

    <div class="hero-headline2">
      <span class="accent-text">1000 </span><span>CLUB AND THEATER SHOWS</span>
    </div>

    <div class="hero-transition">
      <img src="../assets/transition1.png" />
    </div>
  </div>
</template>

<script>
import FestivalCards from './FestivalCards'

export default {
  name: 'HeroBanner',
  components: {
    FestivalCards
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
  margin: auto;
}

.hero-img {
  width: 100%;
  height: 780px;
  object-fit: cover;
}

/* TEXT BLOCK */
.hero-text-block {
  position: absolute;
  top: 180px;
  left: 125px;
  display: flex;
  flex-direction: column;
  color: #c0961a;
  max-width: 600px;
  text-align: left;
  letter-spacing: -0.04em;
}

.hero-text-block .line-one {
  font-size: 2.6rem;
  font-weight: 800;
}

.hero-text-block .line-two {
  font-size: 3.8rem;
  font-weight: 900;
  color: #c0961a;
  line-height: 1.2;
}

.hero-text-block .line-three {
  font-size: 4rem;
  font-weight: 900;
  color: #c0961a;
  line-height: 1.2;
  margin-top: -10px;
}

.bottom-right-wrapper {
  position: absolute;
  bottom: 30px;
  right: 100px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10;
}

.bottom-right-logo {
  width: 35px;
  height: auto;
}

.bottom-right-text {
  font-family: 'Lab Grotesque', sans-serif;
  color: #9d8d8d;
  font-size: 1.2rem;
  font-weight: 400;
}

.hero-transition {
  margin-top: 50px;
  background: #000000;
  width: 100%;
}

.hero-headline {
  font-family: 'Lab Grotesque', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0.5em;
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: -15px;
}

.hero-headline2 {
  font-family: 'Lab Grotesque', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 1em;
  text-align: center;
  color: #ffffff;
  margin-top: -15px;
  margin-bottom: -15px;
}

/* RESPONSIVE STYLES */
@media (max-width: 1024px) {
  .hero-text-block {
    top: 120px;
    left: 60px;
    max-width: 80%;
  }

  .hero-text-block .line-one {
    font-size: 2.2rem;
  }

  .hero-text-block .line-two {
    font-size: 3rem;
  }

  .hero-text-block .line-three {
    font-size: 3.2rem;
    margin-top: -6px;
  }
}

@media (max-width: 768px) {
  .hero-img {
    height: 480px;
  }

  .hero-text-block {
    top: 80px;
    left: 20px;
    max-width: 90%;
  }

  .hero-text-block .line-one {
    font-size: 1rem;
  }

  .hero-text-block .line-two {
    font-size: 1.5rem;
  }

  .hero-text-block .line-three {
    font-size: 2rem;
    margin-top: -5px;
  }

  .bottom-right-wrapper {
    bottom: 20px;
    right: 20px;
    gap: 4px;
  }

  .bottom-right-logo {
    width: 28px;
  }

  .bottom-right-text {
    font-size: 1rem;
  }

  .hero-headline,
  .hero-headline2 {
    font-size: 12px;
    letter-spacing: 0.2em;
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .hero-img {
    height: 360px;
  }

  .hero-text-block {
    top: 30px;
    left: 15px;
  }

  .hero-text-block .line-one {
    font-size: 1.4rem;
  }

  .hero-text-block .line-two {
    font-size: 1.9rem;
  }

  .hero-text-block .line-three {
    font-size: 2rem;
  }

  .bottom-right-logo {
    width: 24px;
  }

  .bottom-right-text {
    font-size: 0.9rem;
  }
}
</style>
