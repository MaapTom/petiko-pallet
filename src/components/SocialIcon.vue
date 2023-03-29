<script setup>
import { PhInstagramLogo, PhTwitterLogo, PhYoutubeLogo } from '@phosphor-icons/vue'

defineProps({
  typeIcon: String,
});

const currentIcon = {
  PhTwitterLogo,
  PhYoutubeLogo,
  PhInstagramLogo
};

</script>

<template>
  <a
    href=""
    class="link-social"
  >
    <component
      :is="currentIcon[typeIcon]"
      size="24"
      color="white"
    ></component>
  </a>
</template>

<style>
@import '../assets/main.css';

.link-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 2px 3px;
  background-color: var(--blue500);
  border-radius: 4px;
}
</style>