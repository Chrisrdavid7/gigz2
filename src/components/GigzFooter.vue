<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left section with logo and tagline -->
      <div class="footer-left">
        <div class="footer-logo">
          <img src="../assets/GigzLogo.png" alt="Gigz Logo" />
        </div>
        <p class="footer-tagline">
          A world where barriers vanish, and your music thrives.
        </p>
        <p class="footer-copy">
          &copy; 2025 Gigz Inc
        </p>
      </div>

      <!-- Right section with socials -->
      <div class="footer-right">
        <h4>Follow</h4>
        <div class="footer-socials">
          <a href="https://www.facebook.com/playgigz" aria-label="Facebook" class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/playgigz" aria-label="Twitter" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/playgigz/" aria-label="Instagram" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@playgigz" aria-label="TikTok" class="social-icon">
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.footer {
  background-color: #000;
  color: #fff;
  font-family: 'Lab Grotesque', sans-serif;
  padding: 3rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
}

.footer-left {
  flex: 1 1 300px;
}

.footer-logo img {
  width: 100px;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.5;
  max-width: 300px;
  margin-bottom: 1rem;
}

.footer-copy {
  font-size: 0.75rem;
  color: #777;
}

.footer-right {
  flex: 1 1 -1000px;
}

.footer-right h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-socials {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.social-icon {
  color: #fff;
  font-size: 20px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #c0961a;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left, .footer-right {
    align-items: center;
  }

  .footer-socials {
    justify-content: center;
  }
}
</style>
