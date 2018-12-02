<template>
  <div class="contact">
    <a href="https://github.com/Darrenjoe" title="Github" target="_blank">
      <i class="icon iconfont icon-github">
        <span>Github</span>
      </i>
    </a>
    <a href="javacript;" title="QQ" target="_blank">
      <i class="icon iconfont icon-QQ">
      <span>
        <img src="../../assets/qq.png">
      </span>
    </i>
    </a>
    <a href="javacript;" title="WX" target="_blank">
      <i class="icon iconfont icon-wechat">
        <span>
          <img src="../../assets/wx.png">
        </span>
      </i>
    </a>
    <a href="https://weibo.com/u/2841141302?is_hot=1" title="Weibo" target="_blank">
      <i class="icon iconfont icon-weibo">
        <span>微博互关</span>
      </i>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@media screen and (min-width 1001px)
  .contact
    height 100px
    width 100%
    a
      margin-left 20px
      height 22px
      width 22px
      .icon
        position relative
        width 50px
        font-size 35px
        color skyblue
        &:hover
          color blue
          span
            display block
        span
          display none
          position absolute
          text-align center
          width 140px
          font-size 20px
          color white
          bottom 45px
          left -50px
          img
            width 140px
            height 140px
@media screen and (max-width 1000px)
  .contact
    display flex
    margin 1% auto 0
    width 40%
    a
      flex 1
      .icon
        position relative
        font-size 26px
        color black
        &:hover
          color blue
          span
            display block
        span
          display none
          position absolute
          text-align center
          width 120px
          font-size 16px
          color white
          bottom 28px
          left -45px
          img
            width 120px
            height 120px
</style>
