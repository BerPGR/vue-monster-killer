<template>
  <div class="container">
    <p>You</p>
    <div class="lifecontainer">
      <div class="life"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LifeComponent',
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
  background-color: green;
  height: 17px;
  width: 400px;
  position: absolute;
}
</style>