<template>
    <button @click.prevent="meh" type="button"><slot></slot></button>
</template>

<script>
export default {
    methods: {
        meh() {
            this.$emit('meh');
        }
    }
}
</script>