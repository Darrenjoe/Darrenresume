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
@media screen and (min-width 520px)
  .worksmap
    margin-top 9%
    ul
      display flex
      li
        flex 1
        .image
          width 12rem
          height 12rem
          margin 10px auto 30px
          a
            font-size 10rem
            img
              border-radius 50%
              &:hover
                animation changeimg 1.5s
        strong
          margin-top 20px
          padding 0.5rem 2rem
          color gray
          font-size 1.2rem
          border 1px solid #eee
          box-shadow 0 0 8px rgb(245,245,245)
    @keyframes changeimg
      to
        transform rotate(360deg)
@media screen and (max-width 519px)
  .worksmap
    margin-top 9%
    ul
      li
        margin 3% auto 9%
        .image
          width 50%
          height 50%
          margin 3% auto 3%
          a
            font-size 5rem
            img
              border-radius 50%
              &:hover
                animation changeimg 1.5s
        strong
          margin-top 8%
          padding 0.5rem 0.6rem
          color gray
          font-size 1rem
          border 1px solid #eee
          box-shadow 0 0 8px rgb(245,245,245)
    @keyframes changeimg
      to
        transform rotate(360deg)
</style>
