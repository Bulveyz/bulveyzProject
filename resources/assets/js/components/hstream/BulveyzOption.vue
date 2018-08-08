<template></template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        index: 0
      }
    }
  }
</script>
