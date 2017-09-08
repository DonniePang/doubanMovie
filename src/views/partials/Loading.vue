<template>
  <div v-show="loading" class="loading">
    <img v-bind:src="loadingIcon" alt="">
  </div>
</template>
<script>
import loadingIcon from '@/assets/loading.png';

export default {
  props: ['loading'],
  data() {
    return {
      loadingIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  img {
    width: 100px;
    height: 100px;
    margin: auto;
    animation: spin 2s infinite;
    @keyframes spin {
      to {
        transform: rotate(1turn)
      }
      ;
    }
  }
}
</style>
