<template>
  <div class="header">
    <router-link to="/">
      <span class="title">电影</span>
    </router-link>
    <input type="text" name="" id="searchIpt" placeholder="请输入搜索内容" v-show="showLogic" v-model="query" v-on:keyup.enter="search">
    <span class="searchBtn" v-on:click="iptShow">
      <img v-bind:src="imgSrc" alt="">
    </span>
  </div>
</template>
<script>
import searchIcon from '@/assets/search.png';
import closeIcon from '@/assets/close.png';

export default {
  data() {
    return {
      query: '',
      path: '/search',
      imgSrc: searchIcon,
      showLogic: false
    }
  },
  methods: {
    search() {
      //搜索，路由跳转，取得路由参数
      this.$router.push({ path: this.path, query: { q: this.query } });
      this.query = '';
    },
    iptShow() {
      //搜索输入框显示
      if (this.showLogic === false) {
        this.showLogic = true;
        this.imgSrc = closeIcon;
      } else {
        this.showLogic = false;
        this.imgSrc = searchIcon;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$headerColor: #268dcd;
.header {
  height: 30px;
  line-height: 30px;
  width: 100%;
  position: relative;
  .title {
    font-size: 20px;
    color: $headerColor;
  }
  #searchIpt {
    position: absolute;
    right: 14%;
    top: 5px;
    padding: 2px 4px;
    border-width: 0 0 2px 0;
    width: 70%;
    &:focus {
      border-width: 0 0 2px 0;
      border-color: $headerColor;
      outline: 0;
    }
  }
  .searchBtn {
    position: absolute;
    right: 5px;
    top: 5px;
    img {
      width: 20px;
    }
    &:hover{
      cursor: pointer;
    }
  }
}
</style>

