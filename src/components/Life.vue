<template>
  <div class="container">
    <p>You</p>
    <div class="life"></div>
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
.life {
    border: 2px solid black;
    background-color: greenyellow;
    height: 20px;
    width: 400px;
    margin-top: 20px;
}
</style>