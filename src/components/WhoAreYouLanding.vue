<template>
  <div class="landing-container">
    <div class="content-wrapper">
      <h2 class="heading">Who Are You?</h2>
      <div class="role-container">
        <div
          class="role"
          :class="{ selected: selectedRole === 'artist' }"
          @click="selectRole('artist')"
        >
          <img src="../assets/artist.png" alt="Artist" />
          <p>Artist</p>
        </div>
        <div
          class="role"
          :class="{ selected: selectedRole === 'manager' }"
          @click="selectRole('manager')"
        >
          <img src="../assets/manager.png" alt="Manager" />
          <p>Manager</p>
        </div>
        <div
          class="role"
          :class="{ selected: selectedRole === 'supporter' }"
          @click="selectRole('supporter')"
        >
          <img src="../assets/supporter.png" alt="Supporter" />
          <p>Supporter</p>
        </div>
      </div>
      <button
        :class="{ active: isActive }"
        :disabled="!selectedRole"
        @click="completeProfile"
      >
        Complete Profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoAreYouLanding',
  data() {
    return {
      selectedRole: null,
      isActive: false,
    };
  },
  methods: {
    selectRole(role) {
      this.selectedRole = role;
      console.log(`Role selected: ${role}`);
    },
    completeProfile() {
      if (!this.selectedRole) {
        alert('Please select a role before continuing.');
        return;
      }

      this.isActive = true;
      console.log(`Completing profile for ${this.selectedRole}...`);

      // 3-second delay before redirecting
      setTimeout(() => {
        this.$router.push('/');
      }, 1500);
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Lab Grotesque';
  src: url('/media/fonts/LabGrotesque/LabGrotesqueBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

.landing-container {
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0 20px;
  box-sizing: border-box;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  font-family: 'Lab Grotesque', sans-serif;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 4%;
  color: #FFF;
  margin-top: 8vh;
  margin-bottom: 3vh;
  text-align: center;
}

.role-container {
  margin-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30vh;
  margin-bottom: auto;
}

.role {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.role.selected {
  transform: scale(1.1);
  border: 0.5px solid #35BCBC;
  border-radius: 50%;
  padding: 5px;
}

.role img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
}

.role p {
  font-size: 24px;
  margin-top: 10px;
  color: #FFF;
  text-align: center;
}

.role:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

button {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 12px 20px;
  font-size: 16px;
  width: 200px;
  background-color: #000000;
  border: 1px solid #c0961a;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover,
button.active {
  background-color: #c0961a;
  color: #000000;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #1a1a1a;
  border-color: #555;
  color: #999;
}

/* --------- Mobile Styles --------- */
@media (max-width: 768px) {
  .heading {
    font-size: 24px;
    margin-top: 4vh;
    margin-bottom: 2vh;
  }

  .role-container {
    flex-direction: column;
    gap: 30px;
    margin-top: 4vh;
  }

  .role img {
    width: 120px;
    height: 120px;
  }

  .role p {
    font-size: 18px;
  }

  button {
    width: 90%;
    max-width: 300px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 16px;
  }

  .content-wrapper {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }
}
</style>
