<template>
  <Breadcrumb title="Recap"/>

  <h3>Vos crushs</h3>
  <div class="recap-container" v-if="crushStore.getCrushsCount > 0">
    <div class="crush-row" v-for="crushProfile in crushStore.getMatches">
      <div class="crush-profile">
        <div class="crush-avatar-container">
          <img class="crush-avatar" :src="`https://zoonder.grimille.fr/${crushProfile.picture}`" :alt="`${crushProfile.firstname}'s avatar'`">
        </div>
        <div class="crush-profile-content">
          <span class="firstname">{{ crushProfile.firstname }}</span>
          <GenderIndicator class="gender" :gender="crushProfile.gender"/>
        </div>
      </div>
      <ButtonRounded class="btn-chat"><IconComment/></ButtonRounded>
    </div>
  </div>
  <div v-else>
    <p>Vous n'avez pas encore de crush. C'est un bug, ce n'est pas du tout parce que vous êtes moche !</p>
  </div>
</template>

<script setup>
import IconComment from '@/components/icons/IconComment.vue';
import ButtonRounded from '@/components/buttons/ButtonRounded.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import GenderIndicator from '@/components/GenderIndicator.vue';
import { onBeforeMount } from 'vue';
import { useCrushStore } from '@/stores/crushStore';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const crushStore = useCrushStore();

onBeforeMount(() => {
  if (!authStore.isAuthenticated) {
    authStore.requireLoginOverlay = true;
  }
})
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 0.5em;
}
.recap-container {
  .crush-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1em;
    cursor: pointer;

    &:hover {
      background-color: rgba($light_color, 0.2);
    }

    .crush-profile {
      display: flex;
      align-items: center;
      .crush-avatar-container {
        width: 56px;
        height: 56px;

        .crush-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
      }

      .crush-profile-content {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-left: 1em;

        .firstname {
          font-size: $font_size_medium;
          font-weight: 700;
          margin-right: 1em;
          width:200px;
        }
      }
    }
  }
}

@media screen and (max-width: 749px) {
  .recap-container {
    .crush-row {
      .crush-profile {
        .crush-profile-content {
          .firstname {
            width: auto;
          }

          .gender {
            display: none;
          }
        }
      }
    }
  }
}
</style>