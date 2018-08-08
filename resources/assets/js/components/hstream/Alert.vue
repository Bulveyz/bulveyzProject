<template>
    <div :class="['alert show fade', 'bg-' + status, {'text-white': status != 'light'}, {'rounded-0': fullWidth}]" role="alert">
        <div :class="['d-flex', {'container': fullWidth}]">
            <div class="alert__icon mr-3">
                <i :class="icon"></i>
            </div>

            <div class="align-self-center mr-3">
                <slot></slot>
            </div>

            <div class="ml-auto">
                <button type="button" class="alert__close alert__close--light" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "hs-alert",
    props: {
      icon: String,
      status: {
        default: 'primary'
      },
      fullWidth: {
        default: false
      }
    },
    directives: {
      focus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>