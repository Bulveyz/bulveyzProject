<template>
    <div class="coder position-relative h-auto">
        <hs-toggle :justy="false" margin-toggle="3" id="1" value="1" v-model="show"><span class="text-uppercase" v-if="show">Show Result</span><span class="text-uppercase" v-else>Show Code</span>
        </hs-toggle>
        <div class="result" v-show="!show">
            <slot name="result"></slot>
        </div>
        <div class="code" v-show="show">
                <pre class="mb-4">
                <code class="language-html" data-lang="html">
                <slot name="code"></slot>
                </code></pre>
        </div>
    </div>
</template>

<script>
  import HsToggle from './Toggle'

  export default {
    components: {
      HsToggle
    },
    data() {
      return {
        show: false
      }
    },
  }
</script>

<style scoped>
    .coder {
        overflow: hidden;
    }

    .result {
        transition: .8s;
        transition-delay: 1s !important;
    }

    .slide-result-left {
        transform: translateX(-100%);
        opacity: 0;
        transition-delay: 0s !important;
    }

    .slide-code-left {

    }
</style>