<template>
  <div id="app">
    <div v-if="!loaded">
      <p>Loading...</p>
    </div>
    <div v-else>
      <Accordion :items="data" />
      <div class="mt-8">
        <CTA :items="data" />
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from './components/Accordion/Accordion.vue';
import CTA from './components/CTA/CTA.vue';
import axios from 'axios';
import './assets/css/tailwind/tailwind.css';

export default {
  name: 'App',
  components: {
    Accordion,
    CTA
  },
  data() {
    return {
      apiUrl: 'https://api.punkapi.com/v2/beers',
      data: null,
      loaded: false
    }
  },
  beforeMount() {
    this.fetchData(this.apiUrl);
  },
  methods: {
    fetchData(url) {
      axios.get(url)
      .then((resp) => {
        if(resp.data) {
          console.log(resp.data)
          this.data = resp.data;
          this.loaded = true;
        }
      })
      .catch((err) => {
        console.log(`Error : ${err}`)
        })
      },
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #d8d8d8;
  color: #2c3e50;
  padding: 2.5rem 0;
}
</style>
