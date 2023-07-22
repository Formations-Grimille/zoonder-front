<template>
  <button type="button" class="btn-close">
    <IconCross class="icon-cross"/>
  </button>
</template>

<script setup>
import IconCross from '@/components/icons/IconCross.vue';
</script>

<style lang="scss" scoped>
.btn-close {
  background: none;
  border: none;
  cursor: pointer;
  color: $light_color;

  .icon-cross {
    transition: transform .25s ease-in-out;
  }

  &:hover {
    .icon-cross {
      transform: rotate(-180deg);
    }
  }
}
</style>