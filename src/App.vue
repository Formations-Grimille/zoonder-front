<template>
  <Header/>
  <Menu/>
  <main>
    <RouterView/>
  </main>
  <CrushIndicator :crushsCount="crushStore.getCrushsCount"/>
  <Overlay :opened="menuStore.isOpened" @click="menuStore.closeMenu()"/>
  <OverlayItsAMatch :avatarURL="crushStore.getLastMatchedAvatar" :opened="crushStore.isMatchedOverlayOpened" @close="crushStore.closeOverlay()"/>
  <OverlayRequireLogin :opened="authStore.isRequireLoginOverlayOpened" />
</template>

<script setup>
import Header from '@/components/layout/Header.vue';
import Menu from '@/components/layout/Menu.vue';
import Overlay from '@/components/overlays/Overlay.vue';
import CrushIndicator from '@/components/layout/CrushIndicator.vue';
import OverlayItsAMatch from '@/components/overlays/OverlayItsAMatch.vue';
import OverlayRequireLogin from '@/components/overlays/OverlayRequireLogin.vue';
import { useMenuStore } from '@/stores/menuStore';
import { useCrushStore } from '@/stores/crushStore';
import { useAuthStore } from '@/stores/authStore';

const menuStore = useMenuStore();
const crushStore = useCrushStore();
const authStore = useAuthStore();

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
  width: 100vw;
  overflow-x: hidden;
}

main {
  padding: 1.5em;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>