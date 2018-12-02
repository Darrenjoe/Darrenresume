<template>
  <div class="experiencemap">
    <ul class="mb-experience">
      <li v-for="(item, index) in experiences" :key="index">
        <div class="title">
          <i class="icon iconfont icon-qiaquanbao"></i>
          <span>{{item.date}}  -------  {{item.title}}</span>
        </div>
        <div class="right">
          <h1>{{item.name}}</h1>
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
@media screen and (min-width: 520px)
  .experiencemap
    margin-top 9%
    .mb-experience
      font-size 20px
      li
        font-size 20px
        line-height 35px
        text-align left
        .title
          margin-bottom 5px
          .icon
            font-size 26px
          span
            padding 5px
            color white
            font-size 15px
            background-color rgb(237,85,101)
        .right
          padding 15px 0 15px 13px
          margin-left 13px
          text-align left
          border-left 2px solid rgb(51,122,183)
          font-size 1.5rem
          h1
            font-family "方正舒体"
          .desc
            font-size 1rem
@media screen and (max-width: 519px)
  .experiencemap
    margin-top 9%
    .mb-experience
      font-size 14px
      li
        line-height 30px
        text-align left
        .title
          margin-bottom 5px
          .icon
            font-size 20px
          span
            padding 2px
            color white
            font-size 15px
            background-color rgb(237,85,101)
        .right
          padding 10px 0 10px 10px
          margin-left 10px
          text-align left
          border-left 2px solid rgb(51,122,183)
          font-size 1.15rem
          h1
            font-family "方正舒体"
          .desc
            font-size 0.8rem
</style>
