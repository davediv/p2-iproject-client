<script>
// di APP.vue import { RouterLink, RouterView } from 'vue-router';

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {
    computed: {
    ...mapState(useSosmedStore, ['']),

    },

    methods: {
    ...mapActions(useSosmedStore, ['']),
    },
    props: [''],
    emits: [''],
}

</script>

<template>

<div class="flex grid-cols-3 justify-center align-middle">
    <button>GENERATE</button>
    <button>GENERATE</button>
    <button>GENERATE</button>
    <button>GENERATE</button>
    <button>GENERATE</button>
    <button>GENERATE</button>
    <button>GENERATE</button>
</div>


<div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>
        <div class="form-wrap">
            <form action="" method="post"></form>
            <input type="text" id="keyword" v-model="keyword" placeholder="Masukan topik tweet">
            <button @click="generate()">GENERATE</button>
        </div>

        <div class="result" id="result" v-if="result">
            <h3>Result</h3>
            <blockquote><p>{{result}}</p>
            <!-- <a class="tweet" :href="tweetLink">TWEET THIS!</a> -->
            <a class="tweet" target="_blank" :href="clickTweet()">TWEET THIS!</a>
            </blockquote>
        </div>


</template>