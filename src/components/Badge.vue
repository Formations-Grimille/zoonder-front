<template>
  <span class="badge">
    <slot/>
  </span>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: '#101010'
  }
});
</script>

<style lang="scss" scoped>
.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: v-bind(color);
  border-radius: 2em;
  padding: 0.1em 0.75em;
  font-weight: 700;
  text-transform: uppercase;
}
</style>