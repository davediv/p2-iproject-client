<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {

    computed: {
        ...mapWritableState(useSosmedStore, ['keyword', 'result']),
    },

    methods: {
        ...mapActions(useSosmedStore, ['postTwitterEngage']),

        // SUBMIT
        submitForm() {
            this.postTwitterEngage(this.keyword)
        },

        clickTweet() {
            return `https://twitter.com/intent/tweet?text=${this.result}`
        },

    },

    created() {
        this.result = ''
    }
}

</script>

<template>

<nav class="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
  <ol role="list" class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
    <li class="flex">
      <div class="flex items-center">
        <!-- <a href="#" class="text-gray-400 hover:text-gray-500"> -->
            <RouterLink to="/" class="text-gray-400 hover:text-gray-500">
          <!-- Heroicon name: mini/home -->
          <svg class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">Home</span>
        </RouterLink>
        <!-- </a> -->
      </div>
    </li>

    <li class="flex">
      <div class="flex items-center">
        <svg class="h-full w-6 flex-shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
        </svg>
        <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Twitter Engage Questions Generator</a>
      </div>
    </li>
  </ol>
</nav>
    <div class="logo"><img class="logo" src="../assets/TweetAi.png" alt="TweetAi"></div>
    <h1>Twitter Engage Questions Generator</h1>
            <div class="form-wrap">
                <form @submit.prevent="submitForm">
                    <input v-model="keyword" type="text" id="keyword" name="keyword" placeholder="Masukan topik tweet">
                    <button type="submit" class="panel-item">GENERATE</button>
                </form>
            </div>
    
            <div class="result" id="result" v-if="result">
                <h2>Result</h2>
                <blockquote><p>{{ result }}</p>
                <a class="tweet" target="_blank" :href="clickTweet()">TWEET THIS!</a>
                </blockquote>
            </div>
</template>