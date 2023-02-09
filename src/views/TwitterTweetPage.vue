<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {

    computed: {
        ...mapWritableState(useSosmedStore, ['keyword', 'result']),

    },

    methods: {
        ...mapActions(useSosmedStore, ['postTwitterTweet']),

        // SUBMIT
        submitForm() {
            this.postTwitterTweet(this.keyword)
        }

    },
}

</script>

<template>
    <div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>
            <div class="form-wrap">

                <form @submit.prevent="submitForm">
                    <input v-model="keyword" type="text" id="keyword" name="keyword" placeholder="Masukan topik tweet">
                    <button type="submit">GENERATE</button>
                </form>



            </div>
    
            <div class="result" id="result" v-if="result">
                <h3>Result</h3>
                <blockquote><p>{{ result }}</p>
                <!-- <a class="tweet" :href="tweetLink">TWEET THIS!</a> -->
                <a class="tweet" target="_blank" href="#">TWEET THIS!</a>
                </blockquote>
            </div>
    
    
</template>