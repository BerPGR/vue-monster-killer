<template>
  <div class="container">
    <p>The terrible monster</p>
    <div class="lifecontainer">
      <div class="life" :style="{width: `${life * 4}px`}"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LifeComponent',
    computed: {
      ...mapGetters({
        life: 'getEnemyLife'
      })
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
.lifecontainer {
    border: 2px solid black;
    height: 20px;
    width: 403px;
    margin-top: 20px;
    position: relative;
}

.life {
  background-color: red;
  height: 17px;
  position: absolute;
  z-index: 2;
}
</style>