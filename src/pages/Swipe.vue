<template>
    <div class="swipe-wrapper">
        <Crush :count="this.crushs" />
        <div class="swipe" v-if="profile">
            <div class="swipe-pp">
                <img class="pp" :src="getPictureURL" alt="">
            </div>
            <aside class="swipe-aside">
                <h2>{{ profile.firstname }}</h2>
                <figcaption class="blockquote-footer">{{ profile.age }} ans</figcaption>
                <h6>À propos</h6>
                <div class="swipe-infos">
                    <span>{{ profile.gender | translateGender }}</span>
                    <span>{{ profile.description }}</span>
                    <span class="swipe-tag">{{ profile.searchFor }}</span>
                </div>

                <div class="swipe-interactions">
                    <ButtonLike @like="likeProfile"><i class="fa fa-heart"></i></ButtonLike>
                    <ButtonMeh @meh="dislikeProfile"><i class="fa fa-times"></i></ButtonMeh>
                 </div>
            </aside>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ButtonLike from '../components/ButtonLike.vue';
import ButtonMeh from '../components/ButtonMeh.vue';
import Crush from '../components/Crush.vue';

export default {
    components: {ButtonLike, ButtonMeh, Crush},
    data() {
        return {
            profile: null,
            crushs: 0,
        }
    },
    methods: {
        getNextProfile() {
            axios.get('https://zoonder.grimille.fr/api/profiles/random')
                        .then(response => this.profile = response.data);
        },
        getCrushs() {
            axios.get('https://zoonder.grimille.fr/api/crushs')
                        .then(response => this.crushs = response.data.crushs);
        },
        isMatching() {
            axios.post('https://zoonder.grimille.fr/api/match', JSON.stringify({id: this.profile.id}), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.data.match === true ? this.crushs++ : this.crushs);
        },
        likeProfile() {
            this.isMatching();
            this.getNextProfile();
        },
        dislikeProfile() {
            this.getNextProfile();
        }
    },
    computed: {
        getPictureURL() {
            if(this.profile !== null) {
                return 'https://zoonder.grimille.fr' + this.profile.picture
            }
            return 'https://zoonder.grimille.fr';
        }
    },
    filters: {
        translateGender(value) {
            return value === 'female' ? 'Femelle' : 'Mâle';
        }
    },
    created() {
        this.getNextProfile();
        this.getCrushs();
    }
}
</script>

<style scoped>
    .swipe-wrapper {
        height: 100%;
    }

    .swipe {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    .swipe-pp {
        width: 500px;
        height: 100%;
        background: gainsboro;
        box-shadow: 2px 2px 8px rgba(35, 90, 129, 0.3);
    }

    .swipe-pp .pp {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }

    .swipe-aside {
        padding: 2em;
        width: 800px;
    }

    .swipe-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start
    }

    .swipe-tag {
        background: var(--bs-cyan);
        color: var(--bs-light);
        width: auto !important;
        padding: 0.25em 0.75em;
        border-radius: 4px;
    }

    .swipe-interactions {
        margin: 2em 0;
    }

    .swipe-interactions button {
        margin-right: 0.5em;
        width: 48px;
        height: 48px;
        border: none;
        border-radius: 50%;
        color: #fff;
        background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)
    }

    .swipe-interactions button:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
</style>