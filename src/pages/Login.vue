<template>
    <div class="login-wrapper">
        <div class="login-panel">
            <h2><i class="fa fa-rocket"></i> Connexion à Zoonder</h2>
            <form @submit.prevent="login" @keyup.enter="login" method="POST">
                <span class="alert">{{ message }} </span>
                <label for="username">E-mail</label>
                <input id="username" type="text" name="username" v-model="form.username">
                <label for="password">Mot de passe</label>
                <input id="password" type="password" name="password" v-model="form.password">
                <button class="btn btn-primary" type="submit">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            message: ''
        }
    },
    methods: {
        login() {
            axios.post('https://zoonder.grimille.fr/auth/login', JSON.stringify(this.form), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => this.message = response.data.message);
        }
    }
}
</script>

<style scoped>
    .login-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .login-panel {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start; 
        width: 520px;
        padding: 2em;
    }

    .login-panel form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .login-panel form input {
        margin: 0.5em 0;
    }

    .login-panel form button {
        margin-top: 2em;
    }
</style>