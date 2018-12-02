<template>
  <div class="mheader" ref="mheader" :class="hColor">
    <div class="avator">
      <div class="avator-img">
        <img class="play" :class="cdCls" @click="togglePlaying" width="100%" height="100%" src="../../assets/avator.jpg">
      </div>
      <div class="text" :class="tColor">Darrenjoe</div>
    </div>
    <audio ref="audio" loop="loop" src="static/aduio/C400004FHy6K3kRuPP.m4a"></audio>
  </div>
</template>

<script>
const HEADERTOP = 100
export default {
  data() {
    return {
      music: '',
      play: true,
      changes: false
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs.audio.play()
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  computed: {
    cdCls() {
      return this.play ? '' : 'pause'
    },
    hColor() {
      return this.changes ? 'getdown' : ''
    },
    tColor() {
      return this.changes ? 'tBlock' : ''
    }
  },
  methods: {
    handleScroll() {
      let top = document.body.scrollTop
      if (top > HEADERTOP) {
        this.changes = true
      } else {
        this.changes = false
      }
    },
    togglePlaying() {
      const audio = this.$refs.audio
      if (!this.play) {
        audio.play()
        this.play = !this.play
      } else {
        audio.pause()
        this.play = !this.play
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 1001px)
  .mheader
    position: fixed
    top 40px
    left 40px
    z-index 100
    .avator
      display flex
      border: 1px solid #ccc
      border-radius 10px
      padding 5px
      height 60px
      width 260px
      background rgba(255,255,255,.4)
      .avator-img
        flex 0 0 60px
        margin-left 10px
        width 60px
        img
          border-radius 50%
          &.play
            animation: rotate 10s linear infinite
          &.pause
            animation-play-state: paused
      .text
        flex 1
        padding 15px
        vertical-align center
        font-size 30px
        &:hover
          font-size 32px
    @keyframes rotate
      0%
        transform: rotate(0)
      100%
        transform: rotate(360deg)
@media screen and (max-width: 1000px)
  .mheader
    position: fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 60px
    &.getdown
      background #444
      color #4094c7
    .avator
      position relative
      height 60px
      width 100%
      .avator-img
        position absolute
        top 10px
        left 20px
        width 40px
        img
          border-radius 50%
          &.play
            animation: rotate 10s linear infinite
          &.pause
            animation-play-state: paused
      .text
        position absolute
        display none
        top 15px
        left calc(50% - 65px)
        width 130px
        text-align center
        font-size 26px
        &.tBlock
          display block
    @keyframes rotate
      0%
        transform: rotate(0)
      100%
        transform: rotate(360deg)
</style>
