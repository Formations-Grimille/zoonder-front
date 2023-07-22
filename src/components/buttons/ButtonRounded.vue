<template>
  <button type="button">
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    required: false,
    default: '2em'
  }
})
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $light_color;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: v-bind(size);
  height: v-bind(size);
  font-size: $font-size-large;

  &:active {
    transform: translate3d(0, 1px, 0);
  }
}
</style>