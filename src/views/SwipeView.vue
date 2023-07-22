<template>
  <Breadcrumb title="Swipe"/>

  <div class="profile-container" v-if="profile">
    <div class="profile-image-container">
      <img :src="`https://zoonder.grimille.fr/${profile.picture}`" :alt="`Profile de ${profile.firstname}`">
    </div>
    <div class="profile-details">
      <div class="profile-details-header">
        <h1>{{ profile.firstname }}</h1>
        <GenderIndicator class="gender-indicator" :gender="profile.gender"/>
      </div>
      <div class="profile-details-content">
        <p>{{ profile.age }} {{ getAgeSuffix }}.</p>
        <p>{{ profile.description }}</p>
        <RelationTypeIndicator class="relation-type-indicator">{{ profile.searchFor }}</RelationTypeIndicator>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { ref, computed, onBeforeMount } from 'vue';
import { getRandomProfile } from '@/services/api';
import GenderIndicator from '@/components/GenderIndicator.vue';
import RelationTypeIndicator from '@/components/RelationTypeIndicator.vue';

const profile = ref();

const getAgeSuffix = computed(() => {
  return profile.value.age <= 1 ? 'an' : 'ans';
});

onBeforeMount(() => {
  getRandomProfile()
    .then(response => profile.value = response)
    .catch(error => console.error(error));
})
</script>

<style lang="scss" scoped>
.profile-photo-style {
  position: relative;
  border: 8px solid $light_color;
  min-width: 400px;
  width: 400px;
  height: 600px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.3);
}

.profile-container {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;

  .profile-image-container {
    @extend .profile-photo-style;

    &::after {
      @extend .profile-photo-style;
      content: '';
      position: absolute;
      top: -14px; left: -3px;
      background-color: $dark_color;
      transform: rotate(3deg);
      z-index: -1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .profile-details {
    margin-left: 5em;

    .profile-details-header {
      h1 {
        margin: 0;
      }

      .gender-indicator {
        margin-top: 0.25em;
      }
    }

    .profile-details-content {
      margin: 2em 0;

      font-size: $font_size_medium;

      .relation-type-indicator {
        margin-top: 0.5em;
      }
    }
  }
}

</style>