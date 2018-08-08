<template>
    <div class="shadow rounded position-relative u-custom-overlay-block float-lg-right">
        <div :class="classObject" class="u-custom-overlay rounded d-flex justify-content-center align-items-center">
            <div class="u-custom-overlay-content text-white">
                <slot></slot>
            </div>
        </div>
        <img class="img-fluid rounded" :src="img" alt="Image">
    </div>
</template>

<script>
  export default {
    name: "HoverOverlay",
    props: {
      img: {
        type: String
      },
      hover: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      classObject: function () {
        return {
          'hover': this.hover,
          'no-hover': !this.hover
        }
      }
    }
  }
</script>

<style scoped>
    .u-custom-overlay-block {
        overflow: hidden;
    }

    .u-custom-overlay-block:hover  .u-custom-overlay {
        top: 0;
    }

    .u-custom-overlay {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(89, 40, 122, 0.66);
        transition: .5s;
    }

    .hover {
        top: 100%;
    }

    .no-hover {
        top: 0;
    }
</style>