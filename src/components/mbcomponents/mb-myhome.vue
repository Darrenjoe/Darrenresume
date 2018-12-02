<template>
  <div class="mb-myhome">
    <div class="avatar">
      <img width="100%" height="100%" src="../../assets/mbavator.jpg">
    </div>
    <p class="title">Hello, I'am Darren</p>
    <p class="desc">You can't change the past, but you can change the future</p>
    <p class="text">我是熊靖</p>
    <p class="text">一个前端工程师</p>
    <contact></contact>
  </div>
</template>

<script>
import Contact from '../contact/contact'
export default {
  components: {
    Contact
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width 520px)
  .mb-myhome
    padding 15% 0 5% 0
    background-color rgba(205,205,205, 0.9)
    line-height 2rem
    .avatar
      width 25%
      height 25%
      margin 0 auto 2%
      img
        border-radius 50%
    .title
      font-size 26px
      font-family Hobo Std
      color rgba(0,0,0, 0.8)
    .desc
      color rgba(0,0,0, 0.8)
      font-size 20px
    .text
      font-size: 16px
@media screen and (max-width 519px)
  .mb-myhome
    padding 15% 0 5% 0
    background-color rgba(205,205,205, 0.9)
    line-height 2rem
    .avatar
      width 25%
      height 25%
      margin 0 auto 2%
      img
        border-radius 50%
    .title
      font-size 21px
      font-family Hobo Std
      color rgba(0,0,0, 0.8)
    .desc
      color rgba(0,0,0, 0.8)
      font-size 16px
    .text
      font-size: 14px
</style>
