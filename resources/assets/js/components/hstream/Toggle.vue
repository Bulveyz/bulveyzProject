<template>
    <div :class="['is-' + valid, 'form-group']">
        <label class="d-flex align-items-center u-font-size-90" :class="[{'justify-content-between': justy}]">
            <span class="form-label-text" :class="['mr-' + marginToggle]"><slot></slot></span>
            <div class="form-toggle">
                <input :disabled="disabled" :value="value" :checked="checked" :required="required" :id="id" @change="update" :name="name" type="checkbox">
                <div class="form-toggle__item">
                    <i v-if="icons" class="fa" data-check-icon="" data-uncheck-icon=""></i>
                    <i v-else class="d-inline-block"></i>
                </div>
            </div>
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
      icons: String,
      model: {
        default: false
      },
      justy: {
        type: Boolean,
        default: true,
      },
      trueValue: {
        default: true
      },
      marginToggle: {
        type: String,
        default: 'false'
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