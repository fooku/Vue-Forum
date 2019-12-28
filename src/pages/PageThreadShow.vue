<template>
  <div>
    <div class="col-large push-top">
      <h2>{{ thread.title }}</h2>

      <p>
        By <a href="#" class="link-unstyled">{{user.name}}</a>
        , <AppDate :timestamp="thread.publishedAt"/>
        <span
          style="float:right; margin-top: 2px;"
          class="hide-mobile text-faded text-small"
          >3 replies by 3 contributors</span
        >
      </p>
      <PostList :posts="post" />

      <PostEditor @addPost="addPost" :thresdId="id" />
    </div>
  </div>
</template>

<script>

import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: this.$store.state.threads[this.id],
      posts: this.$store.state.posts
    }
  },
  computed: {
    post () {
      const postsId = Object.values(this.thread.posts)
      return Object.values(this.posts).filter(post =>
        postsId.includes(post['.key'])
      )
    },
    user () {
      return this.$store.state.users[this.thread.userId]
    }
  },
  methods: {
    addPost (post) {
      const postId = post['.key']
      this.$set(this.$store.state.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(this.$store.state.users[post.userId].posts, postId, postId)
    }
  },
  mounted () {
    console.log(this.thread)
  }

}
</script>
