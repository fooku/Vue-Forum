<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{ name: 'PageThreadShow' , params: { id: thread['.key']}}" >{{thread.title}}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} reply
      </p>

      <!-- <div>
        <p class="text-xsmall">
          <a href="#">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import sourceDate from '@/data'

export default {
  name: 'ThreadListItem',
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1
    },
    user () {
      return sourceDate.users[this.thread.userId]
    }
  }
//   mounted () {
//     console.log(this.thread['.key'])
//   }
}
</script>
