<template>
    <nav aria-label="Bootstrap Pager Example">
        <ul class="list-unstyled d-flex justify-content-between align-items-center mb-0">
            <li>
                <a onclick="return false" :href="prevPage" :class="['btn btn-primary pager-btn', {'disabled': value == 1}]" @click="valueLocal--"><span class="mr-1">&larr;</span>
                    {{prevText}}</a>
            </li>
            <li>
                <span class="text-muted">Page {{value}} of {{pages}}</span>
            </li>
            <li>
                <a onclick="return false" :href="nextPage" :class="['btn btn-primary pager-btn', {'disabled': value == pages}]" @click="valueLocal++">{{nextText}} <span class="ml-1">&rarr;</span></a>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    props: {
      pages: {
        default: 1
      },
      prevText: {
        default: 'Previous'
      },
      nextText: {
        default: 'Next'
      },
      nextPage: {
        default: '#htmlstram-pager'
      },
      prevPage: {
        default: '#htmlstram-pager'
      },
      value: {
        default: 1
      }
    },
    data() {
      return {
        valueLocal: this.value
      }
    },
    watch: {
      valueLocal() {
        this.updatePager();
      }
    },
    methods: {
      updatePager() {
        this.$emit('input', this.valueLocal)
      }
    }
  }
</script>

<style scoped>

</style>