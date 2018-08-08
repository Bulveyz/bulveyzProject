<template>
    <span class="form-icon-wrapper">
        <span class="form-icon" :class="'form-icon--' + iconAlign">
          <i :class="icon" class="form-icon__item"></i>
        </span>
         <input :name="name" :disabled="disabled" :type="type" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"
                class="form-control"
                :class="[objectClasses, 'form-icon-input-' + iconAlign, 'is-' + valid]">
      </span>
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
      type: {
        default: 'text'
      },
      disabled: {
        default: false
      },
      icon: {
        required: true
      },
      iconAlign: {
        default: 'left'
      },
      placeholder: {
        default: null
      },
      disabled: {
        default: false
      },
      valid: {},
      name: {}
    },
    computed: {
      objectClasses() {
        return {
          'form--pill': this.pilled,
        }
      }
    }
  }
</script>

<style scoped>

</style>