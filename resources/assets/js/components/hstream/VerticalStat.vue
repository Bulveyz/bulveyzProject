<template>
    <div class="col-3 text-center">
        <div class="u-progress-bar-vertical rounded mb-3">
            <div class="u-progress-bar-vertical__indicator rounded-bottom" :style="{height: procent}"></div>
        </div>
        <div class="small">{{procent}}</div>
        <h4 class="h6">{{title}}</h4>
    </div>
</template>

<script>
  export default {
    props: ['procent', 'title']
  }
</script>

<style scoped>

</style>