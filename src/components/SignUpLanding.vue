<template>
  <div class="landing-container">
    <div class="photo-section">
      <img src="../assets/landingImage.png" alt="Landing Photo" class="full-width-image" />
    </div>

    <div class="signup-section">
      <div class="top-transition">
        <img src="../assets/topPurple.png" alt="Decorative Transition" class="top-trans" />
      </div>

      <router-link to="/" class="back-button">← Back</router-link>

      <h1 class="signup-header">Sign up</h1>

      <div class="names-container">
        <div class="name-field">
          <label for="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            class="first-name"
            placeholder="First Name"
            v-model="firstName"
            required
          />
        </div>

        <div class="name-field">
          <label for="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            class="last-name"
            placeholder="Last Name"
            v-model="lastName"
            required
          />
        </div>

        <div class="name-field">
          <label for="email">Email ID</label>
          <input
            id="email"
            type="email"
            class="email"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>
      </div>

      <div class="checkbox-container">
        <label class="custom-checkbox">
          <input type="checkbox" id="terms" v-model="agreeTerms" />
          <span class="checkmark"></span>
          I hereby confirm that I have read all the Terms & Conditions carefully and I agree with the same.
        </label>
      </div>

      <button type="submit" @click="onSubmit">Sign Up</button>

      <div class="bottom-transition">
        <img src="../assets/bottomPurple.png" alt="Decorative Transition" class="bottom-trans" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SignUpLanding',
  setup() {
    const router = useRouter();
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      agreeTerms: false
    });

    const onSubmit = () => {
      if (!state.agreeTerms) {
        alert('You must agree to the terms and conditions.');
        return;
      }

      // Navigate to next page with data passed as query params
      router.push({
        path: '/whoareyou',
        query: {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email
        }
      });
    };

    return { ...toRefs(state), onSubmit };
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Quicksand';
  src: url('/media/fonts/Quicksand/Quicksand_Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.landing-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.photo-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-width-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signup-section {
  background-color: #000;
  width: 50%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.signup-header {
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-size: 45px;
  font-weight: 700;
  margin: 20px 0 30px;
  text-align: center;
  z-index: 1;
}

.names-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
}

.name-field {
  flex: 1;
  min-width: 180px;
}

input {
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #000;
  border-radius: 55px;
  border: 1px solid #d4af37;
  box-sizing: border-box;
}

.email {
  border-color: #35bcbc;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.checkbox-container {
  margin: 20px 0;
  max-width: 680px;
  text-align: left;
}

.custom-checkbox {
  position: relative;
  padding-left: 35px;
  color: #fff;
  font-size: 14px;
}

.custom-checkbox input {
  opacity: 0;
  position: absolute;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #000;
  border: 2px solid #7a0bc0;
  border-radius: 4px;
}

.custom-checkbox input:checked ~ .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

button {
  background: linear-gradient(to bottom right, #7a0bc0 18%, #fa58b6 90%);
  color: #fff;
  font-size: 19px;
  padding: 12px 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  max-width: 300px;
}

.back-button {
  position: absolute;
  top: 12px;
  left: 20px;
  color: #fcf8fb;
  font-size: 14px;
  text-decoration: none;
}

.top-transition,
.bottom-transition {
  width: 100%;
  position: absolute;
  left: 0;
}

.top-transition {
  top: 0;
}
.bottom-transition {
  bottom: 0;
}

.top-trans,
.bottom-trans {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .photo-section {
    display: none;
  }

  .signup-section {
    width: 100%;
    padding: 40px 20px;
  }

  .names-container {
    flex-direction: column;
    align-items: center;
  }

  .name-field {
    width: 100%;
    max-width: 300px;
  }

  button {
    width: 100%;
    max-width: 300px;
  }

  .signup-header {
    font-size: 32px;
    margin-top: 3rem;
  }
}
</style>
