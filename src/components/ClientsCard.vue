<script setup>
import golImage from '../assets/images/gol.png';
import csnImage from '../assets/images/csn.png';
import ambevImage from '../assets/images/ambev.png';
import petikoImage from '../assets/images/petiko.png';
import comgasImage from '../assets/images/comgas.png';
import atacadaoImage from '../assets/images/atacadao.png';
import drogaBrasilImage from '../assets/images/droga-brasil.png';

const props = defineProps({
  altImage: String,
  typeImage: String,
  clientDepoiment: String,
})

const currentImage = {
  golImage,
  csnImage,
  ambevImage,
  petikoImage,
  comgasImage,
  atacadaoImage,
  drogaBrasilImage
}

</script>

<template>
  <div
    class="card-container"
    :class="{'depoiment-active': props?.clientDepoiment}"
  >
    <div class="image-container">
      <img :src="currentImage[props.typeImage]" :alt="props.altImage + ' logomarca'"/>
    </div>
    <i v-if="props.clientDepoiment">"{{ clientDepoiment }}"</i>
  </div>
</template>

<style scoped>
@import '../assets/main.css';

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 80px;
  padding: 26px 24px;
  border-radius: 8px;
  background-color: var(--blue100);
}

.image-container {
  max-width: 112px;
}

.card-container img {
  display: block;
  max-width: 100%;
  max-height: 46px;
}

.depoiment-active {
  display: flex;
  align-items: center;
  width: inherit;
  height: auto;
  justify-content: center;
  gap: 24px;
}

.depoiment-active i {
  display: inline-block;
  max-width: 32ch;
  color: var(--gray900);
  font-size: 1.6rem;
  line-height: 2.4rem;
}

@media(max-width: 567px) {
  .depoiment-active {
    width: 140px;
    height: 80px;
  }

  .depoiment-active i {
    display: none;
  }
}


</style>