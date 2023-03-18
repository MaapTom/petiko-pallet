<script setup>
const props = defineProps({
  height: Number,
  width: Number,
  color: String,
});

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
  width: v-bind(width);
  height: v-bind(height);
  background-color: v-bind(color);
}
</style>