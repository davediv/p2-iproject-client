<script>
// di APP.vue import { RouterLink, RouterView } from 'vue-router';

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useSosmedStore } from '../stores';

export default {
    data() {
        return {
            userData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapState(useSosmedStore, ['']),

    },

    methods: {
        ...mapActions(useSosmedStore, ['register']),

        // Submit Form
        submitForm() {
            this.register(this.userData)
        }
    },
}

</script>

<template>
    <!-- <RouterLink to="/login"></RouterLink> -->
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <header>
        <div class="mx-auto flex max-w-7xl items-center justify-center py-6 px-6">
            <div class="flex">
              <RouterLink to="/">
                    <span class="sr-only">SosialAi</span>
                    <img class="h-8 w-auto sm:h-10" src="../assets/logo-SosialAi.png" alt="SosialAi">
              </RouterLink>
            </div>
        </div>
        <h4 class="mt-2 text-center text-gray-500">Register to get an account</h4>
        </header>
    
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <div class="mt-1">
                <input v-model="userData.name" id="name" name="name" type="text" autocomplete="off" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm">
              </div>
            </div>
    
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
    
            <!-- <div>
              <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <div class="mt-1">
                <input v-model="userData.phoneNumber" id="phoneNumber" name="phoneNumber" type="number" autocomplete="off" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm">
              </div>
            </div>
    
            <div>
              <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
              <div class="mt-1">
                <input v-model="userData.address" id="address" name="address" type="text" autocomplete="off" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm">
              </div>
            </div> -->
    
            <div class="flex items-center justify-between">
              <div class="text-sm">
                <RouterLink to="/login">
                  <span class="font-medium text-amber-600 hover:text-amber-500">Have an account? Login</span>
                </RouterLink>
              </div>
            </div>
    
            <div>
              <button type="submit" class="flex w-full justify-center border border-transparent bg-[#1DA1F2] py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">Sign up</button>
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