<template>
  <div class="search">
    <back></back>
    <!-- 传递subjects给movieCard组件 -->
    <movie-card v-bind:subjects="items"></movie-card>
  </div>
</template>
<script>
import Back from '@/views/partials/Back.vue';
import MovieCard from '@/views/partials/MovieCard.vue';

import api from '@/api/index';

export default {
  components: {
    Back,
    MovieCard
  },
  data() {
    return {
      items: {}
    }
  },
  watch: {
    //路由变更时重新获取数据
    '$route': 'fetchSearchMovie'
  },
  methods: {
    async fetchSearchMovie() {
      this.items = await api.fetchSearchData(this.$route.path, this.$route.query.q).then((res) => {
        return res.data.subjects
      })
    }
  },
  mounted() {
    //组件挂载时取得数据
    this.fetchSearchMovie()
  }
}
</script>
<style lang="scss" scoped>

</style>
