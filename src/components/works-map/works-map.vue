<template>
  <div class="worksmap">
    <ul>
      <li>
        <div class="image">
          <a :href="this.works[0].url" target="_blank">
            <img width="100%" height="100%" src="./flappybird.png">
          </a>
        </div>
        <strong>{{this.works[0].name}}</strong>
      </li>
      <li>
        <div class="image">
          <a :href="this.works[1].url" target="_blank">
            <img width="100%" height="100%" src="./finance.png">
          </a>
        </div>
        <strong>{{this.works[1].name}}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {'name': 'Flappy Bird小游戏', 'url': 'https://darrenjoe-flappybird.netlify.com'},
        {'name': 'React个人财务管理', 'url': 'https://darrenjoe.github.io/reactfinance/'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.worksmap
  width 100%
  height 100%
  ul
    display flex
    li
      flex 1
      .image
        width 300px
        height 300px
        margin 10px auto 30px
        a
          font-size 20px
          img
            border-radius 50%
            &:hover
              animation changeimg 1.5s
      strong
        margin-top 20px
        padding 10px 60px
        color #00FFFF
        line-height 40px
        font-size 20px
        border 1px solid #eee
        box-shadow 0 0 5px rgb(245,245,245)
  @keyframes changeimg
    to
      transform rotate(360deg)
</style>
