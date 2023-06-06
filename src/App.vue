/* eslint-disable */
<template>
  <div id="app">
    <Title />
    <div class="Lifes">

    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
//import Life from './components/Life.vue';

export default {
  name: "App",
  components: {
    Title,
  //  Life
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}
</style>
