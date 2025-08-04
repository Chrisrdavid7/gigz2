<template>
  <!-- ✨ Add “on-press” class whenever the current route starts with /press -->
  <div :class="['header-container', { 'on-press': isPressPage }]">
    <div class="header-content">
      <!-- ===== Logo ===== -->
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/WhiteGigzLogo.png" alt="Gigz Logo" />
        </router-link>
      </div>

      <!-- ===== Actions ===== -->
      <div class="action-container">
        <!-- Plain Press link -->
        <router-link to="/press" class="press-link">Press</router-link>

        <!-- Join-Waitlist CTA -->
        <button @click="openSignUpModal" class="sign-up-button">
          <span class="button-text">Join Waitlist</span>
          <span class="button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path fill="black" d="M13 5l7 7-7 7v-4h-8v-6h8V5z" />
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
  computed: {
    // true when URL begins with /press (covers /press, /press/contact, etc.)
    isPressPage () {
      return this.$route.path.startsWith('/press')
    }
  },
  methods: {
    openSignUpModal () {
      this.$router.push('/signup')
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

/* ===== Baseline header ===== */
.header-container {
  font-family: 'Lab Grotesque', sans-serif;
  font-weight: bold;
  background: transparent;             /* default (home, etc.) */
  display: flex;
  justify-content: center;
  position: absolute;
  height: 80px;
  z-index: 1000;
  width: 100%;
  align-items: center;
  transition: background 0.3s ease;    /* smooth tint switch */
}

/* ===== Black tint when on /press ===== */
.header-container.on-press {
  background: #000;
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
  max-width: 60px;
  img {
    max-width: 100%;
    height: auto;
  }
}

.action-container {
  display: flex;
  gap: 16px;
}

/* Press link */
.press-link {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'Lab Grotesque', sans-serif;
}

/* Join Waitlist button */
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

  .button-text { z-index: 2; }

  .button-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    z-index: 2;

    svg { width: 14px; height: 14px; }
  }
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .header-content     { padding: 0 1rem; width: 100%; }
  .logo-container     { max-width: 50px; }
  .press-link         { font-size: 12px; }

  .sign-up-button {
    font-size: 12px;
    padding: 8px 14px 8px 16px;

    .button-icon {
      width: 26px;
      height: 26px;
    }
    svg { width: 12px; height: 12px; }
  }
}
</style>
