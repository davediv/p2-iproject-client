<script>

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {
    computed: {
        ...mapState(useSosmedStore, ['']),
    },

    methods: {
        ...mapActions(useSosmedStore, ['']),
    },
}

</script>

<template>

<div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>

<!-- <div class="panel-wrap">
    <RouterLink to="/register" class="panel-item">Register</RouterLink>
    <RouterLink to="/login" class="panel-item">Login</RouterLink>
</div> -->

<div class="panel-wrap">
    <RouterLink to="/twitter/tweet" class="panel-item">Twitter Tweet Generator</RouterLink>
    <RouterLink to="/twitter/hashtag" class="panel-item">Twitter Hashtag Generator</RouterLink>
    <RouterLink to="/twitter/quote" class="panel-item">Twitter Quote Generator</RouterLink>
</div>

<div class="panel-wrap">
    <RouterLink to="/twitter/bio" class="panel-item">Twitter Bio Generator</RouterLink>
    <RouterLink to="/twitter/fact" class="panel-item">Twitter Fact</RouterLink>
    <RouterLink to="/twitter/engage" class="panel-item">Twitter Engage Questions</RouterLink>
</div>

<div class="panel-wrap">
    <RouterLink to="/username-checker" class="panel-item">Username Checker</RouterLink>
    <RouterLink to="/down-checker" class="panel-item">Down Checker</RouterLink>
    <RouterLink to="/twitter/trends" class="panel-item">Twitter Trends</RouterLink>
</div>


<RouterLink to="/">Home</RouterLink>

</template>