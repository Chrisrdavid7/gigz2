<template>
  <div class="header-container">
    <div class="header-content">
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/WhiteGigzLogo.png" alt="Gigz Logo" />
        </router-link>
      </div>
      <div class="action-container">
        <button @click="openSignUpModal" class="sign-up-button">
          <span class="button-text">Join Waitlist</span>
          <span class="button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path fill="black" d="M13 5l7 7-7 7v-4h-8v-6h8V5z"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GigzHeader',
  methods: {
    openSignUpModal() {
      this.$router.push('/signup'); 
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

.header-container {
  font-family: 'Lab Grotesque', sans-serif;
  font-weight: bold;
  background: transparent;
  backdrop-filter: none;

  display: flex;
  justify-content: center;
  position: absolute;
  height: 80px;
  z-index: 1000;
  width: 100%;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1276px;
  width: 80%;
}

.logo-container {
  margin: 0;
  max-width: 60px;
  img {
    max-width: 100%;
    height: auto;
  }
}

.action-container {
  display: flex;
  justify-content: flex-end;
}

.sign-up-button {
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 16px 10px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  gap: 12px;
  font-family: 'Lab Grotesque', sans-serif;

  .button-text {
    z-index: 2;
  }

  .button-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    z-index: 2;
  }

  svg {
    width: 14px;
    height: 14px;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
    width: 100%;
  }

  .logo-container {
    max-width: 50px;
  }

  .sign-up-button {
    font-size: 12px;
    padding: 8px 14px 8px 16px;

    .button-icon {
      width: 26px;
      height: 26px;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
