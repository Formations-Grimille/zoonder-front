<template>
  <Overlay :opened="opened">
    <div class="modal-box">
      <h2>Vous n'êtes pas connecté !</h2>
      <p>Pour commencer à swiper, utilisez votre pseudonyme et le mot de passe "<cite>zoonder</cite>". Notez que ceci est un exercice pour mes élèves en formation Vue.js 3. Amusez-vous bien ! Mickaël</p>
      <ButtonPrimary @click="redirect">Compris !</ButtonPrimary>
    </div>
  </Overlay>
</template>

<script setup>
import Overlay from '@/components/overlays/Overlay.vue';
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

defineProps({
  opened: {
    type: Boolean,
    required: false,
    default: false
  }
});

const authStore = useAuthStore();
const router = useRouter();
const redirect = () => {
  authStore.requireLoginOverlay = false;
  router.push({ name: 'login-page'});
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

  h2 {
    font-size: $font_size_gigantic * 1.5;
  }

  p {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    margin: 1em 0;
  }
}
</style>