<template>
  <footer class="ai-footer">
    <!-- Background effects (pure CSS, lightweight) -->
    <div class="fx fx-grid" aria-hidden="true"></div>
    <div class="fx fx-glow fx-glow-1" aria-hidden="true"></div>
    <div class="fx fx-glow fx-glow-2" aria-hidden="true"></div>
    <div class="fx fx-divider" aria-hidden="true"></div>

    <div class="footer-shell">
      <!-- Left -->
      <div class="footer-left glass">
        <div class="footer-logo">
          <router-link to="/">
          <img src="../assets/WhiteGigzLogo.png" alt="Gigz Logo" />
        </router-link>
        </div>
        <p class="footer-tagline">
          A world where barriers vanish, and your music thrives.
        </p>
        <p class="footer-copy">&copy; 2025 Gigz Inc</p>
        <p class="footer-disclaimer">
          The festivals featured on this site are produced by companies we collaborate with.
          Gigz is not directly affiliated with or endorsed by any specific festival unless otherwise stated.
        </p>
      </div>

      <!-- Right -->
      <div class="footer-right glass">
        <div class="follow-wrap">
          <h4 class="follow-title">FOLLOW</h4>
          <div class="footer-socials">
            <a href="https://www.facebook.com/playgigz" aria-label="Facebook" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/playgigz" aria-label="Twitter" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/playgigz/" aria-label="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@playgigz" aria-label="TikTok" class="social-icon"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div class="footer-buttons">
          <router-link to="/signup" class="holo-btn holo-primary">Join Waitlist</router-link>
          <router-link to="/press" class="holo-btn">Press</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'FooterComponent' }
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* ===== Theme tokens & container ===== */
.ai-footer{
  /* slightly darker base for better blend */
  --bg0:#030305;
  --bg1:#0a0c11;

  /* neon + accents */
  --neon:#c8ff7a;                   /* cyber-lime */
  --neon-soft:rgba(200,255,122,.18);
  --accent:#d4af37;                 /* gold */

  /* glass & strokes */
  --glass:rgba(255,255,255,.05);
  --stroke:rgba(255,255,255,.12);
  --muted:#a9b0be;

  --top-blend:64px;                 /* height of the top dark fade */

  position: relative;
  isolation: isolate;
  color:#fff;

  /* top darkening layer first, then glows, then base gradient */
  background:
    linear-gradient(180deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,0) var(--top-blend)),
    radial-gradient(1200px 500px at 10% -20%, rgba(137,115,255,.12), transparent),
    radial-gradient(1000px 600px at 95% 120%, rgba(200,255,122,.10), transparent),
    linear-gradient(180deg, var(--bg0), var(--bg1));

  padding: 54px 22px 64px;
  overflow: clip;
}

/* ===== Background FX (single source) ===== */
.fx{ position:absolute; inset:0; pointer-events:none; }

.fx-grid{
  opacity:.16;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 28px),
    repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0 1px, transparent 1px 28px);
  animation: gridShift 28s linear infinite;
}
@keyframes gridShift { to { transform: translateY(-60px); } }

.fx-glow{ mix-blend-mode:screen; filter: blur(28px); }
.fx-glow-1{ background: radial-gradient(400px 220px at 20% 30%, var(--neon-soft), transparent); }
.fx-glow-2{ background: radial-gradient(460px 240px at 80% 80%, rgba(137,115,255,.12), transparent); }

.fx-divider{
  height:1px; inset:auto 0 0 0;
  background: linear-gradient(90deg, transparent, rgba(200,255,122,.35), transparent);
  box-shadow: 0 -1px 0 rgba(255,255,255,.06) inset;
}

/* ===== Layout ===== */
.footer-shell{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 28px;
  position: relative;
  z-index: 1;
}

.glass{
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  border:1px solid var(--stroke);
  border-radius:16px;
  padding:22px;
  backdrop-filter: blur(6px);
}

