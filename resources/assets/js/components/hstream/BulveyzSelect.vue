<template>
    <div class="w-100 position-relative">
        <select v-show="false">
            <option :value="value"></option>
        </select>
        <div @click="show = !show" class="select form-control" :class="[{['show']: show}]">
            <i class="icon mr-1" :class="icon"></i>
            <span class="default-title" v-if="selectedOptionId == -1 && !activety">{{title}}</span>
            <span v-if="activety">{{activetyComponent.name}}</span>
            <span v-else-if="selectedOptionId != -1">{{options[selectedOptionId]['name']}}</span>

            <i v-if="show" class="mt-1 fa fa-angle-up float-right mr-3"></i>
            <i v-else class="mt-1 fa fa-angle-down float-right mr-3"></i>
        </div>
        <div v-show="show" class="select-list border">
            <div :class="[{'active': activeClass(option.name, index)}, 'select-item']"
                 class="select-item" v-for="(option, index) in options"  :key="index"
                 @click="selected(option.value, index, activeClass(option.name, index))">{{option.name}}
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      placeholder: String,
      active: String,
      required: {
        type: Boolean,
        default: false
      },
      icon: String
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
      activeClass(name, index) {
        if (this.activety) {
          if (this.activetyComponent.name == name) {
            return true;
          }
        } else {
          if (index == this.selectedOptionId) {
            return true;
          } else {
            return false;
          }

        }
      },
      setOptions() {
        this.options = this.$children;
      },
      selected(value, index, target) {
        if (this.activety) {
          this.activety = false;
          this.activetyComponent = null;
        }
        if (target) {
          if (!this.required) {
            this.selectedOptionId = -1;
            this.value = null;
            this.$emit('input', null);
          }
        } else {
          this.selectedOptionId = index;
          this.value = value;
          this.$emit('input', value);
        }
      },
      findActive() {
        this.options.forEach(option => {
          if (option.value == this.active) {
            this.activetyComponent = option;
            this.activety = true;
          }
        });
        this.value =  this.active;
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
        background-color: #59287a !important;
        color: #fff !important;
    }

    .select.show {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .select-list {
        position: absolute;
        top: 39px;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 999;
        border-bottom-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
        border-bottom: 3px solid #59287a !important;
    }

    .select:hover,  .select-list:hover{
        cursor: pointer;
    }

    .select-item:hover {
        background-color: #59287a;
        color: #fff
    }

    .select-item {
        padding: .5rem .8rem;
        font-size: 1rem;
        line-height: 1.5;
        transition: .3s;
    }

    .default-title {
        color: #8c98a4 !important;
    }

    .form-control .fa {
        color: #8c98a4
    }
</style>
