<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: Number,
  width: Number,
  color: String,
});

const widthSize = computed(() => {
  return props.width + 'px';
})

const heightSize = computed(() => {
  return props.height + 'px';
})

const width = props.width + 'px';
const height = props.height + 'px';
const color = `var(${props.color})`;
</script>

<template>
  <span id="separator"></span>
</template>

<style>
@import '../assets/main.css';

#separator {
  display: inline-block;
  width: v-bind(widthSize);
  height: v-bind(heightSize);
  background-color: v-bind(color);
}
</style>