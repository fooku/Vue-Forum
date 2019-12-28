<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{ name: 'PageForum', params: { id: forum['.key'] } }"
      >
        {{ forum.name }}</router-link
      >
      <a class="text-xlarge" href="#"></a>
      <p>{{ forum.description }}.</p>
    </div>

    <div class="threads-count">
      <p><span class="count">{{threadCount}}</span> thread</p>
    </div>

    <div class="last-thread">
      <img
        class="avatar"
        src="#"
        alt=""
      />
      <div class="last-thread-details">
        <a href="thread.html">Post Reactions</a>
        <p class="text-xsmall">
          By <a href="profile.html">Rolf Haug</a>, a month ago
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumListItem',
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadCount () {
      return this.forum.threads
        ? Object.values(this.forum.threads).length
        : 0
    }
  },
  mounted () {
    console.log(this.forum)
  }
}
</script>

<style lang="scss" scoped></style>
