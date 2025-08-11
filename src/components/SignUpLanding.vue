<template>
  <div class="signup-split">
    <!-- Left visual -->
    <aside class="visual">
      <img src="../assets/landingImage.png" alt="Artist" class="visual-img" />
      <div class="visual-gradient" aria-hidden="true"></div>
    </aside>

    <!-- Right / Form -->
    <main class="panel">
      <!-- background FX -->
      <div class="fx fx-grid" aria-hidden="true"></div>
      <div class="fx fx-aurora a1" aria-hidden="true"></div>
      <div class="fx fx-aurora a2" aria-hidden="true"></div>

      <router-link to="/" class="back">← Back</router-link>

      <header class="hero">
        <h1>Sign up</h1>
        <p>Join the Gigz waitlist — where AI meets live music.</p>
      </header>

      <form class="form glass" @submit.prevent="onSubmit">
        <div class="fields">
          <label class="field">
            <span class="label">First Name</span>
            <input id="first-name" v-model="firstName" type="text" placeholder="First Name" required />
          </label>

          <label class="field">
            <span class="label">Last Name</span>
            <input id="last-name" v-model="lastName" type="text" placeholder="Last Name" required />
          </label>

          <label class="field">
            <span class="label">Email</span>
            <input id="email" v-model="email" type="email" placeholder="you@domain.com" required />
          </label>
        </div>

        <label class="agree">
          <input type="checkbox" v-model="agreeTerms" />
          <span class="box" aria-hidden="true"></span>
          <span class="agree-text">I have read and agree to the Terms & Conditions.</span>
        </label>

        <button class="cta" type="submit"><span>Join Waitlist</span></button>
      </form>

      <footer class="microcopy">
        <span>We respect your privacy. Unsubscribe anytime.</span>
      </footer>
    </main>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SignUpLanding',
  setup() {
    const router = useRouter()
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      agreeTerms: false
    })

    const onSubmit = () => {
      if (!state.agreeTerms) {
        alert('You must agree to the terms and conditions.')
        return
      }
      router.push({
        path: '/whoareyou',
        query: {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email
        }
      })
    }

    return { ...toRefs(state), onSubmit }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Quicksand';
  src: url('/media/fonts/Quicksand/Quicksand_Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

/* ===== Dark theme tokens (true black) ===== */
:root{
  --bg0:#000000;            /* top */
  --bg1:#07090c;            /* bottom */
  --grid:rgba(255,255,255,.06);
  --muted:#a9b0be;
  --text:#e9edf5;

  --stroke:rgba(255,255,255,.14);
  --glass-dark-1:rgba(255,255,255,.04);
  --glass-dark-2:rgba(255,255,255,.015);

  --neon:#c8ff7a;
  --violet:#8f7aff;
}

/* ===== Split layout ===== */
.signup-split{
  display:grid;
  grid-template-columns:1fr 1fr;
  min-height:100vh;
  background: linear-gradient(180deg, var(--bg0), var(--bg1)); /* black shell */
  color:var(--text);
}

/* Left image */
.visual{ position:relative; overflow:hidden; }
.visual-img{ width:100%; height:100%; object-fit:cover; filter:contrast(1.05) saturate(.85); }
.visual-gradient{
  position:absolute; inset:0; pointer-events:none; mix-blend-mode:screen;
  background:
    radial-gradient(600px 400px at 80% 20%, rgba(200,255,122,.12), transparent 60%),
    radial-gradient(800px 500px at 10% 90%, rgba(143,122,255,.14), transparent 60%);
}

/* Right panel */
.panel{
  position:relative;
  padding:clamp(24px,6vw,56px);
  display:grid;
  grid-template-rows:auto auto 1fr auto;
  align-content:start;
  overflow:clip;
}

/* Background FX (subtle, for black) */
.fx{ position:absolute; inset:0; pointer-events:none; }
.fx-grid{
  opacity:.16;
  background:
    repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 28px),
    repeating-linear-gradient(0deg,  var(--grid) 0 1px, transparent 1px 28px);
  animation:gridShift 28s linear infinite;
}
@keyframes gridShift{ to{ transform:translateY(-60px); } }

.fx-aurora{ filter:blur(28px); mix-blend-mode:screen; }
.fx-aurora.a1{ background: radial-gradient(480px 280px at 70% 0%, rgba(200,255,122,.22), transparent 60%); }
.fx-aurora.a2{ background: radial-gradient(520px 320px at 85% 100%, rgba(143,122,255,.20), transparent 60%); }

