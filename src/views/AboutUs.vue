<script setup>
import { useWindowSize } from '@vueuse/core'
import Footer from '../components/Footer.vue'
import Separator from '../components/Separator.vue'
import { PhMedal, PhArrowRight } from '@phosphor-icons/vue'

const { width } = useWindowSize();

</script>
<template>
  <main id="main-container">
    <section id="about-section">
      <div class="fluid-container" id="content-container">
        <div class="content-text">
          <h1>Somos a maior empresa do Brasil com foco na venda de <span>Pallets</span></h1>
          <h2>
            Nós da Pallets prezamos pela qualidade, eficiência e garantia da sustentabilidade
            em nossos negócios. No entanto, a sua satisfição é o que nós move.
          </h2>
          <ul class="wrapper-list">
            <li>
              <span>+200</span>
              Mais de 200 entregas mensais
            </li>
            <Separator
              :width="2"
              :height="104"
              color="--gray100"
              v-if="width > 1170"
            />
            <li>
              <span>#1</span>
              Maior empresa no ramo de Pallets
            </li>
            <Separator
              :width="2"
              :height="104"
              color="--gray100"
              v-if="width > 1170"
            />
            <li>
              <span>
                <PhMedal
                  size="32"
                  color="#056E33"
                />
              </span>
              Melhores do ano no quesito logística
            </li>
          </ul>
        </div>
        <div class="content-image">
          <h3>Organização da empresa</h3>
          <div class="container-image">
            <template v-if="width >= 1280">
              <img src="../assets/images/organograma-pallet.jpg" alt="Organograma da empresa"/>
            </template>
            <template v-else>
              <img src="../assets/images/organograma-pallet-alternative.jpg" alt="Organograma da empresa"/>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="fluid-container" id="quick-links-section">
      <div class="quick-links-container">
        <h2>Para onde você quer ir?</h2>
        <ul class="quick-links">
          <li>
            <RouterLink 
              to=""
              class="anchor-link"
            >
              <span>
                Ver produtos
              </span>
              <PhArrowRight
                size="20"
                color="#2D56C8"
                class="arrow-icon"
              />
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to=""
              class="anchor-link"
            >
              <span>
                Fazer um orçamento
              </span>
              <PhArrowRight
                size="20"
                color="#2D56C8"
                class="arrow-icon"
              />
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/"
              class="anchor-link"
            >
              <span>
                Página inicial
              </span>
              <PhArrowRight
                size="20"
                color="#2D56C8"
                class="arrow-icon"
              />
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </main>

  <Footer class="footer-component"/>
</template>
<style scoped>
@import '../assets/main.css';

#main-container {
  max-width: 1920px;
  margin: 0 auto;
}

#about-section {
  max-width: 100%;
  margin: 60px 0;
}

#content-container {
  display: flex;
  align-items: center;
  max-width: 1696px;
  margin: 0 112px;
  gap: 42px;
}

.content-text {
  display: flex;
  flex-direction: column;
  max-width: 650px;
}

.content-text h1 {
  color: var(--support-black);
  font-size: clamp(3.2rem, 2.8vw, 4rem);
  font-weight: 600;
  margin-bottom: 24px;
}

.content-text h1 span {
  color: var(--green900)
}

.content-text h2 {
  color: var(--gray900);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
}

.wrapper-list {
  display: flex;
  margin: 36px 0px;
}

.wrapper-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 160px;
  color: var(--gray900);
  font-size: 1.6rem;
  text-align: center;
  line-height: 24px;
}

.wrapper-list span{
  height: 32px;
  color: var(--green900);
  font-size: clamp(2rem, 2.4rem, 2.4rem);
  font-weight: 600;
}

.content-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}


.content-image h3 {
  color: var(--support-black);
  font-size: clamp(2rem, 2.4rem, 2.4rem);
  font-weight: 600;
}

/* Quick links section */

#quick-links-section {
  display: flex;
  max-width: 1696px;
  margin: 100px 112px;
}

.quick-links-container h2 {
  margin-bottom: 32px;
  color: var(--support-black);
  font-size: clamp(2rem, 2.4rem, 2.4rem);
  font-weight: 600;
}

.quick-links li {
  margin-bottom: 16px;
}

/* Footer */
.footer-component {
  margin-top: 100px;
}

@media (max-width: 1200px) {
  .wrapper-list {
    display: flex;
    margin: 36px 0px;
    justify-content: center;
    align-items: start;
    gap: 16px;
    flex-wrap: wrap;
  }
}

@media (max-width: 900px) {
  #about-section {
    max-width: 100%;
    margin: 30px 0;
  }

  #content-container {
    margin: 0 36px;
    flex-wrap: wrap;
    justify-content: center;
  }

  #quick-links-section {
    display: flex;
    max-width: 1696px;
    margin: 100px 36px;
  }

  .content-image img {
    display: block;
    max-width: 100%;
  }
}

</style>
