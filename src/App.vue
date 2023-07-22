<template>
  <Menu/>
  <button @click="menuStore.openMenu()">MENU</button> 
  <RouterView/>
  <Overlay/>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Overlay from '@/components/Overlay.vue';
import { useMenuStore } from '@/stores/menuStore';

const menuStore = useMenuStore();

</script>

<style>
@import url(https://fonts.bunny.net/css?family=acme:400);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Acme', sans-serif;
  font-size: 16px;
}
</style>