<template>
  <nav :class="{ opened : menuStore.isOpened }">
    <ul>
      <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'swipe-page'}">Swipe !</RouterLink></li>
      <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'recap-page'}">Mon recap</RouterLink></li>
      <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'login-page'}">Connexion</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { useMenuStore } from '@/stores/menuStore';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>

nav {
  position: fixed;
  top: 0; right: 0;
  width: 250px;
  height: 100vh;
  background-color: #ADBF9B;
  padding: 2em 1em;
  transform: translate3d(100%, 0, 0);
  transition: transform .3s ease-in-out;
  z-index: 200;

  ul {
    list-style-type: none;

    li {
      padding: 0.25em 0;
      display: block;

      a {
        transform: translate3d(0, 0, 0);
        transition: transform .3s ease-in-out;
        font-size: 1.4rem;
        color: white;
        text-decoration: none;
      }

      &:hover {
        a {
          transform: translate3d(10px, 0, 0);
        }
      }
    }
  }

  &.opened {
    transform: translate3d(0, 0, 0);
  }
}

</style>