<template>
  <div class="movieList">
    <div class="movieCard" v-for="subject in subjects" v-bind:key="subject.id">
      <div class="cover">
        <img v-bind:src="subject.images.large" alt="">
      </div>
      <div class="info">
        <router-link :to="{ name: 'Subject', params: { id: subject.id }}">
          <span class="movieTitle">{{subject.title}}</span>
        </router-link>
        <span class="movieRating">{{subject.rating.average}}分</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['subjects'],
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.movieList {
  min-height: calc(100vh - 120px);
  width: calc( 100% - 10px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
  .movieCard {
    margin-top: 10px;
    margin-right: 10px;
    width: calc( 50% - 12px);
    @media screen and (min-width: 576px) {
      width: calc( 50% - 12px)
    }
    @media screen and (min-width: 768px) {
      width: calc( 33.33% - 12px)
    }
    @media screen and (min-width: 992px) {
      width: calc( 25% - 12px)
    }
    @media screen and (min-width: 1200px) {
      width: calc( 20% - 12px)
    }
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    .cover {
      width: 100%;
      height: calc( 100% - 45px);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      padding-top: 10px;
      height: 35px;
      position: relative;
      .movieTitle {
        position: absolute;
        left: 10px;
      }
      .movieRating {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>
