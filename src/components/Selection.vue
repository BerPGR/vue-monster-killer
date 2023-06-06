<template>
  <div>
    <button 
      :style="{backgroundColor: bgColor, color: bgColor == 'yellow' || bgColor == 'aqua' ? 'black' : 'white'}" 
      @click="executePropFunction"
    >
      {{ buttonName }}
    </button>
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
    methods: {
      executePropFunction() {
        this.playerAction()
      }
    }
}
</script>

<style>
button {
  width: 200px;
  padding: 5px;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
</style>