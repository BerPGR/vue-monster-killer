<template>
  <div>
    <button :style="{backgroundColor: bgColor}" @click.prevent="">{{ buttonName }}</button>
  </div>
</template>

<script>
export default {
    name: 'SelectionComponent',
    props: {
      buttonName: {
        type: String,
        required: true
      },
      playerAction: {
        type: Function,
        required: true
      },
      bgColor: {
        type: String
      }
    },
}
</script>

<style>
button {
  width: 200px;
  padding: 10px;
  background-color: red;
  color: white;
  font-weight: bold;
}
</style>