<script setup>
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { PhArrowRight } from '@phosphor-icons/vue'
import ClientsCard from '../components/ClientsCard.vue'
import BenefitsIcon from '../components/BenefitsIcon.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'

const { width } = useWindowSize()

</script>

<template>
  <main id="main-container">
    <section id="hero-section">
      <div class="fluid-container" id="content-container">
        <div class="container-hero-text">
          <div class="content-text">
            <h1>
              <span>Resistente.<br></span>
              <span>Sustentável.<br></span>
              E ideal para a sua carga!
            </h1>
            <h2>Madeira, plástico ou metal. Escolha a melhor opção para o seu negócio, e nós entregamos.</h2>
            <ButtonPrimary
              color="--green500"
              size-button="lg"
              text-value="Veja nossos produtos"
            />
        </div>
        </div>
        <div class="container-hero-image">
          <template v-if="width <= 845">
            <img src="../assets/images/Pallet-hero-alternative.png" alt="Serviços e utilidades da Pallet para o seu negócio.">
          </template>
          <template v-else>
            <img src="../assets/images/PalletHero2x.jpg" alt="Serviços e utilidades da Pallet para o seu negócio.">
          </template>
        </div>
      </div>
    </section>

    <section class="fluid-container" id="quality-section">
      <div class="benefits">
        <h3 class="quality-title">Produtos de <span>qualidade</span> para a <span>satisfação</span> dos clientes</h3>
        <ul class="list-items">
          <li class="benefit-item">
            <BenefitsIcon
              typeIcon="package"
              class="quality-icon"
            />
            +200 pallets entregues por mês.
          </li>
          <li class="benefit-item">
            <BenefitsIcon
              typeIcon="truck"
              class="quality-icon"
            />
            Envio do produto em até 1 semana após a compra.
          </li>
          <li class="benefit-item">
            <BenefitsIcon
              typeIcon="dollar"
              class="quality-icon"
            />
            Preço sob medida para seu negócio.
          </li>
          <li class="benefit-item">
            <BenefitsIcon
              typeIcon="move"
              class="quality-icon"
            />
            Pallets com medidas personalizadas, construído de acordo com a sua preferência.
          </li>

          <RouterLink 
            to=""
            class="anchor-link"
          >
            <span>
              Faça um orçamento conosco
            </span>
            <PhArrowRight
              size="20"
              color="#2D56C8"
              class="arrow-icon"
            />
          </RouterLink>
        </ul>
      </div>
      <div class=clients>
        <h3 class="quality-title">Clientes satisfeitos de negócios <span>bem sucedidos</span></h3>
        <div class="grid-cards">
          <ClientsCard
            altImage="Ambev"
            typeImage="ambevImage"
          />
          <ClientsCard
            altImage="Atacadão"
            typeImage="atacadaoImage"
          />
          <ClientsCard
            altImage="Comgas"
            typeImage="comgasImage"
          />
          <ClientsCard
            altImage="Gol viagens"
            typeImage="golImage"
          />
          <ClientsCard
            altImage="Droga Brasil"
            typeImage="drogaBrasilImage"
          />
          <ClientsCard
            altImage="CSN"
            typeImage="csnImage"
          />
          <ClientsCard
            altImage="Petiko"
            typeImage="petikoImage"
            clientDepoiment="Garante a preservação dos produtos dos clientes. Super parceiro!"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@import '../assets/main.css';

#main-container {
  max-width: 1920px;
  margin: 0 auto;
}

/* Hero section */

#hero-section {
  max-width: 100%;
}

#content-container {
  gap: 24px;
  margin-left: 56px;
}

.container-hero-text {
  flex: 1;
}

.content-text {
  display: flex;
  flex-direction: column;
  max-width: 464px;
  gap: clamp(1.6rem, 2.4rem, 2.4rem);
}

.content-text h1 {
  color: var(--support-black);
  font-size: clamp(3.2rem, 2.8vw, 5.4rem);
  font-weight: 700;
  line-height: auto;
}

.content-text h2 {
  color: var(--gray900);
  font-size: clamp(1.6rem, 1.05vw, 2rem);
  font-weight: 400;
  line-height: 24px;
}

.content-text span {
  color: var(--green900)
}

.container-hero-image {
  max-width: 50vw;
}

.container-hero-image img{
  max-width: 100%;
}

/* Quality section */

#quality-section {
  align-items: start;
  gap: 36px;
  margin: 160px 112px;
}

.quality-title {
  margin-bottom: 36px;
  color: var(--support-black);
  font-weight: 500;
  font-size: clamp(2rem, 1.5vw, 3rem);
  line-height: clamp(2.4rem, 1.7vw, 1.7vw);
}

.quality-title span {
  color: var(--blue500)
}

.list-items {
  width: max-content;
}

.benefit-item {
  display: flex;
  align-items: center;
  max-width: 52ch;
  margin-top: 16px;
  color: var(--gray900);
  font-size: 1.6rem;
  line-height: 2.4rem;
}

.quality-icon {
  position: relative;
  margin-right: 16px;
}

.benefit-item + .benefit-item .quality-icon::after {
  content: '';
  position: absolute;
  top: -16px;
  left: 50%;
  width: 2px;
  height: 16px;

  background-color: var(--gray100);
}

.list-items .anchor-link {
  justify-content: center;
  margin-top: 24px;
}

.grid-cards {
  display: grid;
  max-width: 452px;
  grid-template-columns: repeat(3, minmax(80px, 140px));
  gap: 16px;
}

.grid-cards .card-container:last-child {
  grid-column: span 3;
}

@media(max-width: 1200px) {
  #quality-section {
    flex-wrap: wrap-reverse;
    gap: 60px;
    margin: 100px 56px;
    justify-content: center;
  }

  .clients {
    width: 100%;
  }

  .list-items {
    width: auto;
  }

  .grid-cards {
    display: grid;
    max-width: 100%;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    align-items: center;
    overflow: scroll;
  }

  .grid-cards .card-container:last-child {
    grid-column: 1;
  }
}

@media(max-width: 845px) {
  #content-container {
    flex-direction: column;
    align-items: initial;

    margin: 24px 36px;
  }

  #quality-section {
    margin: 24px 36px;
  }

  .content-text {
    margin: 0;
  }

  .container-hero-image {
    max-width: 100vw;
  }
}

</style>
