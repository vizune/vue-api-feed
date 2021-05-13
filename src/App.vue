<template>
  <div id="app">
    <div v-if="!loaded" class="flex justify-center items-center">
      <img src="./assets/images/loading.gif" alt="Loading" />
    </div>
    <div v-else>
      <button
        class="Button"
        v-on:click="sortedArray">
        Sort name by {{nameSort}}</button>
      <div class="mt-8">
        <Accordion :items="data" />
      </div>
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
      loaded: false,
      nameSort: "Ascending"
    }
  },
  beforeMount() {
    let timerid;

    if (timerid) {
      clearTimeout(timerid);
    }

    timerid = setTimeout(() => {
      // Forcing people to appreciate the loading animation
      this.fetchData(this.apiUrl);
    }, 1500);
  },
  methods: {
    fetchData(url) {
      // Gathers data from API
      // updates this.data which will be used as a prop in child components
      axios.get(url)
      .then((resp) => {
        if(resp.data) {
          this.data = resp.data;
          this.loaded = true;
        }
      })
      .catch((err) => {
        console.log(`Error : ${err}`)
        })
      },
      sortedArray: function() {
            let sortedData = this.data;

            if(this.nameSort === "Ascending") {

                sortedData = sortedData.sort((a,b) => {
                    let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    

                    return 0
                })

                this.nameSort = "Descending"
            }
            else {
                sortedData.reverse();
                this.nameSort = "Ascending"
            }

            this.data = sortedData;
        }
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: Arial, sans-serif;
  background-color: #d8d8d8;
  color: #2c3e50;
  padding: 2.5rem 0;
}

.Button {
  background: #00458b;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
</style>
