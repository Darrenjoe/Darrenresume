<template>
  <div class="aboutmemap">
    <div class="avatar">
      <img width="100%" height="100%" src="../../assets/avator.jpg">
    </div>
    <div class="abouttext">
      <p class="abouttitle">您好，我是熊靖，一个前端爱好者，大三的时候开始接触前端。当那些酷炫的页面效果展现我面前的时候，我心动了，拿起书本自学前端，从html、css到javascript，从类库到框架，前端的发展很快，目前在深入学习vue、react。作为一个前端都有一个梦想--全栈工程师，希望自己能够更快的成长</p>
      <p class="aboutdesc">Web in all</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.aboutmemap
  padding: 20px
  height 100%
  width 100%
  .avatar
    margin: 0 auto 20px
    width: 160px
    height: 160px
    img
      border-radius: 50%
      transition all 0.5s
      &:hover
        box-shadow 0 0 10px blue
        transform scale(1.1,1.1)
  .abouttext
    font-family: '方正舒体'
    text-align: left
    line-height: 40px
    font-size: 28px
    color #fff
    .abouttitle
      text-indent: 2em
    .aboutdesc
      font-family: Monotype Corsiva
      margin-top: 20px
      font-size: 50px
      text-align: center
</style>
