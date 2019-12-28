<template>
  <div class="forum-list">

    <CategoryListItem v-for="category in categories" :category="category" :key="category['.key']"/>
  </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem.vue'
export default {
  name: 'CategoryList',
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped></style>
