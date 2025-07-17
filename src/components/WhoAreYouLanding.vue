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
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'WhoAreYouLanding',
  data() {
    return {
      selectedRole: null,
      isActive: false
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    return { route, router }
  },
  methods: {
    selectRole(role) {
      this.selectedRole = role
      console.log(`Role selected: ${role}`)
    },

    async completeProfile() {
  if (!this.selectedRole) {
    alert('Please select a role before continuing.')
    return
  }

  const firstName = this.route.query.firstName || ''
  const lastName = this.route.query.lastName || ''
  const email = this.route.query.email || ''

  if (!email || !firstName || !lastName) {
    alert('Missing info in query params.')
    return
  }

  const payload = {
    email: email,
    fields: {
      first_name2: firstName,
      last_name2: lastName,
      role: this.selectedRole
    }
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTQ5ZjIzMzA3MjFhOTE0N2MyNWQ3MTYyZjFhODhhZWJiODU3NTYwZTQxNjM5MzM0YzQwOTlhZmU1ZGJkMmU3M2FlOGIzZmNmMTQzZWY4MDEiLCJpYXQiOjE3NTI3MzUwMTguMzg5NjE3LCJuYmYiOjE3NTI3MzUwMTguMzg5NjIsImV4cCI6NDkwODQwODYxOC4zODQ3NjIsInN1YiI6IjE2ODUwMzQiLCJzY29wZXMiOltdfQ.ISdFP6gdqCP4ClVYIQMNSJXnCgHm7i0ddQgp7fXv8EbV_BUo2Xsh_h-C2kvsGajc1tGV9SFS7MHybTOD4KzHh86HzTAswRlmcVVadNZTOQ1rq-rW1GNxoj7vrMAWDdr4seC5WySJQrRR5S6M7Lg8c_D_-zhSJASHqJhxIl1YScew6cK0LesUIlPOHK1-doYwbx0QaD_nIBxjut5279dcCYKbnG0Dy5MhOGsp0z0OpNElfyZbR-eNc8RFiN0gOHCJEa2HwtbiyzT3L9rAjOQVykm3rovCb6Q47pWEpXH4RTVQIeAFHZuGOietMp0A4DT2Pg81tVD5JEzFFMRbzOTYcBmEufH7CDM09wAS8fKV8YmRVWThOQuT9cnZsyur6lCLIpPW1YkmyPwIJfPZFwrLoJ3v-EQfOY8EqwTLeoL2enpZdKpgQG0aZ4ZgkY4knUDqGBtQbr2PmmEKAXpsx91jr8MEF-etvXoxxHG2H57ISRASeajlMSR3ob80sQ-Vd7WSormk-bYeZTgEjDwGm7yUXpsnZEkXyBUEfYECOUu5eQNtDNetZ--GSjPFZER2VpiRev3KRH7XaBbvSaOy9UN_StsCuDv2z9kC_cLAwHxnVoZFqgzHDQKi8gHgQ8KY4_mAt6KSSYZcy4ifdGmrIzn9dZRjLb9T5pYeuZfF6KYtfSY' // use your real API key
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json()
    if (!response.ok) {
      console.error(result)
      throw new Error(result.message || 'Failed to subscribe')
    }

    console.log('Subscribed:', result)
    this.isActive = true
    setTimeout(() => this.router.push('/'), 1500)
  } catch (err) {
    console.error('Error subscribing:', err)
    alert('Something went wrong. Please try again later.')
  }
}

  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Lab Grotesque';
  src: url('/media/fonts/LabGrotesque/LabGrotesqueBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

.landing-container {
  background: #000;
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
  color: #fff;
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
  color: #fff;
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
  background-color: #000;
  border: 1px solid #c0961a;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover,
button.active {
  background-color: #c0961a;
  color: #000;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #1a1a1a;
  border-color: #555;
  color: #999;
}

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