/* Back + heading */
.back{ position:relative; z-index:1; color:var(--muted); text-decoration:none; font-size:14px; }
.back:hover{ color:#fff; }
.hero{ position:relative; z-index:1; margin-top:8px; }
.hero h1{
  font-family:'Quicksand', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-weight:800; letter-spacing:-.02em;
  font-size:clamp(32px,5vw,56px);
  margin:8px 0 6px;
}
.hero p{ color:var(--muted); margin:0; }

/* Glass form card (dark) */
.form{
  position:relative; z-index:1;
  margin-top:clamp(18px,3.5vh,28px);
  background: linear-gradient(180deg, var(--glass-dark-1), var(--glass-dark-2));
  border:1px solid var(--stroke);
  border-radius:18px;
  padding:clamp(18px,3vw,28px);
  backdrop-filter: blur(8px);
  box-shadow:0 12px 36px rgba(0,0,0,.45);
}

.fields{ display:grid; gap:16px; }

/* Fields (dark inputs) */
.field{ display:grid; gap:8px; }
.field .label{
  font-size:13px; color:var(--muted);
  letter-spacing:.04em; text-transform:uppercase;
}
.field input{
  width:100%;
  padding:14px 18px;
  font-size:16px;
  color:#fff;
  background:#0a0d12;
  border-radius:14px;
  outline:none;
  border:1px solid rgba(255,255,255,.18);
  transition:border-color .2s ease, box-shadow .2s ease, transform .08s ease;
}
.field input::placeholder{ color:rgba(255,255,255,.38); }
.field input:focus{
  border-color: rgba(200,255,122,.55);
  box-shadow: 0 0 0 3px rgba(200,255,122,.15), 0 8px 24px rgba(200,255,122,.10);
}

/* Checkbox */
.agree{
  display:grid; grid-template-columns:22px auto;
  align-items:center; gap:10px; margin:8px 0 6px;
  color:var(--muted); font-size:14px; position:relative;
}
.agree input{ opacity:0; position:absolute; width:22px; height:22px; margin:0; }
.agree .box{
  width:22px; height:22px; border-radius:6px;
  background:#0c1116; border:1px solid rgba(255,255,255,.25);
  box-shadow: inset 0 0 0 2px transparent;
  transition: box-shadow .2s ease, border-color .2s ease, background .2s ease;
}
.agree input:checked + .box{
  border-color: rgba(200,255,122,.7);
  box-shadow: inset 0 0 0 12px var(--neon);
  background: var(--neon);
}
.agree-text{ user-select:none; }

/* CTA (neon) */
.cta{
  margin-top:14px; width:100%; padding:14px 18px;
  border-radius:14px; border:1px solid rgba(200,255,122,.5);
  color:#0b0e13; font-weight:800; letter-spacing:.02em; cursor:pointer;
  background: linear-gradient(180deg, var(--neon), #a8ff4d);
  box-shadow: 0 18px 40px rgba(200,255,122,.18), 0 6px 14px rgba(0,0,0,.6);
  transition: transform .12s ease, box-shadow .2s ease, filter .2s ease;
}
.cta:hover{ transform:translateY(-1px); box-shadow:0 24px 48px rgba(200,255,122,.26), 0 8px 18px rgba(0,0,0,.65); }
.cta:active{ transform:translateY(0); filter:saturate(1.1); }

/* Bottom microcopy */
.microcopy{ color:var(--muted); font-size:12px; margin-top:16px; opacity:.9; }

/* Responsive */
@media (max-width:980px){
  .signup-split{ grid-template-columns:1fr; }
  .visual{ display:none; }
  .panel{ min-height:100vh; }
}

/* Ensure entire document behind is black (prevents white flash) */
:global(html), :global(body){ background:#000; }
/* ——— make all the form text white ——— */
.hero h1,
.hero p,
.back,
.field .label,
.agree-text,
.microcopy {
  color: #fff !important;
}

/* inputs */
.field input {
  color: #fff !important;
}
.field input::placeholder {
  color: rgba(255,255,255,.72) !important;
}


/* button label white (was dark) */
.cta {
  color: #fff !important;
  text-shadow: 0 0 8px rgba(255,255,255,.18);
  opacity: 1 !important; /* in case something was dimming it */
}
/* Make the whole row clickable */
.agree { cursor: pointer; }

/* Restore checked visuals (beats earlier !important) */
.agree input:checked + .box {
  background: var(--neon) !important;
  border-color: rgba(200,255,122,.9) !important;
  box-shadow: inset 0 0 0 2px rgba(0,0,0,.15), 0 0 24px rgba(200,255,122,.28);
}

/* Add a tick so it’s obvious */
.agree input:checked + .box::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: 2px solid #0b0e13;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg);
}

/* Focus ring for keyboard users */
.agree input:focus-visible + .box {
  outline: 2px solid var(--neon);
  outline-offset: 2px;
}

/* Keep the default (unchecked) box dark but not overriding checked */
.agree .box {
  background: #0a0d12;
  border: 1px solid rgba(255,255,255,.45);
}

</style>
