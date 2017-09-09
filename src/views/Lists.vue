<template>
  <div class="lists">
    <loading v-bind:loading="loading"></loading>
    <div class="tabBar">
      <div class="tab" v-bind:class="{target: path === tab.path}" v-for="tab in tabs" :key="tab.index" v-on:click="changePath(tab.path)">{{tab.title}}</div>
    </div>
    <!-- 传递 subjects 给 movieCard 组件 -->
    <movie-card v-bind:subjects="items"></movie-card>
    <div v-on:click="loadMore">
      <load-more v-bind:noMore="noMore"></load-more>
    </div>
  </div>
</template>

<script>
import LoadMore from '@/views/partials/LoadMore.vue';
import Loading from '@/views/partials/Loading.vue';
import MovieCard from '@/views/partials/MovieCard.vue';

import api from '@/api/index';

export default {
  data() {
    return {
      tabs: [
        {
          path: 'in_theaters',
          title: '正在热映'
        },
        {
          path: 'coming_soon',
          title: '即将上映'
        }
      ],
      path: 'in_theaters',
      start: 0,
      total: 0,
      items: [],
      data: {},
      noMore: true,
      loading: false
    }
  },
  components: {
    LoadMore,
    Loading,
    MovieCard
  },
  methods: {
    changePath(path) {
      this.path = path;
      this.loadAgain();
    },
    loadAgain() {
      this.start = 0;
      this.total = 0;
      this.items = [];
      this.noMore = true;
      this.loadMore();
    },
    async loadMore() {
      this.loading = true;
      this.data = await api.fetchList(this.path, this.start).then((res) => {
        return res.data
      });
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
    this.loadAgain()
  }
}
</script>

<style lang="scss" scoped>
  .lists{
    min-height: calc(100vh - 120px);
    .tabBar{
      margin-top: 10px;
      height: 30px;
      width: 100%;
      display: flex;
      .tab{
        flex: 50%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
      }
      .target{
        border-bottom: 2px solid #268dcd;
        color: #268dcd;
      }
    }
  }
</style>
