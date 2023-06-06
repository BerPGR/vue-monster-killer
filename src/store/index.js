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
    }
  },
  mutations: {
    setAttackMovement(state, playerAttack) {
      if(playerAttack < state.enemyLife) {
        state.enemyLife -= playerAttack;
      }
      else {
        state.enemyLife = 0
      }
    }
  },
  actions: {},
  modules: {},
});
