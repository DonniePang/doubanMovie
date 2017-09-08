<template>
  <div class="search">
    <loading v-bind:loading="loading"></loading>
    <back></back>
    <div class="searchResult">搜索"{{query}}"的结果</div>
    <!-- 传递 subjects 给 movieCard 组件 -->
    <movie-card v-bind:subjects="items"></movie-card>
    <div v-on:click="loadMore">
      <load-more v-bind:noMore="noMore"></load-more>
    </div>
  </div>
</template>
<script>
import Back from '@/views/partials/Back.vue';
import LoadMore from '@/views/partials/LoadMore.vue';
import Loading from '@/views/partials/Loading.vue';
import MovieCard from '@/views/partials/MovieCard.vue';

import api from '@/api/index';

export default {
  components: {
    Back,
    LoadMore,
    Loading,
    MovieCard
  },
  data() {
    return {
      query: '',
      start: 0,
      total: 0,
      items: [],
      data: {},
      noMore: true,
      loading: false
    }
  },
  watch: {
    //路由变更时重新获取数据
    '$route': 'loadAgain'
  },
  methods: {
    loadAgain() {
      this.query = this.$route.query.q;
      this.start = 0;
      this.total = 0;
      this.items = [];
      this.noMore = true;
      this.loadMore();
    },
    async loadMore() {
      this.loading = true;
      this.data = await api.fetchSearchData(this.$route.path, this.$route.query.q, this.start).then((res) => {
        return res.data
      });
      this.query = this.$route.query.q;
      this.start += 20;
      this.total = this.data.total;
      this.items = this.items.concat(this.data.subjects);
      if(this.start >= this.total) {
        this.noMore = false
      }
      this.loading = false;
    }
  },
  mounted() {
    //组件挂载时取得数据
    this.loadAgain();
  }
}
</script>
<style lang="scss" scoped>
.searchResult{
  text-align: center;
}
</style>
