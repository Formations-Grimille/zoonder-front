<template>
  <Breadcrumb title="Commencez à swiper"/>
  <form method="POST">
    <label for="username">Pseudonyme</label>
    <input id="username" type="text">
    <label for="password">Mot de passe</label>
    <input id="password" type="password">
    <button type="button">Commencer à crusher 🐽</button>
  </form>
</template>

<script setup>
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
</script>