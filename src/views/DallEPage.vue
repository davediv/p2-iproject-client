<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {

    computed: {
        ...mapWritableState(useSosmedStore, ['keyword', 'result']),
    },

    methods: {
        ...mapActions(useSosmedStore, ['postDallE']),

        // SUBMIT
        submitForm() {
            this.postDallE(this.keyword)
        },

        clickTweet() {
            return `https://twitter.com/intent/tweet?text=${this.result}`
        },

    },
}

</script>

<template>
    <div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>
    <h1>Text to Image</h1>
            <div class="form-wrap">
                <form @submit.prevent="submitForm">
                    <input v-model="keyword" type="text" id="keyword" name="keyword" placeholder="Masukan deskripsi gambar">
                    <button type="submit">GENERATE</button>
                </form>
            </div>
    
            <div class="result" id="result" v-if="result">
                <h2>Result</h2>
                <blockquote><p><img :src="result"></p>
                <a class="tweet" target="_blank" :href="clickTweet()">TWEET THIS!</a>
                </blockquote>
            </div>
</template>