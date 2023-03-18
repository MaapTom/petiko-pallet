<script setup>
import { useWindowSize } from '@vueuse/core'
import { PhPackage, PhTruck, PhCurrencyDollar, PhArrowsOutCardinal } from '@phosphor-icons/vue'

const props = defineProps({
  typeIcon: String
});

const { width } = useWindowSize();

const currentIcon = {
  truck: PhTruck,
  package: PhPackage,
  dollar: PhCurrencyDollar,
  move: PhArrowsOutCardinal
}

</script>

<template>
  <div id="icon-container">
    <component :is="currentIcon[props.typeIcon]" :size="(width) > 845 ? 32 : 24" color="white"/>
  </div>
</template>

<style>
@import '../assets/main.css';

#icon-container {
  display: flex;
  align-items: center;
  max-width: max-content;
  padding: 16px;

  background-color: var(--blue500);
  border-radius: 50%;
}
</style>