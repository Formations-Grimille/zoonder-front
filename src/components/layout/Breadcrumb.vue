<template>
  <h1 :data-title="title">{{ title }}</h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  font-size: $font_size_gigantic * 2;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  margin: 0.5em 0 1em 0;

  &::before, &::after {
    position: absolute;
    top: 0; left: 0;
    content: attr(data-title);
    -webkit-text-stroke: 2px $dark_color;
    color: transparent;
  }

  &::before {
    left: 20px;
    transform: translate3d(100%, 0 ,0);
    color: rgba($dark_color, 0.5);
  }

  &::after {
    left: 40px;
    transform: translate3d(200%, 0 ,0);
  }
}
</style>