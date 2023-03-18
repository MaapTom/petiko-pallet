<script setup>
import Twitter from './icons/social-icons/IconTwitter.vue'
import Youtube from './icons/social-icons/IconYoutube.vue'
import Instagram from './icons/social-icons/IconInstagram.vue'

defineProps({
  typeIcon: String,
});

const currentIcon = {
  Twitter,
  Youtube,
  Instagram
};

</script>

<template>
  <a
    href=""
    class="link-social"
  >
    <component :is="currentIcon[typeIcon]"></component>
  </a>
</template>

<style>
@import '../assets/main.css';

.link-social {
  background-color: var(--blue500);
  border-radius: 10px;
}
</style>