<template>
  <div class="skillmap">
    <div class="skillleft">
      <h1>技能一览:</h1>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          <strong :style="_pcSkill(index)">{{skill.name}}</strong>
        </li>
      </ul>
    </div>
    <ul class="skillcontent">
      <li v-for="(skill, index) in skills" :key="index">
        <h1 class="title">{{skill.name}}</h1>
        <div class="length">
          <div class="content" :style="_skillStyle(index)"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {'name': 'HTML', 'scord': '80%', 'color': 'rgb(52,73,94)'},
        {'name': 'CSS', 'scord': '75%', 'color': 'pink'},
        {'name': 'JavaScript', 'scord': '70%', 'color': 'rgb(211,84,0)'},
        {'name': 'Vue', 'scord': '75%', 'color': 'green'},
        {'name': 'React', 'scord': '40%', 'color': 'skyblue'}
      ]
    }
  },
  methods: {
    _skillStyle(index) {
      for (let i = 0; i < this.skills.length; i++) {
        if (i === index) {
          return `width: ${this.skills[i].scord}; background-color: ${this.skills[i].color}`
        }
      }
    },
    _pcSkill(index) {
      for (let i = 0; i < this.skills.length; i++) {
        if (i === index) {
          return `background-color: ${this.skills[i].color}`
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 1001px)
  .skillmap
    display flex
    width 100%
    height 100%
    .skillleft
      text-align right
      margin 40px 60px
      flex 0 0 150px
      h1
        font-size 30px
        color #ffd200
        font-family "华文琥珀"
      ul
        margin-top 18px
        height 100%
        font-size 20px
        line-height 50px
        color white
        strong
          padding 10px
    .skillcontent
      flex 1
      font-size 20px
      padding 0 10px 0
      li
        line-height 30px
        margin-top 10px
        &:hover
          .length
            transition all 0.5s
            transform scale(1.1,1.1)
        .title
          text-align left
          color #00CED1
        .length
          position relative
          width 100%
          height 40px
          background-color rgb(245,245,245)
          border-radius 10px
          .content
            position absolute
            border-radius 10px
            left 0
            top 0
            height 100%
@media screen and (max-width: 1000px)
  .skillmap
    width 100%
    height 100%
    .skillleft
      display none
    .skillcontent
      font-size 20px
      padding 0 10px 0
      li
        line-height 30px
        margin-top 10px
        .title
          text-align left
        .length
          position relative
          width 100%
          height 40px
          background-color rgb(245,245,245)
          border-radius 10px
          .content
            position absolute
            border-radius 10px
            left 0
            top 0
            height 100%
</style>
