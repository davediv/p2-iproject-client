<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {

    computed: {
        ...mapWritableState(useSosmedStore, ['keyword', 'result']),
    },

    methods: {
        ...mapActions(useSosmedStore, ['postTwitterBio']),

        // SUBMIT
        submitForm() {
            this.postTwitterBio(this.name, this.job, this.vibe)
        },

        clickTweet() {
            return `https://twitter.com/intent/tweet?text=${this.result}`
        },

    },
}

</script>

<template>
    <div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>
    <h1>Twitter Bio Generator</h1>
            <div class="form-wrap">
                <form @submit.prevent="submitForm">
                    <input v-model="name" type="text" id="name" name="name" placeholder="Masukan nama">
                    <input v-model="job" type="text" id="job" name="job" placeholder="Masukan pekerjaan">
                    <select v-model="vibe" name="vibe" id="vibe">
                        <option value="profesional">Profesional</option>
                        <option value="lucu" selected>Lucu</option>
                    </select>
                    <button type="submit">GENERATE</button>
                </form>
            </div>
    
            <div class="result" id="result" v-if="result">
                <h2>Result</h2>
                <blockquote><p>{{ result }}</p>
                <a class="tweet" target="_blank" :href="clickTweet()">TWEET THIS!</a>
                </blockquote>
            </div>
</template>