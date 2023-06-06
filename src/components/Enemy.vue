<template>
  <div class="container">
    <p>The terrible monster</p>
    <div class="life"></div>
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
.life {
    border: 2px solid black;
    background-color: red;
    height: 20px;
    width: 400px;
    margin-top: 20px;
}
</style>