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
}

.menu-burger span{
  display: block;
  width: 30px;
  height: 3px;
  background-color: #000;
}

.menu-burger span::before, .menu-burger span::after{
  content: '';
  position: relative;
  display: block;
  width: 30px;
  height: 3px;
  background-color: #000;
}

.menu-burger span::before {
  transform: translate3d(0, -8px, 0)
}

.menu-burger span::after {
  transform: translate3d(0, 5px, 0)
}
</style>