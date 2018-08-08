<template>
    <div class="custom-control custom-checkbox mb-2">
        <input :checked="checked" @change="update" :value="value" :required="required" type="checkbox"
               :class="['custom-control-input', 'is-' + valid]" :name="name" :id="id" :disabled="disabled">
        <label class="custom-control-label u-font-size-90" :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
  export default {
    model: {
      prop: 'model',
      event: 'change'
    },
    props: {
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
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        default: false
      },
      valid: String,
    },
    methods: {
      update(e) {
        let checked = e.target.checked;
        if (this.model instanceof Array) {
          let value = [...this.model];
          (checked) ? value.push(this.value) : value.splice(value.indexOf(this.value), 1);
          this.$emit('change', value);
        } else {
          this.$emit('change', checked ? this.trueValue : this.falseValue);
        }
      }
    },
    computed: {
      checked() {
        return (this.model instanceof Array) ? this.model.includes(this.value) : this.model === this.trueValue
      }
    },
  }
</script>

<style scoped>


</style>