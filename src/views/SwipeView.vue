<template>
  <h1>Swipe</h1>

  <div class="profile-container" v-if="profile">
    <h2>{{ profile.firstname }} {{ profile.age }}ans.</h2>
    <p>{{ profile.gender }}</p>
    <p>{{ profile.description }}</p>
    <p>{{ profile.searchFor }}</p>
    <img :src="`https://zoonder.grimille.fr/${profile.picture}`" :alt="`Profile de ${profile.firstname}`">
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { getRandomProfile } from '@/services/api';

const profile = ref();

onBeforeMount(() => {
  getRandomProfile()
    .then(response => profile.value = response)
    .catch(error => console.error(error));
})
</script>

<style lang="scss" scoped>

</style>