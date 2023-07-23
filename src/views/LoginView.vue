<template>
  <Breadcrumb title="Crusher"/>
  <form method="POST" @submit.prevent="login">
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <label for="username">Pseudonyme</label>
    <input v-model="username" id="username" autocomplete="username" type="text">
    <label for="password">Mot de passe</label>
    <input v-model="password" id="password" type="password" autocomplete="current-password">
    <ButtonPrimary type="submit" class="btn-login">Commencer à crusher 🐽</ButtonPrimary>
  </form>
</template>

<script setup>
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue';
import { useAuthStore } from '@/stores/authStore.js';
import { authenticate } from '@/services/api';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const userStore = useAuthStore();
const router = useRouter();

const login = () => {
  authenticate({ username: username.value, password: password.value}).then(response => {
    if(response.success === false) {
      errorMessage.value = response.message;
      userStore.killUserSession();
    } else {
      userStore.defineUserSession(response);
      router.push({ name: 'swipe-page'});
    }
  });
}
</script>

<style lang="scss" scoped>
form {
  .error-message {
    background-color: rgba($light_color, 0.2);
    padding: 1em;
  }
  display: flex;
  flex-flow: column nowrap;
  max-width: 325px;
  margin: 0 auto;

  input {
    width: 100%;
    height: 42px;
    padding: 0.75em 1em;
    border: none;
    border-radius: 4px;
  }

  label {
    margin-top: 1em;
    margin-bottom: 0.35em;
    font-size: font_size_medium;
  }

  .btn-login {
    margin-top: 2em;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
}

</style>