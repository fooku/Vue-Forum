<template>
     <span :title="timestamp | dateFormat">
       {{timestamp | dateFormatDiff}}
    </span>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AppDate',
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  filters: {
    dateFormat (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    dateFormatDiff (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
