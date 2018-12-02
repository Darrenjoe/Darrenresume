<template>
  <div class="experiencemap">
    <transition name="move">
      <ul class="pc-experience">
        <li v-for="(item, index) in experiences" :key="index">
          <div class="time">{{item.date}}</div>
          <div class="right">
            <h1>{{item.name}}</h1>
            <div class="title">{{item.title}}</div>
            <p class="desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </transition>
    <ul class="mb-experience">
      <li v-for="(item, index) in experiences" :key="index">
        <div class="time">{{item.date}}</div>
        <div class="right">
          <h1>{{item.name}}</h1>
          <div class="title">{{item.title}}</div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {'name': '成都实训基地', 'title': '前端开发', 'date': '2017-11', 'desc': '负责网上商城的前端页面设计与实现，使用jquery进行前后端交互'},
        {'name': '毕业于西南科技大学', 'title': '本科', 'date': '2018-06', 'desc': '信息管理与信息系统专业'},
        {'name': '成都四度电子商务', 'title': '前端工程师', 'date': '2018-07', 'desc': '负责公司后台系统UI界面的实现与优化，完成前端数据处理与并与后台交互，主要使用layui + JQurey等技术栈'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 1001px)
  .experiencemap
    width 100%
    height 100%
    .mb-experience
      display none
    .pc-experience
      height 100%
      width 100%
      li
        display flex
        font-size 20px
        line-height 35px
        &:hover
          animation changeli 3s ease
          background rgba(245,245,245,.2)
          border-radius 10px
          .right h1
            color #00BFFF
        .time
          flex 0 0 100px
          border-right 5px solid white
          color rgba(166,219,109, 0.9)
        .right
          flex 1
          text-align left
          margin-left 20px
          h1
            font-family "华文彩云"
            font-size 26px
            color white
          .title
            color white
            font-size 18px
            color #9ACD32
          .desc
            margin-bottom 10px
            color white
  @keyframes changeli
    to
      transform rotateX(360deg)
      background rgba(245,245,245,.2)
@media screen and (max-width: 1000px)
  .experiencemap
    width 100%
    height 100%
    .pc-experience
      height 100%
      width 100%
      li
        display flex
        font-size 20px
        line-height 35px
        .time
          flex 0 0 100px
          border-right 5px solid white
        .right
          flex 1
          text-align left
          margin-left 20px
          h1
            font-family "华文彩云"
            font-size 26px
          .title
            color white
            font-size 18px
          .desc
            margin-bottom 10px
</style>
