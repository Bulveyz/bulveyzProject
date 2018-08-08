<template>
    <li class="list-group-item">
        <div class="media">
            <div class="d-flex mr-3">
                <img v-if="img" class="rounded-circle u-box-shadow-sm mt-1" width="40" height="40" :src="img" alt="Htmlstream">
            </div>
            <div class="media-body">
                <p class="mb-0"><strong :class="{'mr-2': !bage}">{{title}}</strong> <span v-if="bage" class="badge mr-1" :class="'badge-' + bageStatus">{{bage}}</span> {{action}}</p>
                <span class="u-font-size-75 text-dark">{{time}}</span>
            </div>
        </div>
    </li>
</template>

<script>
  export default {
    props: {
      title: String,
      time: String,
      img: {
        default: false
      },
      action: String,
      bage: {
        default: false
      },
      bageStatus: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>

<style scoped>

</style>