<template>
  <form @submit.prevent="addPost">
    <div class="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-input"
        v-model="newPostText"
      ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  props: {
    thresdId: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      newPostText: ''
    }
  },
  methods: {
    addPost () {
      const postId = 'greatPost' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
        '.key': postId
      }
      this.newPostText = ''
      this.$emit('addPost', post)
    }
  }
}
</script>

<style lang="scss" scoped></style>
