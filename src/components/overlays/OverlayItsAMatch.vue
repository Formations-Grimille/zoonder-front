<template>
  <Overlay :opened="opened">
    <div class="modal-box">
      <div class="avatar-container">
        <img :src="avatarURL" alt="Match avatar"/>
      </div>
      <h2>It's a match !</h2>
      <ButtonPrimary @click="close">Beau gosse ! 😎</ButtonPrimary>
    </div>
  </Overlay>
</template>

<script setup>
import Overlay from '@/components/overlays/Overlay.vue';
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue';

defineProps({
  opened: {
    type: Boolean,
    required: false,
    default: false
  },
  avatarURL: {
    type: String,
    required: false,
    default: undefined
  }
});

const emits = defineEmits('close')

const close = () => {
  emits('close');
}
</script>
 
<style lang="scss" scoped>
.modal-box {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: $light_color;
  max-width: 600px;
  width: 100%;
  padding: 2em;
  border-radius: 6px;
  font-family: 'Engagement', handwriting;
  text-align: center;

  .avatar-container {
    width: 128px;
    height: 128px;
    
    img {
      width: 100%;
      height: 100%;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      border: 6px solid $light_color;
      object-fit: cover;
      object-position: center;
    }
  }

  h2 {
    font-size: $font_size_gigantic * 1.5;
  }
}
</style>