<template>
  <div class="skillmap">
    <div class="mbskillcontent">
      <ul>
        <li v-for="(mbskill, index) in mbskills" :key="index">
          <p>{{mbskill.text}}</p>
        </li>
      </ul>
    </div>
    <div  class="skillcontent">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          <h1 class="title">{{skill.name}}</h1>
          <div class="length">
            <div class="content" :style="_skillStyle(index)"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as Axios from '../../api/message'
export default {
  data() {
    return {
      skills: [],
      mbskills: []
    }
  },
  created() {
    Axios.getSkills().then(
      response => {
        this.skills = response.data
      }
    ).catch(
      error => console.log(error.message)
    )
    Axios.getMbSkills().then(
      response => {
        this.mbskills = response.data
      }
    ).catch(
      error => console.log(error.message)
    )
  },
  methods: {
    _skillStyle(index) {
      for (let i = 0; i < this.skills.length; i++) {
        if (i === index) {
          return `width: ${this.skills[i].scord}; background-color: ${this.skills[i].color}`
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 520px)
  .skillmap
    margin-top 9%
    height auto
    .mbskillcontent
      font-size: 16px
      ul
        li
          font-family ''Courier New', Courier, monospace'
          text-align left
          line-height 30px
          color black
    .skillcontent
      margin-top 5%
      font-size 20px
      ul
        li
          line-height 30px
          margin-top 12px
          .title
            text-align left
          .length
            position relative
            width 100%
            height 25px
            background-color rgb(245,245,245)
            border-radius 10px
            .content
              position absolute
              border-radius 10px
              left 0
              top 0
              height 100%
@media screen and (max-width: 519px)
  .skillmap
    margin-top 9%
    height auto
    .mbskillcontent
      font-size: 13px
      li
        font-family ''Courier New', Courier, monospace'
        text-align left
        line-height 27px
        color black
    .skillcontent
      margin-top 5%
      font-size 17px
      li
        line-height 30px
        margin-top 12px
        .title
          text-align left
        .length
          position relative
          width 100%
          height 20px
          background-color rgb(245,245,245)
          border-radius 10px
          .content
            position absolute
            border-radius 10px
            left 0
            top 0
            height 100%
</style>
