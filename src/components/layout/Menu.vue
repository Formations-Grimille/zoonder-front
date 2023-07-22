<template>
  <nav :class="{ opened : menuStore.isOpened }">
    <div class="menu-container">
      <div class="menu-header">
        <h4>Menu</h4>
        <ButtonClose class="menu-close-icon" @click="menuStore.closeMenu()"/>
      </div>
      <ul>
        <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'swipe-page'}"><span>Swipe !</span><IconChevron class="menu-item-icon"/></RouterLink></li>
        <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'recap-page'}"><span>Mon recap</span><IconChevron class="menu-item-icon"/></RouterLink></li>
        <li><RouterLink @click="menuStore.closeMenu()" :to="{ name: 'login-page'}"><span>Connexion</span><IconChevron class="menu-item-icon"/></RouterLink></li>
      </ul>
    </div>
    <cite class="copyright">Made with love by Mickaël Dhainaut</cite>
  </nav>
</template>

<script setup>
import IconChevron from '@/components/icons/IconChevron.vue';
import ButtonClose from '@/components/buttons/ButtonClose.vue';
import { useMenuStore } from '@/stores/menuStore';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0; right: 0;
  width: 250px;
  height: 100vh;
  background: $dark_gradient;
  transform: translate3d(100%, 0, 0);
  transition: transform .3s ease-in-out;
  z-index: 200;

  .menu-container {
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2em;

      h4 {
        text-transform: uppercase;
        background: $primary_gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .menu-close-icon {
        position: relative;
        top: 2px;
        transform: scale3d(0.9, 0.9, 1);
      }
    }
    ul {
      list-style-type: none;

      li {
        display: flex;
        cursor: pointer;
        padding: 0 1em;

        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          font-size: $font_size_normal;
          color: white;
          text-decoration: none;
          padding: 0.5em 1em;
          transition: background .3s ease-in-out;

          .menu-item-icon {
            opacity: 0.6;
          }

          span {
            transition: margin .3s ease-in-out;
          }
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.025);
          a {
            span {
              margin-left: 12px;
            }

            .menu-item-icon {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }

  &.opened {
    transform: translate3d(0, 0, 0);
  }

  .copyright {
    display: inline-block;
    background: $primary_gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 2em;
    font-size: $font_size_small;
    text-align: center;
  }
}

.gg-chevron-right-r {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px;
 border: 2px solid;
 border-radius: 4px
}

.gg-chevron-right-r::after {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 6px;
 height: 6px;
 border-bottom: 2px solid;
 border-right: 2px solid;
 transform: rotate(-45deg);
 left: 5px;
 top: 6px
} 

</style>