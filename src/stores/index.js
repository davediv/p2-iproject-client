import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000';
// const baseUrl = 'https://sosialai001-production.up.railway.app';

export const useSosmedStore = defineStore('sosmed', {
  state: () => ({
    keyword: '',
    result: '',
  }),
  actions: {

    // REGISTER - DONE
    async register({ name, email, password }) {

      try {
        let isPremium = false

        let { data } = await axios({
          url: baseUrl + '/register',
          method: 'POST',
          data: { name, email, password, isPremium}
        })

        // SET PAGE TO LOGIN
        this.router.push('/login')
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )

      } catch (err) {
        Swal.fire(
          'Error!',
          `${err}`,
          'error'
        )
      }

    },

    // LOGIN - DONE
    async login({ email, password }) {
      try {
        const { data } = await axios({
          url: baseUrl + '/login',
          method: 'POST',
          data: { email, password },
        });

        Swal.fire(
          'Selamat datang!!',
          'Hore!',
          'success'
        )
        localStorage.setItem('access_token', data.access_token);
        this.router.push('/twitter');
      } catch (err) {
        Swal.fire(
          'Error!',
          'Something is wrong!',
          'error'
        )
      }
    },

    // LOGOUT - DONE
    logout() {
      localStorage.clear();
      this.router.replace('/');
      Swal.fire(
        'Logout Success!',
        '',
        'success'
      )
    },


    // TWITTER - TWEET GENERATOR - DONE
    async postTwitterTweet(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-tweet',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Tweet berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },


    // TWITTER - HASHTAG GENERATOR
    async postTwitterHashtag(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-hashtag',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Hashtag berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },


    // TWITTER - QUOTE GENERATOR
    async postTwitterQuote(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-quote',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Quote berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // TWITTER - BIO GENERATOR
    async postTwitterBio(name, job, vibe) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-bio',
          method: 'POST',
          data: { name, job, vibe },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Bio berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // TWITTER - FACT GENERATOR
    async postTwitterFact(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-fact',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Fun Fact berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // TWITTER - ENGAGE QUESTIONS GENERATOR
    async postTwitterEngage(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-engage',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Engage questions berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },


    // USERNAME CHECKER
    async postUsernameChecker(keyword) {

      console.log(keyword);

      try {

        const { data } = await axios({
          url: baseUrl + '/username-checker',
          method: 'POST',
          data: { keyword },
        });

        // console.log(data, '<<<< DATA');

        this.result = data

        Swal.fire(
          'Berhasil!',
          'Berhasil!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // TWITTER - DOWN CHECKER
    async postDownChecker() {

      try {

        const { data } = await axios({
          url: baseUrl + '/down-checker',
          method: 'GET',
        });

        // console.log(data);

        this.result = data

        // Swal.fire(
        //   'Berhasil!',
        //   'Tweet berhasil digenerate!',
        //   'success'
        // )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // TWITTER - TRENDS
    async postTwitterTrends(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/twitter-trends',
          method: 'GET',
        });

        this.result = data.trends;

        console.log(this.result, '<<<<<<< DATA RESULT');

        // Swal.fire(
        //   'Berhasil!',
        //   'Tweet berhasil digenerate!',
        //   'success'
        // )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

    // DALL-E - Text2Image
    async postDallE(keyword) {

      try {

        const { data } = await axios({
          url: baseUrl + '/image-dalle',
          method: 'POST',
          data: { keyword },
        });

        this.result = data.result;

        Swal.fire(
          'Berhasil!',
          'Tweet berhasil digenerate!',
          'success'
        )

      } catch (err) {
        console.log(err);
        Swal.fire(
          'Ups! Error!',
          `Coba beberapa saat lagi`,
          'error'
        )
      }
    },

  },
});
