<template>
    <div>
        <select v-show="false">
            <option :value="value"></option>
        </select>
        <div @click="show = !show" class="select border p-2 px-5">
            <span v-if="selectedOptionId == -1 && !activety">{{title}}</span>
            <span v-if="activety">{{activetyComponent.name}}</span>
            <span v-else-if="selectedOptionId != -1">{{options[selectedOptionId]['name']}}</span>

            <i v-if="show" class="mt-1 fa fa-angle-up float-right"></i>
            <i v-else class="mt-1 fa fa-angle-down float-right"></i>
        </div>
        <div v-show="show" class="select-list h-30 p-2 border">
            <div :class="[{'active': selectedOptionId == index || activeClass(option.name)}, 'p-2 px-5']"
                 class="select-item" v-for="(option, index) in options"  :key="index"
                 @click="selected(option.value, index)">{{option.name}}
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      placeholder: String,
      active: String
    },
    data() {
      return {
        title: this.placeholder,
        show: false,
        value: null,
        selectedOptionId: -1,
        options: [],
        activety: false,
        activetyComponent: null
      }
    },
    methods: {
      activeClass(name) {
        if (this.activety) {
          if (this.activetyComponent.name == name) {
            return true;
          }
        } else {
          return false;
        }
      },
      setOptions() {
        this.options = this.$children;
      },
      selected(value, index) {
        this.activety = false;
        this.value = value;
        this.selectedOptionId = index;
        this.$emit('input', value);
      },
      findActive() {
        this.options.forEach(option => {
          if (option.value == this.active) {
            this.activetyComponent = option;
            this.activety = true;
          }
        });
        this.$emit('input', this.active);
      }
    },
    created() {
      this.setOptions();
    },
    mounted() {
      if (this.active) {
        this.findActive();
      }
    }
  }
</script>

<style scoped>
    .active {
        background: #ddd;
    }
</style>