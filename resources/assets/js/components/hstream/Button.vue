<template>
    <button :type="buttonType" class="btn btn-primary" v-bind:class="[classObject, 'btn-' + buttonSize, 'btn-' + buttonColor, {'btn--circle': circle}, 'btn-outline-' + buttonOutlineColor]">
       <i :class="icon"></i> <slot></slot>
    </button>
</template>

<script>
  export default {
    props: {
      block: {
        default: false
      },
      circle: {
        default: false
      },
      icon: {
        default: ""
      },
      pilled: {
        default: false
      },
      buttonType: {
        default: "submit"
      },
      buttonSize: {
        default: ""
      },
      buttonColor: {
        default: ""
      },
      buttonOutlineColor: {
        default: ""
      }
    },
    computed: {
      classObject: function () {
        return {
          'rounded-0': this.rounded,
          'btn--pill': this.pilled,
          'btn-block': this.block
        }
      }
    }
  }
</script>

<style scoped>

</style>