/* Left block */
.footer-logo img{ width:120px; height:auto; display:block; margin-bottom:14px; }
.footer-tagline{ color:#e9edf5; max-width:360px; line-height:1.6; margin:8px 0 12px; }
.footer-copy{ color:#a3a7b3; font-size:.82rem; margin:0 0 6px; }
.footer-disclaimer{ color:#8b90a0; font-size:.75rem; line-height:1.45; max-width:420px; margin:8px 0 0; }

/* Right block */
.footer-right{ display:flex; flex-direction:column; align-items:flex-end; text-align:right; gap:16px; }
.follow-title{ font-size:.8rem; letter-spacing:.28em; color:var(--muted); margin:0 0 6px; }
.footer-socials{ display:flex; gap:12px; }

/* Social chips */
.social-icon{
  --ring: rgba(200,255,122,.35);
  width:42px; height:42px; border-radius:999px;
  display:grid; place-items:center;
  border:1px solid var(--stroke);
  background: radial-gradient(220px 220px at 30% 20%, rgba(255,255,255,.06), rgba(255,255,255,.02));
  position:relative; overflow:hidden;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.social-icon i{ font-size:16px; }
.social-icon::after{
  content:""; position:absolute; inset:-120% -120% auto -120%;
  height:200%; background:linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
  transform:rotate(25deg); opacity:0;
}
.social-icon:hover{
  transform: translateY(-3px);
  border-color: var(--ring);
  box-shadow: 0 0 22px var(--neon-soft), inset 0 0 12px rgba(255,255,255,.04);
}
.social-icon:hover::after{ animation: shine 800ms linear forwards; opacity:1; }
@keyframes shine { to { transform: translateX(220%) rotate(25deg); opacity:0; } }

/* Buttons */
.footer-buttons{ display:flex; gap:12px; justify-content:flex-end; }

.holo-btn{
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  padding:10px 16px; border-radius:12px; text-decoration:none; text-transform:uppercase;
  font-weight:700; font-size:.82rem; letter-spacing:.06em; color:#e9edf5;
  border:1px solid rgba(255,255,255,.22);
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.holo-btn::before{
  content:""; position:absolute; inset:0; border-radius:12px;
  background: conic-gradient(from 120deg, rgba(200,255,122,.0), rgba(200,255,122,.35), rgba(137,115,255,.25), rgba(200,255,122,.0));
  filter: blur(12px); opacity:.25; transition: opacity .25s ease;
}
.holo-btn:hover{
  transform: translateY(-2px);
  border-color: rgba(200,255,122,.45);
  box-shadow: 0 10px 24px rgba(200,255,122,.12), 0 4px 10px rgba(0,0,0,.4);
}
.holo-btn:hover::before{ opacity:.5; }

/* Neon primary (Join Waitlist) */
.footer-buttons .holo-primary{
  background: linear-gradient(180deg, var(--neon), #a8ff4d) !important;
  color: #0b0e13 !important;
  border-color: rgba(200,255,122,.65) !important;
  box-shadow: 0 8px 22px rgba(200,255,122,.18);
}
.footer-buttons .holo-primary:hover{
  box-shadow: 0 14px 30px rgba(200,255,122,.28), 0 6px 14px rgba(0,0,0,.5);
  transform: translateY(-2px);
}
.footer-buttons .holo-primary:focus-visible{
  outline: none;
  box-shadow: 0 0 0 3px rgba(200,255,122,.45);
}

/* ===== Responsive ===== */
@media (max-width: 880px){
  .footer-shell{ grid-template-columns: 1fr; }
  .footer-right{ align-items:center; text-align:center; }
  .footer-buttons{ justify-content:center; flex-wrap:wrap; }
  .glass{ padding:18px; }
}

/* ===== Reduced motion ===== */
@media (prefers-reduced-motion: reduce){
  .fx-grid, .social-icon:hover::after { animation: none !important; }
  .social-icon, .holo-btn { transition: none !important; }
}
/* --- Social icons: make them clearly white --- */
.footer-right .social-icon,
.footer-right .social-icon:link,
.footer-right .social-icon:visited,
.footer-right .social-icon:hover,
.footer-right .social-icon:active {
  color: #fff !important;          /* override any link colors */
  text-decoration: none;
}

.footer-right .social-icon i {
  color: #fff !important;           /* force the glyph white */
  opacity: 1 !important;
  mix-blend-mode: normal !important;
  filter: none !important;
  text-shadow: 0 0 8px rgba(255,255,255,.12); /* subtle lift */
}

/* Improve contrast of the circular chip */
.footer-right .social-icon {
  background: rgba(255,255,255,.10);         /* was ~.06 — a touch brighter */
  border-color: rgba(255,255,255,.28);
}

/* Keep the hover glow but stay white */
.footer-right .social-icon:hover {
  border-color: rgba(255,255,255,.6);
  box-shadow: 0 0 18px rgba(255,255,255,.18), inset 0 0 12px rgba(255,255,255,.06);
}
.footer-right .social-icon:hover i { color:#fff !important; }

</style>
