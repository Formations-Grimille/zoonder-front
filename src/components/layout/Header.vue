<template>
  <header>
    <div id="brand-logo-container">
      <h3>Zoonder</h3>
      <p>L'appli de rencontre de ta ferme !</p>
    </div>
    <ButtonBurger/>
  </header>
</template>

<script setup>
import ButtonBurger from '@/components/buttons/ButtonBurger.vue';
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;

  h3 {
    font-size: $font_size_extra_large;
    font-weight: 900;
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
</style>