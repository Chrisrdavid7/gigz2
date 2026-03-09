<template>
  <div class="apply rv" id="apply">
    <div class="apply-inner">
      <div class="apply-left">
        <div class="sec-label">Get Your Forecast</div>
        <h2>Find Out Where<br/>You Should<br/><span class="red">Play Next.</span></h2>
        <p>We'll run your demand analysis — the exact process we use before booking artists at our festivals — and send you city-by-city results. Free. Within 2 weeks.</p>
        <div class="checks">
          <div v-for="item in checklist" :key="item" class="chk">
            <div class="chk-dot">✓</div>{{ item }}
          </div>
        </div>
      </div>
      <div>
        <div v-if="!submitted" class="form-card">
          <h3>Get Your Demand Forecast</h3>
          <p class="form-sub">Four fields. We'll do the rest.</p>
          <div class="what-you-get">🎯 <strong>What you'll receive:</strong> A ranked list of cities where your music has the highest predicted demand — the same output our booking team uses to fill festival lineups.</div>
          <div class="form-row">
            <div><label class="form-label">Artist Name *</label><input v-model="form.name"  class="fi" type="text"  placeholder="Your artist name" /></div>
            <div><label class="form-label">Email *</label>        <input v-model="form.email" class="fi" type="email" placeholder="you@email.com" /></div>
          </div>
          <div class="form-row">
            <div>
              <label class="form-label">Genre *</label>
              <select v-model="form.genre" class="fi">
                <option value="" disabled>Select…</option>
                <option>Electronic / EDM</option><option>Bass Music / Dubstep</option>
                <option>House / Techno</option><option>Hip-Hop / Rap</option>
                <option>Rock / Alternative / Metal</option><option>Indie / Folk</option>
                <option>Pop</option><option>Other</option>
              </select>
            </div>
            <div><label class="form-label">Music Link *</label><input v-model="form.link" class="fi" type="url" placeholder="Spotify or SoundCloud" /></div>
          </div>
          <button class="btn-submit" :class="{ error: hasError }" @click="submit">{{ btnLabel }}</button>
          <p class="form-foot">Questions? <a href="mailto:support@playgigz.com">support@playgigz.com</a> </p>
        </div>
        <div v-else class="form-card success-card">
          <span class="si">📊</span>
          <h3>Forecast In Progress.</h3>
          <p>We're running your demand analysis now.<br/>Your city scores will be in your inbox<br/>within 2 weeks.<br/><br/>Watch for it.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const submitted = ref(false)
const hasError  = ref(false)
const btnLabel  = ref('Run My Demand Forecast →')
const form = reactive({ name:'', email:'', genre:'', link:'' })
const checklist = [
  'The same system behind 10 sold-out festivals',
  'City demand scores for your top markets',
  'Direct visibility to our festival booking team',
  '100% free · results within 2 weeks',
]
function submit() {
  if (!form.name || !form.email || !form.genre || !form.link) {
    btnLabel.value = '← Fill in all 4 fields'
    hasError.value = true
    setTimeout(() => { btnLabel.value = 'Run My Demand Forecast →'; hasError.value = false }, 2500)
    return
  }
  submitted.value = true
}
</script>
<style scoped>
.apply{padding:52px 20px;background:var(--dark);border-top:1px solid var(--border)}
.apply-inner{max-width:960px;margin:0 auto;display:flex;flex-direction:column;gap:40px}
.apply-left h2{font-family:var(--ft);font-size:clamp(1.9rem,7vw,3.2rem);font-weight:900;letter-spacing:-.035em;line-height:.95;margin-bottom:14px;margin-top:6px}
.apply-left>p{font-size:.9rem;color:var(--muted2);line-height:1.74;margin-bottom:22px}
.checks{display:flex;flex-direction:column;gap:10px}
.chk{display:flex;align-items:center;gap:12px;font-size:.84rem;color:var(--muted2)}
.chk-dot{width:20px;height:20px;border-radius:50%;background:rgba(227,24,55,.1);border:1px solid rgba(227,24,55,.28);display:flex;align-items:center;justify-content:center;font-size:.65rem;color:var(--red);flex-shrink:0}
.form-card{background:var(--card);border:1px solid var(--border2);border-radius:12px;padding:24px}
.form-card h3{font-family:var(--ft);font-size:1.25rem;font-weight:800;letter-spacing:-.025em;margin-bottom:4px}
.form-sub{font-size:.76rem;color:var(--muted);margin-bottom:14px;line-height:1.55}
.what-you-get{font-size:.78rem;color:var(--muted2);background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:6px;padding:11px 13px;margin-bottom:16px;line-height:1.65}
.what-you-get strong{color:#fff}
.form-row{display:flex;flex-direction:column;gap:10px;margin-bottom:10px}
.form-label{display:block;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:5px}
.fi{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:5px;padding:13px 14px;font-family:var(--f);font-size:16px;color:#fff;outline:none;transition:border-color .2s,background .2s;appearance:none;-webkit-appearance:none}
.fi::placeholder{color:rgba(255,255,255,.18)}
.fi:focus{border-color:rgba(227,24,55,.42);background:rgba(227,24,55,.04)}
.btn-submit{width:100%;background:var(--red);color:#fff;border:none;border-radius:6px;padding:16px;font-family:var(--f);font-size:.9rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;margin-top:6px;transition:background .2s,transform .15s,box-shadow .2s;-webkit-appearance:none}
.btn-submit:hover{background:var(--red2);transform:translateY(-1px);box-shadow:0 8px 28px rgba(227,24,55,.32)}
.btn-submit.error{background:rgba(227,24,55,.35)}
.form-foot{font-size:.68rem;color:var(--muted);text-align:center;margin-top:10px}
.form-foot a{color:var(--red)}
.success-card{text-align:center;padding:44px 16px}
.si{font-size:3rem;margin-bottom:14px;display:block}
.success-card h3{font-family:var(--ft);font-size:1.4rem;font-weight:900;color:var(--red);margin-bottom:10px}
.success-card p{font-size:.84rem;color:var(--muted);line-height:1.7}
@media(min-width:768px){
  .apply{padding:80px 44px}
  .apply-inner{display:grid;grid-template-columns:1fr 1fr;gap:72px;flex-direction:unset}
  .form-row{flex-direction:row}
  .fi{font-size:.85rem;padding:11px 14px}
  .form-card{padding:32px}
  .form-card h3{font-size:1.35rem}
}
</style>
