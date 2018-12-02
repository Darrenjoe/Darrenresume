<template>
  <div class="myhomemap">
    <p class="title">Hello, I'am Darren</p>
      <strong class="desc">You can't change the past, but you can change the future.</strong>
      <p class="text">我是熊靖，一个前端工程师</p>
      <a href="https://github.com/Darrenjoe" target="_blank">https://github.com/Darrenjoe</a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.myhomemap
  padding: 30px 20px
  height 100%
  width 100%
  font-size 70px
  border-radius 10px
  transition all 1.5s
  &:hover
    box-shadow 0 0 60px black
    background rgba(245,245,245,0.5)
  .title
    line-height 60px
    font-family Hobo Std
    color rgba(0,0,0, 0.8)
  .desc
    margin-top 40px
    color rgba(0,0,0, 0.8)
    font-size 24px
    font-weight 900
  .text
    margin-top 30px
    font-size: 30px
  a
    margin-top 20px
    font-size 20px
    color rgba(125, 39, 6, .8)
</style>
