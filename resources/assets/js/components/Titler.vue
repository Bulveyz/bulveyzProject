<template>
    <div class="row justify-content-center">
        <div class="text-center titler">
            <h2 class="title-letter-spacing">{{title}}</h2>
            <div class="titler-line"></div>
            <p class="title-subtitle"><slot></slot></p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Titler",
    props: ['title']
  }
</script>

<style scoped>
    .titler h2:after {
        background: #59287a;
        bottom: -13px;
        content: "";
        display: block;
        height: 2px;
        position: relative;
        width: 100px;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 23px;
    }
</style>