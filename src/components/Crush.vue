<template>
    <div class="crush-panel">
        <span>{{ count }} crushs</span>
        <i class="fa fa-heart"></i>
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            required: true,
            default: 0
        }
    }
}
</script>
<style scoped>
    .crush-panel {
        position: absolute;
        top: 2em;
        right: 2em;
        width: 250px;
        height: 250px;
        background-color: #A9C9FF;
        background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .crush-panel span {
        font-size: 2rem;
    }

    .crush-panel i {
        font-size: 4rem;
    }
</style>