<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import Logo from './icons/Logo.vue'
import Separator from './Separator.vue'
import { PhList } from '@phosphor-icons/vue'
import ButtonPrimary from './ButtonPrimary.vue'

const navBar = ref(null);
const { width } = useWindowSize();

function toggleMenu() {
  if (width.value > 845) return;
  
  const body = document.querySelector('body');

  setTimeout(() => {
    navBar.value.classList.toggle('active');
    body.style.overflow == '' ? 
      body.style.overflow = 'hidden'
      :
      body.style.overflow = ''

  }, 200)
  
}

</script>
<template>
  <header id="header-container" class="fluid-container">
    <RouterLink to="/">
      <Logo class="logo" width="98" height="32"/>
    </RouterLink>
    <a 
      @click="toggleMenu"
      class="menu-bar"
    >
      Menu
      <PhList
        size="32"
        :mirrored="true"
        color="black"
      />
    </a>
    <nav
      id="nav-bar"
      ref="navBar"
    >
      <ul>
        <RouterLink to="/" @click="toggleMenu">
          <li>Home</li>
        </RouterLink>
        <RouterLink to="/produtos" @click="toggleMenu">
          <li>Produtos</li>
        </RouterLink>
        <RouterLink to="/sobre-nos" @click="toggleMenu">
          <li>Sobre Nós</li>
        </RouterLink>
        <Separator
          :width="2"
          :height="28"
          color="--gray100"
          v-if="width > 845"
        />
        <ButtonPrimary
          textValue="Fazer um orçamento"
          sizeButton="md"
          color="--green500"
          @click="toggleMenu"
        />
      </ul>
    </nav>
  </header>
</template>
<style>
@import '../assets/main.css';

#header-container {
  max-width: 1920px;
  
  margin: 0 auto;
  padding: 16px 56px;

  background-color: var(--support-white);
  border-bottom: 1px solid var(--gray100);
}

#nav-bar ul{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

#nav-bar li {
  font-size: 1.4rem;
  color: var(--support-black);
  font-weight: 500;
}

#nav-bar [aria-current="page"] li{
  color: var(--blue500);
  font-weight: 600;
}

.menu-bar {
  display: none;
}

@media (max-width: 680px) {
  #header-container {
    position: relative;
    padding: 16px 36px;
  }

  #nav-bar.active {
    display: flex;
  }

  #nav-bar {
    position: fixed;
    top: 96px;
    right: 0;
    display: none;
    width: 100%;
    height: 100vh;
    justify-content: center;

    background-color: var(--support-white);
    z-index: 2;
  }

  #nav-bar ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 14px;

    padding-left: 36px;
  }

  #nav-bar ul a {
    display: block;
    width: calc(100% - 10%);
    
    padding: 10px 8px;
    
    border-bottom: 1px solid var(--gray100);
  }

  .menu-bar {
    display: block;
    padding: 10px;
    margin-right: -10px;

    cursor: pointer;
  }
}

</style>