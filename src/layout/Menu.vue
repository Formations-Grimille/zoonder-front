<template>
    <nav>
        <ul>
            <li><router-link :to="{name: 'swipe'}">Swipe !</router-link></li>
            <li><router-link to="/summary">Récap</router-link></li>
            <li><router-link to="/login">Connexion</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        position: fixed;
        bottom: 0;
        right: 2em;
        padding: 1em 2em;
        background: var(--bs-dark);
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    nav ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    nav ul li {
        padding: 0 1em;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0;
    }
</style>