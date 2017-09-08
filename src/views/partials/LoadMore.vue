<template>
  <p v-if="noMore" class="loadMore">点击加载更多</p>
  <p v-else class="noMore">
      无更多内容
  </p>
</template>
<script>
export default {
  props: ['noMore']
}
</script>

<style lang="scss" scoped>
.loadMore {
  text-align: center;
  &:hover{
    cursor: pointer;
  }
}
.noMore{
  text-align: center;
}
</style>
