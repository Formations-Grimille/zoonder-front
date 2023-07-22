<template>
  <header>
    <div id="brand-logo-container">
      <h3>
        <RouterLink :to="{name: 'swipe-page'}">
          <IconCommunity class="logo-icon"/><span logo-watermark>Zoonder</span>
        </RouterLink>
      </h3>
      <p>L'appli de rencontre de ta ferme.</p>
    </div>
    <ButtonBurger/>
  </header>
</template>

<script setup>
import IconCommunity from '@/components/icons/IconCommunity.vue';
import ButtonBurger from '@/components/buttons/ButtonBurger.vue';
import { RouterLink } from 'vue-router';
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  user-select: none;

  h3 {
    font-size: $font_size_extra_large;
    font-weight: 900;

    a {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .logo-icon {
      animation: none;
      }

      &:hover {
        .logo-icon {
          animation: pulse infinite ease-in-out .5s;
        }
      }
    }
  }

  p {
    font-weight: 700;
  }
}

@media screen and (max-width: 574px) {
  p {
    display: none;
  }
}

@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }

  25% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  50% {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
  animation-timing-function: ease-in-out;
}
</style>