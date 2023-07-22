<template>
  <Breadcrumb title="Swipe"/>

  <div class="profile-container" v-if="profile">
    <div class="profile-image-container">
      <img :src="`https://zoonder.grimille.fr/${profile.picture}`" :alt="`Profile de ${profile.firstname}`">
      <div class="smash-controller">
        <ButtonSmash class="btn-controller"/>
        <ButtonPass class="btn-controller"/>
      </div>
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
import { ref, computed, onBeforeMount } from 'vue';
import { getRandomProfile } from '@/services/api';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import GenderIndicator from '@/components/GenderIndicator.vue';
import RelationTypeIndicator from '@/components/RelationTypeIndicator.vue';
import ButtonSmash from '@/components/buttons/ButtonSmash.vue';
import ButtonPass from '@/components/buttons/ButtonPass.vue';

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

    .smash-controller {
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 0; left: 0;
      padding: 2em;

      .btn-controller {
        margin: 0 1em;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      }
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