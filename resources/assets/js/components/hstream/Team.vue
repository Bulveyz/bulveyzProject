<template>
    <figure>
        <img class="w-100 rounded-top" :src="avatar" alt="Image Description">

        <!-- Figure Info -->
        <div class="u-box-shadow-sm bg-white text-center rounded p-4">
            <div class="mb-3">
                <h5 class="mb-1">{{title}}</h5>
                <small class="d-block font-style-normal text-uppercase text-primary u-letter-spacing-xs">{{subtitle}}</small>
            </div>
        </div>
        <!-- End Figure Info-->
    </figure>
</template>

<script>
  export default {
    props: ['avatar', 'title', 'subtitle']
  }
</script>

<style scoped>

</style>