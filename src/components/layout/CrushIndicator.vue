<template>
  <RouterLink class="crush-indicator" :to="{ name: 'recap-page' }">
    <div class="crush-icon">
      <IconCrowdFire/>
    </div>
    <span v-if="crushsCount > 0" class="crushs-count">{{ getFormattedCrushsCount }}</span>
  </RouterLink>
</template>

<script setup>
import IconCrowdFire from '@/components/icons/IconCrowdFire.vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  crushsCount: {
    type: Number,
    required: false,
    default: 0
  }
});

const getFormattedCrushsCount = computed(() => {
  return props.crushsCount > 99 ? '99+' : props.crushsCount;
})
</script>

<style lang="scss" scoped>
.crush-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  bottom: 1em;
  right: 1em;
  padding: 1em;
  background: $primary_gradient;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  .crushs-count {
    position: absolute;
    top: -8px; right: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $light_color;
    border-radius: 2em;
    padding: 0.125em 0.5em;
    font-weight: 700;
  }
}
</style>