<template>
  <div class="artist-container">
    <img class="background-image" src="../assets/test.png" alt="Background" />
    <img class="middle-line" src="../assets/line16.png" alt="Middle Line" />

    <div class="artist-tagline-container">
      <div class="tagline-wrapper">
        <img class="welcome-to-gigz" src="../assets/welcome.png" alt="Welcome to Gigz" />
        <p class="tagline-description">
          A world where barriers vanish, and your music flows freely to audiences craving fresh, groundbreaking performances.
          With our platform, you're not just an artist; you're a trailblazer, charting new territories in an industry ripe for revolution.
        </p>
      </div>
    </div>

    <div class="split-section">
       <div class="split-row">
      <div class="column left">
      <h3>Tour Creation</h3>
      <p>Streamline gigs with our precision AI scheduling and planning tool</p>
     </div>
     <div class="column right">
      <h3>Analytics Dashboard</h3>
      <p>Navigate your live career trajectory with our unparalleled, AI-enhanced, comprehensive control panel</p>
       </div>
      </div>

         <div class="split-row">
        <div class="column left">
      <h3>Venue Selection</h3>
      <p>AI sifts through millions of data points to pinpoint your ideal performance venue</p>
          </div>
        <div class="column right">
      <h3>Innovative Placements</h3>
      <p>Secure exclusive spots on the globe's most prestigious stages</p>
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
  height: 100rem;
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
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  height: 100rem;;
  z-index: 1;
  pointer-events: none;
  opacity: 0.8;
}

.artist-tagline-container {
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: auto;
}

.tagline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.welcome-to-gigz {
  max-width: 600px;
  margin-top: 2.5em;
  width: 100%;
  height: auto;
}

.tagline-description {
  max-width: 700px;
  margin-top: 1.5rem;
  padding: 0 1rem;
  font-family: 'Lab Grotesque', sans-serif;
  font-size: 1.1rem;
  line-height: 3.6;
  color: white;
}

.split-section {
  max-width: 80rem; // reduce from full width if needed
  margin: 5rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.split-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem; // decrease this to bring columns closer
  align-items: start;
}


.column {
  font-family: 'Lab Grotesque', sans-serif;

  h3 {
    font-size: 2.6rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 100;
    margin-bottom: 2rem;
  }
}

.column.left {
  text-align: left;
}

.column.right {
  margin-top: 15rem;
  text-align: right;
}

.connecting-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}



.image-copy-right,
.image-copy-left {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 4.5em;
}

.copy-left-container,
.copy-right-container {
  display: block;
  padding: 0 3rem;
  margin-top: 10rem;
}

.copy-left-upper,
.copy-left-lower {
  font-family: 'Lab Grotesque', sans-serif;
  font-weight: normal;
  display: block;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;

  h5 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
}

.accent-text {
  color: #D4AF37;
}
</style>