import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playersLife: 100,
    enemyLife: 100
  },
  getters: {
    getEnemyLife(state) {
      return state.enemyLife
    },
    getLife(state) {
      return state.playersLife
    }
  },
  mutations: {
    setAttackMovement(state, {playerAttack, enemyAttack}) {
      if(enemyAttack < state.playersLife) {
        state.playersLife -= enemyAttack
      }
      else {
        state.playersLife = 0;
      }

      if(playerAttack < state.enemyLife) {
        state.enemyLife -= playerAttack;
      }
      else {
        state.enemyLife = 0
      }
    },

    setMorePlayersLife(state, addLife) {
      if ((addLife + state.playersLife) <= 100) {
        state.playersLife += addLife
      }
      else {
        state.playersLife = 100;
      }
    },

    setSpecialAttack(state, specialAttack) {
      state.enemyLife -= specialAttack
    }
  },
  actions: {},
  modules: {},
});
