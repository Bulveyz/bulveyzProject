<template>
    <div>
        <h5 class="u-font-size-90 mb-1">{{title}} - {{procent}}</h5>
        <div class="progress mb-3">
            <div class="progress-bar bg-primary" role="progressbar" :style="{width: procent}" :aria-valuenow="procent" :aria-valuemin="procent" aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['procent', 'title']
  }
</script>

<style scoped>

</style>