<template>
  <div class="container">
    <p>The terrible monster</p>
    <div class="lifecontainer">
      <div class="life"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LifeComponent',
    data: () => ({
        life: 100,
    })
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
  width: 400px;
  position: absolute;
}
</style>