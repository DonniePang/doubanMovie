<template>
  <div class="backBar">
    <span class="back" v-on:click="goBack">
      <img v-bind:src="backIcon" alt="">
    </span>
  </div>
</template>
<script>
import backIcon from '@/assets/back.png';

export default {
  data() {
    return {
      backIcon,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.backBar {
  height: 30px;
  position: relative;
  .back {
    position: absolute;
    left: 5px;
    top: 5px;
    &:hover{
      cursor: pointer;
    }
    img {
      width: 20px;
    }
  }
}
</style>
