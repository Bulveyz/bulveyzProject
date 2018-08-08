<template>
    <div class="custom-control custom-radio mb-2">
        <input :value="value" :checked="checked" @change="update" :disabled="disabled"
               :class="['custom-control-input', 'is-' + valid]" :name="name" :id="id" type="radio">
        <label class="custom-control-label u-font-size-90" :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    model: {
      prop: 'model',
      event: 'change'
    },
    props: {
      name: String,
      ked: {
        default: false
      },
      id: {
        required: true
      },
      disabled: {
        default: false
      },
      valid: String,
      value: {
        default: null
      },
      model: {
        default: false
      },
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
    },
    computed: {
      checked() {
        if (this.model != this.trueValue) {
          return this.model == this.value;
        } else {
          return this.model == this.trueValue
        }
      }
    },
    methods: {
      update() {
        this.$emit('change', this.value);
      }
    }
  }
</script>

<style scoped>

</style>