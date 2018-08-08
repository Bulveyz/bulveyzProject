<template>
    <div :id="ide" v-if="activee">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      ide: String,
      title: String,
      active: {
        type: Boolean,
        default: false
      },
      icon: String
    },
    data() {
      return {
        activee: this.active
      }
    }
  }
</script>

<style scoped>

</style>