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

</template>