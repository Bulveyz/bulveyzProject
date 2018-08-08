<template>
<div>
    <ul class="nav nav-pills mb-3" :class="{'nav-justified': navJusty}">
        <li class="nav-item" v-for="tab in tabs">
            <a class="nav-link" @click="changeTab(tab)" :class="{'active': tab.activee}" :href="tab.ide">
                <i class="mr-1" :class="tab.icon"></i> <span :class="{'text-primary': !tab.activee}">{{tab.title}}</span>
            </a>
        </li>
    </ul>
    <slot></slot>
</div>
</template>

<script>
  export default {
    props: {
      navJusty: {
        default: false
      }
    },
    data() {
      return {
        tabs: []
      }
    },
    methods: {
      tabsCollection() {
        this.tabs = this.$children;
      },
      changeTab(item) {
        this.tabs.forEach(tab => {
          tab.activee = (item._uid == tab._uid)
        });
      }
    },
    created() {
      this.tabsCollection();
    }
  }
</script>

<style scoped>

</style>