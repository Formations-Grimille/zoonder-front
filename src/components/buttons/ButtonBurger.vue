<template>
  <button type="button" class="menu-burger" @click="menuStore.openMenu()">
    <span></span>
  </button>
</template>

<script setup>
import { useMenuStore } from '@/stores/menuStore';

const menuStore = useMenuStore();
</script>

<style scoped lang="scss">
.menu-burger {
  cursor: pointer;
  padding: 1em;
  background: none;
  border: none;

  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: $dark_color;
    transform-origin: 100% 50%;
    transition: transform .25s ease-in-out;

    &::before, &::after {
      content: '';
      position: relative;
      display: block;
      width: 30px;
      height: 3px;
      background-color: $dark_color;
      transform-origin: 100% 50%;
      transition: transform .25s ease-in-out;
    }

    &::before {
      transform: translate3d(0, -8px, 0);
    }

    &::after {
      transform: translate3d(0, 5px, 0)
    }
  }

  &:hover {
    span {
      transform: scale3d(0.8, 1, 1);

      &::before {
        transform: scale3d(0.6, 1, 1) translate3d(0, -8px, 0);
      }

      &::after {
        transform: scale3d(0.3, 1, 1) translate3d(0, 5px, 0);
      }
    }
  }
}
</style>