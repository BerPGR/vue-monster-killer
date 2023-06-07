/* eslint-disable */
<template>
  <div id="app">
    <div class="first">
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
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Life from './components/Life.vue';
import Enemy from './components/Enemy.vue';
import Selection from './components/Selection.vue';
import { mapGetters } from 'vuex';

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
      const playerAttack = Math.floor(Math.random() * 10) + 5
      const enemyAttack = Math.floor(Math.random() * 15) + 5
      this.$store.commit('setAttackMovement', {playerAttack: playerAttack, enemyAttack: enemyAttack})
    },
    defend() {

    },
    cure() {
      console.log('cure');
    },
    special() {
      console.log('special');
    }
  },
  computed: {
    ...mapGetters({
      enemyLife: 'getEnemyLife'
    })
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
  align-items: center;
  background-color: #999;
  height: 100vh;
}

.first {
  margin-top: 20px;
  background-color: #fff;
  max-width: 1400px;
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 15px 25px #555
}

.lifes {
  display: flex;
  width: 71%;
  flex-direction: row;
  justify-content: space-between;
}

.buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 71%;
  justify-content: space-between;
}
</style>
