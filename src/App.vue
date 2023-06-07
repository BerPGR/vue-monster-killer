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

    <div v-if="numberOfMovements > 0" class="decisions">
      <div class="decision" v-for="movement in movements" :key="movement">{{ movement }}</div>
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
  data: () => ({
    numberOfAttacks: 0,
    numberOfMovements: 0, // this value will always be added 2, bc of the players decision and the monster attack
    movements: []
  }),
  components: {
    Title,
    Life,
    Enemy,
    Selection
  },
  methods: {
    attack() {
      if (this.playersLife == 0 || this.enemyLife == 0) {
        return;
      }
      this.numberOfAttacks++;
      const playerAttack = Math.floor(Math.random() * 10) + 5
      const enemyAttack = Math.floor(Math.random() * 15) + 5
      this.$store.commit('setAttackMovement', {playerAttack: playerAttack, enemyAttack: enemyAttack})
      this.numberOfMovements += 2;
      this.movements.push(`Player attacked with ${playerAttack} damage points`)
      this.movements.push(`Monster attacked with ${enemyAttack} damage points`)
    },

    defend() {
      // Later...
    },

    cure() {
      if (this.playersLife == 0 || this.enemyLife == 0) {
        return;
      }
      const addLife = Math.floor(Math.random() * 10) + 3;
      this.$store.commit('setMorePlayersLife', addLife)
      this.numberOfMovements++
      this.movements.push(`Player cured with ${addLife} life points`)
    },

    special() {
      if (this.playersLife == 0 || this.enemyLife == 0) {
        return;
      }
      if (this.numberOfAttacks == 5) {
        this.$store.commit('setSpecialAttack', 25)
        this.numberOfAttacks = 0
        this.numberOfMovements++
        this.movements.push(`Player used special attack with ${25} life points`)
      }
      else {
        alert('You have to attack at least 5 times to use your special')
      }
    }
  },
  computed: {
    ...mapGetters({
      enemyLife: 'getEnemyLife',
      playersLife: 'getLife'
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
  padding-bottom: 10px;
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

.decisions {
  margin-top: 20px;
  max-width: 1400px;
  width: 100%;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 2px 15px 25px #555;
  background-color: #fff;
}

.decision {
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: white;
  background-color: red;
  margin-bottom: 5px
}
</style>
