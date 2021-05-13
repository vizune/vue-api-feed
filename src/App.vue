<template>
  <div id="app">
    <Accordion />
    <CTA />
  </div>
</template>

<script>
import Accordion from './components/Accordion/Accordion.vue'
import CTA from './components/CTA/CTA.vue'

export default {
  name: 'App',
  components: {
    Accordion,
    CTA
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
