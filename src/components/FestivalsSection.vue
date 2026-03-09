<template>
  <div class="fests" id="festivals">
    <div class="fests-inner">
      <div class="sec-label">The Track Record</div>
      <div class="sec-head rv">
        <h2>Festivals That <span class="red">Proved It</span></h2>
        <p>Each lineup demand-validated before a single booking. Every one sold out.</p>
      </div>
      <div class="fest-grid rv">
        <div v-for="f in festivals" :key="f.name" class="fest-card">
          <div class="fest-img">
            <img :src="f.img" :alt="f.name" />
            <div class="fest-fade"></div>
            <span class="fest-badge">{{ f.badge }}</span>
          </div>
          <div class="fest-body">
            <div class="fest-name">{{ f.name }}</div>
            <div class="fest-curator">{{ f.curator }}</div>
            <div class="fest-meta"><span v-for="line in f.meta" :key="line">{{ line }}</span></div>
            <a href="#apply" class="btn-fest" :class="{ hot: f.hot }">Apply to Perform</a>
          </div>
        </div>
      </div>
      <div class="artist-cloud rv">
        <div class="ac-label">Artists already booked through this system</div>
        <div class="ac-names">
          <span v-for="a in artists" :key="a.name" class="ac-name" :class="{ hl: a.hl }">{{ a.name }}</span>
        </div>
        <div class="ac-foot"><strong>These aren't aspirational names.</strong> These are artists who were evaluated by this system, booked based on predicted demand, and performed in front of sold-out crowds.</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { img_ember26, img_blue24, img_sun, img_tool } from '../assets/images.js'
const festivals = [
  { name:'Ember Shores 2026',    curator:'ILLENIUM & Friends',      badge:'⭐ On Sale Now', hot:true,  img:img_ember26, meta:['📍 Riviera Maya, Mexico','🗓 Nov 20–22, 2026','✦ ILLENIUM + Lineup TBA'] },
  { name:'Paradise Blue',        curator:'Excision Presents',        badge:'Sold Out',       hot:false, img:img_blue24,  meta:['📍 Cancún, Mexico','🗓 Annual since 2022','✦ Excision 3 Sets'] },
  { name:'Sun Soaked',           curator:'deadmau5 & Kaskade',       badge:'Sold Out',       hot:false, img:img_sun,     meta:['📍 Cancún, Mexico','🗓 Annual · December','✦ Kaskade + deadmau5'] },
  { name:'Tool in the Sand',     curator:'Tool · Primus · Mastodon', badge:'Sold Out',       hot:false, img:img_tool,    meta:['📍 Punta Cana, DR','🗓 March 2025','✦ Coheed · EODM'] },
]
const artists = [
  {name:'ILLENIUM',hl:true},{name:'Excision',hl:true},{name:'deadmau5',hl:true},{name:'Kaskade',hl:true},
  {name:'Tool',hl:true},{name:'Primus',hl:true},{name:'Mastodon',hl:true},
  {name:'William Black'},{name:'Sullivan King'},{name:'Ray Volpe'},{name:'Subtronics'},{name:'Gareth Emery'},
  {name:'Seven Lions'},{name:'Slander'},{name:'Grabbitz'},{name:'Dillon Francis'},{name:'CloZee'},
  {name:'Bear Grillz'},{name:'Wooli'},{name:'ATLiens'},{name:'Svdden Death'},{name:'Eptic'},
  {name:'Trivecta'},{name:'Haliene'},{name:'Blanke'},{name:'Dab The Sky'},{name:'Kareem Martin'},
  {name:'James Egbert'},{name:'Jessica Audiffred'},{name:'Coheed & Cambria'},
  {name:'Eagles of Death Metal'},{name:"King's X"},{name:'+ 370 more'},
]
</script>
<style scoped>
.fests{padding:52px 20px;background:var(--black)}
.fests-inner{max-width:1280px;margin:0 auto}
.sec-head{margin-bottom:24px}
.sec-head h2{font-family:var(--ft);font-size:1.7rem;font-weight:800;letter-spacing:-.03em;margin-bottom:4px}
.sec-head p{font-size:.8rem;color:var(--muted);line-height:1.55}
.fest-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}
.fest-card{background:var(--card);border-radius:8px;overflow:hidden;border:1px solid var(--border);transition:border-color .25s,transform .25s}
.fest-card:hover{border-color:rgba(227,24,55,.35);transform:translateY(-3px)}
.fest-img{height:140px;position:relative;overflow:hidden}
.fest-img img{width:100%;height:100%;object-fit:cover;object-position:center top;transition:transform .5s}
.fest-card:hover .fest-img img{transform:scale(1.06)}
.fest-fade{position:absolute;inset:0;background:linear-gradient(to top,rgba(20,20,22,1) 0%,rgba(20,20,22,.05) 55%,transparent 100%);z-index:2}
.fest-badge{position:absolute;top:8px;left:8px;z-index:3;background:var(--red);border-radius:3px;padding:2px 7px;font-size:.52rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff}
.fest-body{padding:12px}
.fest-name{font-family:var(--ft);font-size:.88rem;font-weight:800;letter-spacing:-.02em;margin-bottom:1px}
.fest-curator{font-size:.62rem;font-weight:700;color:var(--red);text-transform:uppercase;letter-spacing:.06em;margin-bottom:7px}
.fest-meta{font-size:.65rem;color:var(--muted);display:flex;flex-direction:column;gap:2px;margin-bottom:10px;line-height:1.5}
.btn-fest{display:block;text-align:center;border:1px solid rgba(255,255,255,.13);border-radius:4px;padding:8px;font-size:.62rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;transition:background .2s,border-color .2s;color:#fff}
.btn-fest:hover,.btn-fest.hot{background:var(--red);border-color:var(--red)}
.artist-cloud{background:rgba(227,24,55,.04);border:1px solid rgba(227,24,55,.11);border-radius:10px;padding:24px 20px}
.ac-label{font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;text-align:center}
.ac-names{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:16px}
.ac-name{font-size:.72rem;font-weight:600;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:5px 11px;color:rgba(255,255,255,.55);transition:all .2s;cursor:default}
.ac-name:hover{background:rgba(227,24,55,.1);border-color:rgba(227,24,55,.28);color:#fff}
.ac-name.hl{color:#fff;background:rgba(227,24,55,.09);border-color:rgba(227,24,55,.26);font-weight:700}
.ac-foot{text-align:center;font-size:.78rem;color:rgba(255,255,255,.35);border-top:1px solid var(--border);padding-top:14px;line-height:1.7}
.ac-foot strong{color:rgba(255,255,255,.65)}
@media(min-width:768px){
  .fests{padding:80px 44px}
  .sec-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:32px;gap:20px;flex-wrap:wrap}
  .sec-head h2{font-size:2rem;margin-bottom:0}
  .sec-head p{text-align:right;max-width:360px}
  .fest-grid{grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:20px}
  .fest-img{height:180px}
  .fest-name{font-size:1rem}
  .fest-curator{font-size:.7rem}
  .fest-meta{font-size:.73rem}
  .fest-badge{font-size:.58rem;padding:3px 9px;top:10px;left:10px}
  .btn-fest{font-size:.7rem;padding:9px}
  .artist-cloud{padding:32px 36px}
  .ac-name{font-size:.78rem;padding:6px 14px}
}
</style>
