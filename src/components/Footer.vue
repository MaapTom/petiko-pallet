<script setup>
import Logo from './icons/Logo.vue'
import SocialIcon from './SocialIcon.vue'

</script>
<template>
  <footer id="footer" class="fluid-container">
    <div class="container">
      <Logo
        class="logo"
        width="98"
        height="32"
        colorStyle="white"
      />
      <nav class="footer-navigation">
        <ul class="list-navigation">
          <h3>Recursos</h3>
  
          <RouterLink to="/">
            <li>Home</li>
          </RouterLink>
          <RouterLink to="/produtos">
            <li>Produtos</li>
          </RouterLink>
          <RouterLink to="/sobre-nos">
            <li>Sobre Nós</li>
          </RouterLink>
          <RouterLink to="/sobre-nos">
            <li>Orçamento</li>
          </RouterLink>
          <RouterLink to="/sobre-nos">
            <li>Sitemap</li>
          </RouterLink>
        </ul>
        <ul class="social-list">
          <h3>Redes sociais</h3>
          <span>
            <li><SocialIcon typeIcon="PhYoutubeLogo"/></li>
            <li><SocialIcon typeIcon="PhTwitterLogo"/></li>
            <li><SocialIcon typeIcon="PhInstagramLogo"/></li>
          </span>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<style>
@import '../assets/main.css';

#footer {
  max-width: 100%;
  padding: 36px 0px 42px 0px;
  background-color: var(--blue900);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  max-width: 596px;
  width: 100%;
  margin: 0 112px;
  gap: 36px;
}

.footer-navigation {
  display: flex;
  align-items: start;
  gap: 90px;
}

.footer-navigation h3 {
  margin-bottom: 24px;
  color: var(--support-white);
  font-size: 1.4rem;
  font-weight: 700;
}

.footer-navigation li {
  margin-bottom: 6px;
  padding: 6px 0px;
  color: var(--blue100);
  font-size: 1.4rem;
  font-weight: 400;
}

.footer-navigation li:hover {
  text-decoration: underline;
}

.social-list span {
  display: flex;
}

.social-list span li {
  margin-right: 12px;
}

@media( max-width: 640px ) {
  .container {
    margin: 0px 56px;
    justify-content: center;
  }
}

</style>