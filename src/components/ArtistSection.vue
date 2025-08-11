<template>
  <div class="artist-container">
    <img class="background-image" src="../assets/test.png" alt="Background" />
    <img class="middle-line" src="../assets/line16.png" alt="Middle Line" />

    <div class="artist-tagline-container">
      <div class="tagline-wrapper">
        <img class="welcome-to-gigz" src="../assets/welcome.png" alt="Welcome to Gigz" />
        <p class="tagline-description">
          Gigz uses AI to bring artists, venues, and fans together for unforgettable shows. 
          Smarter matches, bigger crowds, better experiences — turning live music into a science.
        </p>
      </div>
    </div>

    <div class="split-section">
      <div class="split-row">
        <div class="column left">
          <h3>Tour Creation</h3>
          <p>Plan smarter, tour bigger. Our AI builds your perfect schedule — picking the right cities, dates, and routes so every stop is packed with fans who can’t wait to see you.</p>
        </div>
        <div class="column right">
          <h3>Analytics Dashboard</h3>
          <p>Your career, decoded. See exactly where your momentum is growing, which markets love you most, and what moves to make next — all powered by AI insights you can’t get anywhere else.</p>
        </div>
      </div>

      <div class="split-row">
        <div class="column left">
          <h3>Venue Selection</h3>
          <p>Find your perfect stage. Our AI combs through millions of data points to match you with venues that fit your energy, your audience, and your goals — so every show feels like a sold-out hometown return.</p>
        </div>
        <div class="column right">
          <h3>Innovative Placements</h3>
          <p>Get on the world’s biggest stages before anyone else. From major festivals to hidden-gem venues, Gigz unlocks exclusive spots where your music will shine — and your career will soar.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistSection'
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
  src: url('/media/fonts/LabGrotesque/LabGrotesqueBlack.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Lab Grotesque';
  src: url('/media/fonts/LabGrotesque/LabGrotesqueRegular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

.artist-container {
  position: relative;
  z-index: 0;
  overflow: hidden;
  color: white;
  height: 140rem;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 3rem;
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: difference;
  z-index: -1;
  pointer-events: none;
  opacity: 1;
}

.middle-line {
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  height: 220vh;
  z-index: 1;
  pointer-events: none;
  opacity: 0.8;

  @media (max-width: 768px) {
    height: 100%;
    max-height: 3000px;
    opacity: 0.3;
  }
}

.artist-tagline-container {
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: auto;
  padding: 2rem 1rem;
}

.tagline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.welcome-to-gigz {
  max-width: 900px;
  margin-top: 5.5em;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2em;
  }
}

.tagline-description {
  max-width: 1100px;
  margin-top: 2.5rem;
  padding: 0 1rem;
  font-family: 'Lab Grotesque', sans-serif;
  font-size: 2.5rem;
  line-height: 2;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.8;
  }
}

.split-section {
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.split-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.column {
  font-family: 'Lab Grotesque', sans-serif;

  h3 {
    font-size: 3.1rem;
    font-weight: 900;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 100;
    margin-bottom: 2rem;
    margin-right: 0;
    max-width: 30rem;   /* was width: 30rem; */
    width: 100%;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }
}

.column.left {
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
}

/* Keep the stagger, but make it tidy */
.column.right {
  margin-top: 50vh;      /* adjust 10–15rem to taste */
  text-align: right;      /* headings align to the right */
  
  @media (max-width: 768px) {
    margin-top: 0;
    text-align: center;
  }
}



.column.right p {
  margin-left: auto;      /* pushes the block to the right edge */
  text-align: right;       /* keep paragraph text left-aligned for readability */
  max-width: 30rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    text-align: center;
  }
}


.accent-text {
  color: #D4AF37;
}
</style>
