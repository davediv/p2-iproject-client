import { defineStore } from 'pinia';
// import { useToast } from 'vue-toastification';
import axios from 'axios';

// const toast = useToast();

const baseUrl = 'http://localhost:3000';

export const useSosmedStore = defineStore('sosmed', {
  state: () => ({
    courses: [],
    myCourses: [],
  }),
  actions: {
    async login({ email, password }) {
      try {
        const { data } = await axios({
          url: baseUrl + '/login',
          method: 'POST',
          data: { email, password },
        });
        toast.info('Success Login');

        localStorage.setItem('access_token', data.access_token);
        this.router.push({ name: 'homePage' });
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    logout() {
      localStorage.clear();
      this.router.replace({ name: 'loginPage' });
    },
    async fetchCourses() {
      try {
        const { data } = await axios({
          url: baseUrl + '/courses',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        this.courses = data;
      } catch (err) {
        toast.error('ERROR FETCH COURSES');
      }
    },
    async fetchMyCourses() {
      try {
        const { data } = await axios({
          url: baseUrl + '/mycourses',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        this.myCourses = data;
      } catch (err) {
        toast.error('ERROR FETCH MY COURSES');
      }
    },
    async completeCourse(id) {
      try {
        const { data } = await axios({
          url: baseUrl + `/mycourses/id`,
          method: 'PATCH',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        await this.fetchMyCourses();
        toast.success(data.message);
      } catch (err) {
        toast.error(err.data.response.message);
      }
    },
    async enrollCourse(id) {
      try {
        const { data } = await axios({
          url: baseUrl + `/mycourses/id`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        await this.fetchMyCourses();

        toast.success('Course enrolled!');
        this.router.push({ name: 'coursePage' });
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
  },
});
