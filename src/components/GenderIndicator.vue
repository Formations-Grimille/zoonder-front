<template>
  <Badge color="rgb(233, 235, 238)">
    <IconMale v-if="gender === 'male'"/>
    <IconFemale v-else-if="gender === 'female'"/>
    {{ genderText }}
  </Badge>
</template>

<script setup>
import Badge from './Badge.vue';
import IconMale from '@/components/icons/IconMale.vue';
import IconFemale from '@/components/icons/IconFemale.vue';
import { computed } from 'vue';

const props = defineProps({
  gender: {
    type: String,
    required: false,
    default: 'male',
  }
})

const genderText = computed(() => {
  return props.gender === 'male' ? 'Mâle' : 'Femelle';
});

</script>