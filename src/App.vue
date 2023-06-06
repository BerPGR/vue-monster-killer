/* eslint-disable */
<template>
  <div id="app">
    <Title />
    <div class="lifes">
      <Life />
      <Enemy />
    </div>
    <div class="buttons">
      <Selection bgColor="red" buttonName="Attack" :playerAction="attack"/>
      <Selection bgColor="yellow" buttonName="Defend" :playerAction="defend"/>
      <Selection bgColor="green" buttonName="Cure" :playerAction="cure"/>
      <Selection bgColor="aqua" buttonName="Special" :playerAction="special"/>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Life from './components/Life.vue';
import Enemy from './components/Enemy.vue';
import Selection from './components/Selection.vue';

export default {
  name: "App",
  components: {
    Title,
    Life,
    Enemy,
    Selection
  },
  methods: {
    attack() {
      console.log('Attack');
    },
    defend() {
      console.log('defend');
    },
    cure() {
      console.log('cure');
    },
    special() {
      console.log('special');
    }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lifes {
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
}
</style>
