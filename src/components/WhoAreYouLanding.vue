<template>
  <div class="who-wrapper">
    <!-- Background FX over your image -->
    <div class="fx fx-grid" aria-hidden="true"></div>
    <div class="fx fx-aurora a1" aria-hidden="true"></div>
    <div class="fx fx-aurora a2" aria-hidden="true"></div>
    <div class="fx fx-vignette" aria-hidden="true"></div>

    <div class="content">
      <h2 class="heading">Who Are You?</h2>

      <div class="roles-grid" role="group" aria-label="Choose your role">
        <!-- Artist -->
        <button
          class="role-card"
          :class="{ selected: selectedRole === 'artist' }"
          @click="selectRole('artist')"
          @keydown.enter.prevent="selectRole('artist')"
          @keydown.space.prevent="selectRole('artist')"
          :aria-pressed="selectedRole === 'artist'"
        >
          <span class="ring" aria-hidden="true"></span>
          <img src="../assets/artist.png" alt="" />
          <span class="label">Artist</span>
        </button>

        <!-- Manager -->
        <button
          class="role-card"
          :class="{ selected: selectedRole === 'manager' }"
          @click="selectRole('manager')"
          @keydown.enter.prevent="selectRole('manager')"
          @keydown.space.prevent="selectRole('manager')"
          :aria-pressed="selectedRole === 'manager'"
        >
          <span class="ring" aria-hidden="true"></span>
          <img src="../assets/manager.png" alt="" />
          <span class="label">Manager</span>
        </button>

        <!-- Supporter -->
        <button
          class="role-card"
          :class="{ selected: selectedRole === 'supporter' }"
          @click="selectRole('supporter')"
          @keydown.enter.prevent="selectRole('supporter')"
          @keydown.space.prevent="selectRole('supporter')"
          :aria-pressed="selectedRole === 'supporter'"
        >
          <span class="ring" aria-hidden="true"></span>
          <img src="../assets/supporter.png" alt="" />
          <span class="label">Fan</span>
        </button>
      </div>

      <button
        class="cta"
        :class="{ active: !!selectedRole }"
        :disabled="!selectedRole"
        @click="completeProfile"
      >
        <span>Complete Profile</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'WhoAreYouLanding',
  data() {
    return { selectedRole: null, isActive: false }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    return { route, router }
  },
  methods: {
    selectRole(role) {
      this.selectedRole = role
    },
    async completeProfile() {
      if (!this.selectedRole) return
      const firstName = this.route.query.firstName || ''
      const lastName = this.route.query.lastName || ''
      const email = this.route.query.email || ''
      if (!email || !firstName || !lastName) {
        alert('Missing info in query params.')
        return
      }
      const payload = {
        email,
        fields: { first_name2: firstName, last_name2: lastName, role: this.selectedRole }
      }
      try {
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // ⚠️ Move this token to an environment variable / server proxy in production.
            'Authorization': 'Bearer YOUR_API_KEY'
          },
          body: JSON.stringify(payload)
        })
        const result = await response.json()
        if (!response.ok) throw new Error(result.message || 'Failed to subscribe')
        this.isActive = true
        setTimeout(() => this.router.push('/'), 1200)
      } catch (e) {
        console.error(e)
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
  font-weight: 800; font-style: normal;
}

/* ===== Theme tokens ===== */
.who-wrapper{
  --neon:#c8ff7a;
  --neon-soft:rgba(200,255,122,.18);
  --violet:#8f7aff;
  --bg0:#000;          /* keep your image visible, but page is true black */
  --bg1:#07090c;
  --grid:rgba(255,255,255,.06);
  --stroke:rgba(255,255,255,.14);
  --glass1:rgba(255,255,255,.06);
  --glass2:rgba(255,255,255,.02);
  --text:#fff;
  --muted:#a9b0be;
}

/* ===== Background w/ your image ===== */
.who-wrapper{
  min-height:100vh;
  width:100%;
  position:relative;
  display:grid;
  place-items:center;
  color:var(--text);
  background:
    linear-gradient(180deg, var(--bg0), var(--bg1)),
    url('../assets/background.png') center/cover no-repeat fixed;
  overflow:hidden;
  padding: clamp(16px, 4vw, 40px);
}

