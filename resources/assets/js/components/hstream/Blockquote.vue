<template>
    <blockquote class="blockquote-v1" :class="classesObject">
        <slot></slot>
        <footer class="blockquote-footer">
            <slot name="footer"></slot>
        </footer>
    </blockquote>
</template>

<script>
  export default {
    props: {
      lineAlign: {
        default: 'left',
      }
    },
    computed: {
      classesObject() {
        return {
          'blockquote-v1--left': this.lineAlign == 'left',
          'blockquote-v1--right text-right': this.lineAlign == 'right',
          'text-center': this.lineAlign == 'center'
        }
      }
    }
  }
</script>

<style scoped>

</style>