<script>
// di APP.vue import { RouterLink, RouterView } from 'vue-router';

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {
    data() {
        return {
        userData: {
            email: "",
            password: "",
        },

        }
    },
    computed: {
        ...mapState(useSosmedStore, ['']),

    },

    methods: {
        ...mapActions(useSosmedStore, ['login']),

        // Submit Form
        submitForm() {
            this.login(this.userData)
        }
    },
    props: [''],
    emits: [''],
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
        <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Login</a>
      </div>
    </li>
  </ol>
</nav>

    <!-- <RouterLink to="/login"></RouterLink> -->
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <header>
        <div class="mx-auto flex max-w-7xl items-center justify-center py-6 px-6">
            <div class="flex">
              <RouterLink to="/">
                    <!-- <span class="sr-only">SosialAi</span> -->
                    <!-- <img class="h-8 w-auto sm:h-10" src="../assets/TweetAi.png" alt="SosialAi"> -->
              </RouterLink>
            </div>
        </div>
        <h4 class="mt-2 text-center text-gray-500">Sign in to your account</h4>
        </header>
    
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form @submit.prevent="submitForm" class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input v-model="userData.email" id="email" name="email" type="email" autocomplete="off" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm">
              </div>
            </div>
    
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <input v-model="userData.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm">
              </div>
            </div>
    
            <div class="flex items-center justify-between">
              <div class="text-sm">
                <RouterLink to="/register">
                  <span class="font-medium text-[#1DA1F2]">Don't have an account? Register</span>
                </RouterLink>
              </div>
            </div>
    
            <div>
              <button type="submit" class="flex w-full justify-center border border-transparent bg-[#1DA1F2] py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">Sign in</button>
            </div>
          </form>
    
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <!-- <span class="bg-white px-2 text-gray-500">Or continue with</span> -->
              </div>
            </div>
    
            <div class="mt-6 flex justify-center">
              <div>
                <a href="#" class="inline-flex w-full justify-center rounded-md bg-white py-2 px-20 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <!-- <span class="sr-only">Sign in with Google</span> -->
                  <!-- <GoogleLogin :callback="callback" /> -->
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>