/* FX layers */
.fx{ position:absolute; inset:0; pointer-events:none; }
.fx-grid{
  opacity:.14;
  background:
    repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 28px),
    repeating-linear-gradient(0deg,  var(--grid) 0 1px, transparent 1px 28px);
  animation:gridShift 28s linear infinite;
}
@keyframes gridShift{ to{ transform:translateY(-60px); } }

.fx-aurora{ filter:blur(28px); mix-blend-mode:screen; }
.fx-aurora.a1{ background: radial-gradient(520px 320px at 80% 10%, rgba(200,255,122,.22), transparent 60%); }
.fx-aurora.a2{ background: radial-gradient(560px 360px at 20% 90%, rgba(143,122,255,.20), transparent 60%); }

.fx-vignette{
  background: radial-gradient(1200px 700px at 50% 40%, transparent 60%, rgba(0,0,0,.55));
}

/* ===== Content ===== */
.content{
  position:relative; z-index:1;
  width:min(1100px, 100%);
  display:grid; gap: clamp(18px, 4vh, 28px);
  justify-items:center;
  text-align:center;
}

.heading{
  font-family:'Lab Grotesque', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-weight:800;
  letter-spacing:-.01em;
  font-size: clamp(28px, 4.8vw, 52px);
  margin:0;
  text-shadow: 0 6px 28px rgba(0,0,0,.6);
}

/* ===== Roles ===== */
.roles-grid{
  display:grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: clamp(16px, 4vw, 36px);
  width:100%;
  margin-top: clamp(8px, 2vh, 12px);
}

.role-card{
  position:relative;
  display:grid;
  place-items:center;
  gap:12px;
  padding:18px 16px 20px;
  border-radius:20px;
  background: linear-gradient(180deg, var(--glass1), var(--glass2));
  border:1px solid var(--stroke);
  backdrop-filter: blur(8px);
  cursor:pointer;
  transition: transform .16s ease, box-shadow .25s ease, border-color .2s ease;
  outline:none;
  color:var(--text);
}
.role-card .ring{
  position:absolute; inset:-2px;
  border-radius:inherit;
  background: radial-gradient(260px 160px at 50% -20%, var(--neon-soft), transparent 60%);
  opacity:.0; transition: opacity .2s ease;
}
.role-card img{
  width:160px; height:160px; object-fit:cover; border-radius:50%;
  box-shadow: 0 10px 28px rgba(0,0,0,.35);
}
.role-card .label{
  font-size:18px; font-weight:700; letter-spacing:.02em;
}
.role-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 20px 44px rgba(0,0,0,.45), 0 0 0 1px rgba(200,255,122,.25) inset;
  border-color: rgba(200,255,122,.5);
}
.role-card:hover .ring{ opacity:.5; }

/* Selected state */
.role-card.selected{
  border-color: rgba(200,255,122,.8);
  box-shadow: 0 0 0 2px rgba(200,255,122,.45), 0 24px 60px rgba(200,255,122,.18);
}
.role-card.selected .ring{ opacity:.8; }

/* ===== CTA ===== */
.cta{
  margin-top: clamp(6px, 1.6vh, 10px);
  padding: 14px 22px;
  border-radius:14px;
  border:1px solid rgba(200,255,122,.5);
  background: linear-gradient(180deg, rgba(200,255,122,.18), rgba(200,255,122,.08));
  color:#a6b0bb;
  font-weight:800; letter-spacing:.02em;
  width:min(320px, 90%); cursor:not-allowed;
  transition: transform .12s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
}
.cta.active{
  cursor:pointer; color:#0b0e13;
  background: linear-gradient(180deg, var(--neon), #a8ff4d);
  box-shadow: 0 18px 40px rgba(200,255,122,.22), 0 6px 14px rgba(0,0,0,.55);
}
.cta.active:hover{ transform: translateY(-1px); box-shadow: 0 24px 48px rgba(200,255,122,.28), 0 8px 18px rgba(0,0,0,.65); }
.cta:disabled{ opacity:.8; }

/* ===== Responsive ===== */
@media (max-width: 980px){
  .roles-grid{ grid-template-columns: 1fr; max-width: 440px; }
  .role-card img{ width:140px; height:140px; }
}
</style>
