<template>
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" class="form-control"
           :class="[objectClasses, 'is-' + valid]">
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    props: {
      pilled: {
        default: false
      },
      disabled: {
        default: false
      },
      leftIcon: {
        default: false
      },
      rightIcon: {
        default: false
      },
      valid: {}
    },
    computed: {
      objectClasses() {
        return {
          'form--pill': this.pilled
        }
      }
    }
  }
</script>

<style scoped>

</style>