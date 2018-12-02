<template>
  <div class="mnav">
    <div class="menu">
      <i class="icon iconfont icon-caidan" @click="showFilter" v-show="!filter" title="导航栏"></i>
    </div>
    <div class="filter" v-show="filter"></div>
    <transition name="move">
      <div class="meun-content" v-show="filter">
        <div class="menu-close">
          <i class="icon iconfont icon-guanbi" @click="showFilter"></i>
        </div>
        <ul>
          <li
            v-for="(item, index) in menus"
            :key="index"
            @click="scrollDate(index)"
            :class="{'act':scrollY===index}">{{item.name}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import * as Axios from '../../api/message'
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      menus: [],
      filter: false,
      scroll: 0
    }
  },
  created() {
    this._getMenu()
  },
  methods: {
    scrollDate(index) {
      this.$emit('Scroll', index)
    },
    showFilter() {
      this.filter = !this.filter
    },
    _getMenu() {
      Axios.getMenu().then(
        response => {
          this.menus = response.data
        }
      ).catch(
        error => console.log(error.message)
      )
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 1001px)
  .mnav
    position fixed
    z-index 200
    top 40px
    right 40px
    .menu
      padding 10px
      border-radius 50%
      text-align center
      background rgba(255,255,255,0.2)
      box-shadow 0 3px 0 rgba(0,0,0,0.2)
      .icon
        width 60px
        height 60px
        z-index 200
        font-size 40px
        color white
        &:hover
          color skyblue
    .meun-content
      position fixed
      z-index 106
      top 0
      right 0
      height 100%
      background-color rgb(255,255,255)
      .menu-close
        padding-top 40px
        .icon
          z-index 200
          font-size 40px
          color #000
      ul
        width 200px
        padding-top 80px
        padding-right 20px
        font-size 28px
        li
          padding-right 40px
          text-align right
          line-height 50px
        .act
          color skyblue
    .move-enter-active, .move-leave-active
      transition: all 0.6s
    .move-enter, .move-leave-to
      transform: translate3d(100%, 0, 0)
    .filter
      position fixed
      background-color rgba(0,0,0,.5)
      top 0
      left 0
      width 100%
      height 100%
      z-index 105
@media screen and (max-width: 1000px)
  .mnav
    position fixed
    z-index 100
    top 10px
    right 20px
    .menu
      text-align center
      .icon
        z-index 200
        font-size 35px
        color white
        &:hover
          color skyblue
    .meun-content
      position fixed
      z-index 106
      top 0
      right 0
      height 100%
      background-color rgb(245,245,245)
      .menu-close
        padding-top 30px
        .icon
          font-size 30px
          color #000
      ul
        width 150px
        padding-top 30px
        padding-right 30px
        font-size 28px
        li
          text-align right
          line-height 50px
        .act
          color skyblue
    .move-enter-active, .move-leave-active
      transition: all 0.6s
    .move-enter, .move-leave-to
      transform: translate3d(100%, 0, 0)
    .filter
      position fixed
      background-color rgba(0,0,0,.5)
      top 0
      left 0
      width 100%
      height 100%
      z-index 105
@media screen and (max-width: 519px)
  .mnav
    position fixed
    z-index 100
    top 10px
    right 20px
    .menu
      text-align center
      .icon
        z-index 200
        font-size 35px
        color white
        &:hover
          color skyblue
    .meun-content
      position fixed
      z-index 106
      top 0
      right 0
      height 100%
      background-color rgb(245,245,245)
      .menu-close
        padding-top 30px
        .icon
          font-size 25px
          color #000
      ul
        width 100px
        padding-top 30px
        padding-right 30px
        font-size 16px
        li
          text-align right
          line-height 30px
        .act
          color skyblue
    .move-enter-active, .move-leave-active
      transition: all 0.6s
    .move-enter, .move-leave-to
      transform: translate3d(100%, 0, 0)
    .filter
      position fixed
      background-color rgba(0,0,0,.5)
      top 0
      left 0
      width 100%
      height 100%
      z-index 105
</style>