<template>
  <div class="overlay" :class="{ opened }"><slot/></div>
</template>

<script setup>
defineProps({
  opened: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>

<style lang="scss" scoped>
.overlay {
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease-in-out;

  &.opened {
    opacity: 1;
    pointer-events: all;
  }
}
</style>