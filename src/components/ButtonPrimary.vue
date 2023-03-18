<script setup>
const props = defineProps({
  color: String,
  textValue: String,
  sizeButton: String,
  fontSize: Number,
});

const fontSize = props.fontSize + 'rem';
const bgColor = `var(${props.color})`;
const sizeButton = props.sizeButton == 'lg' ? '12px 14px' : '8px 14px';

</script>

<template>
  <button
    type="button"
    id="button-primary"
  >
    {{ textValue }}
    <slot id="icon-padding"></slot>
  </button>
</template>

<style>
@import '../assets/main.css';

#button-primary {
  display: block;
  max-width: max-content;

  padding: v-bind(sizeButton);
  font-size: v-bind(fontSize);
  color: var(--support-white);
  background-color: v-bind(bgColor);

  font-weight: 600;
  font-size: 1.4rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;
}

#icon-padding {
  display: block;
  margin: 0px 6px;
}

@media (max-width: 1150px) {
  #button-primary {
    display: block;
    max-width: max-content;

    padding: v-bind(sizeButton);
    font-size: v-bind(fontSize);
    color: var(--support-white);
    background-color: v-bind(bgColor);

    font-weight: 500;
    font-size: clamp(12px, 14px, 16px);
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }
}
</style>