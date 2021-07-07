<template>
    <div class="container" id="summary">
        <Likes/>
        <Dislikes/>
    </div>
</template>

<script>
import Likes from '../components/Likes.vue';
import Dislikes from '../components/Dislikes.vue';

export default {
    components: {Likes, Dislikes}
}
</script>

<style scoped>
    #summary {
        margin: 2em auto;
        display: flex;
        justify-content: space-between;
    }
</style>