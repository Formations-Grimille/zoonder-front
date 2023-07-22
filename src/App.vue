<template>
  <Header/>
  <Menu/>
  <main>
    <RouterView/>
  </main>
  <CrushIndicator :crushsCount="260"/>
  <Overlay/>
</template>

<script setup>
import Header from '@/components/layout/Header.vue';
import Menu from '@/components/layout/Menu.vue';
import Overlay from '@/components/layout/Overlay.vue';
import CrushIndicator from '@/components/layout/CrushIndicator.vue';

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $primary_gradient;
  color: $dark_color;
  min-height: 100vh;
}

main {
  padding: 1.5em;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>