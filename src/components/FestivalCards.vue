<template>
  <div class="cards-container">
    <div class="festival-card" v-for="(img, index) in images" :key="index">
      <img class="card-img" :src="img" alt="Festival Card" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FestivalCards',
  data() {
    return {
      images: [
        require('../assets/texas.png'),
        require('../assets/emberShores.png'),
        require('../assets/rollingLoud.png'),
        require('../assets/paradiseBlue.png'),
        require('../assets/ubbiDubbi.png'),
        require('../assets/freaky.png'),
        require('../assets/Sowhatmusic.png'),
        require('../assets/lightsNights.png')
      ]
    }
  }
}
</script>

<style lang="scss">
.cards-container {
  background: #000000;
  margin: 50px auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-width: 100%;
  padding: 10px 10px;
  gap: 75px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #888 #000;

  @media (max-width: 768px) {
    padding: 10px 15px;
    gap: 20px;
  }
}

.festival-card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 75px;
    height: 75px;
  }
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Scrollbar styling */
.cards-container::-webkit-scrollbar {
  height: 6px;
}

.cards-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 3px;
}
</style>
