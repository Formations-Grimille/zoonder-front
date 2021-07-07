<template>
    <button @click.prevent="like" type="button"><slot></slot></button>
</template>

<script>
export default {
    methods: {
        like() {
            this.$emit('like');
        }
    }
}
</script>