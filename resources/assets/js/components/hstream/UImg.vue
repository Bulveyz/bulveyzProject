<template>
    <img :class="['img-fluid', {'rounded': !circle}, {'u-box-shadow-lg': shadow}, {'rounded-circle': circle}, {'img-thumbnail': thumb}]" :src="src" :alt="alt">
</template>

<script>
  export default {
    props: ['shadow', 'src', 'circle', 'thumb', 'alt']
  }
</script>

<style scoped>

</style>