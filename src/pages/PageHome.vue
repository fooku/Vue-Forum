<template>
  <div class="col-full">
    <h1>Wellcome to the forum</h1>

    <CategoryList :categories="categories"/>
  </div>
</template>

<script>

import CategoryList from '@/components/CategoryList'
console.log(this.$store.state)

export default {
  name: 'HelloWorld',
  components: {
    CategoryList
  },
  data () {
    return {
      categories: Object.values(this.$store.state.categories)
    }
  }
}
</script>
