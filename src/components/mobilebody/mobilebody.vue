<template>
  <div class="mbbody">
    <m-nav @Scroll="selectScroll" :scrollY="h"></m-nav>
    <div class="mb-content" ref="mbContent">
      <div class="myhome" ref="myhome">
        <mb-myhome></mb-myhome>
      </div>
      <div class="aboutme" ref="aboutme">
        <span class="title">About Me</span>
        <mb-aboutme></mb-aboutme>
      </div>
      <div class="myskill" ref="myskill">
        <span>Skills</span>
        <mb-skills></mb-skills>
      </div>
      <div class="myexperience" ref="myexperience">
        <span>Experience</span>
        <mb-experience></mb-experience>
      </div>
      <div class="mywork" ref="mywork">
        <span>Project</span>
        <mb-mywork></mb-mywork>
      </div>
      <div class="contactme" ref="contactme">
        <span>Signature</span>
        <mb-contact></mb-contact>
      </div>
    </div>
  </div>
</template>

<script>
import MbContact from '../mbcomponents/mb-contact'
import MbMywork from '../mbcomponents/mb-mywork'
import MbExperience from '../mbcomponents/mb-experience'
import MbSkills from '../mbcomponents/mb-skiills'
import MbAboutme from '../mbcomponents/mb-aboutme'
import MbMyhome from '../mbcomponents/mb-myhome'
import MNav from '../nav/nav'
export default {
  data() {
    return {
      h: 0,
      classHeight: [],
      scrollT: 0
    }
  },
  methods: {
    selectScroll(index) {
      this._getScroll()
      document.body.scrollTop = this.classHeight[index]
      this.h = index
    },
    _getScroll() {
      this.classHeight = [0]
      this.classHeight.push(this.$refs.myhome.clientHeight)
      this.classHeight.push(this.classHeight[1] + this.$refs.aboutme.clientHeight)
      this.classHeight.push(this.classHeight[2] + this.$refs.myskill.clientHeight)
      this.classHeight.push(this.classHeight[3] + this.$refs.myexperience.clientHeight)
      this.classHeight.push(this.classHeight[4] + this.$refs.mywork.clientHeight)
    }
  },
  components: {
    MNav,
    MbMyhome,
    MbAboutme,
    MbSkills,
    MbExperience,
    MbMywork,
    MbContact
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width 520px)
  .mbbody
    position relative
    height 100%
    width 100%
    padding-bottom 9%
    .mb-content
      width 100%
      .myhome
        width 100%
      .aboutme
        height 100%
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 2rem
          line-height 2.3rem
          border-bottom 5px solid rgb(51,122,183)
      .myskill
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        height 100%
        span
          font-size 2rem
          line-height 2.3rem
          border-bottom 5px solid rgb(51,122,183)
      .myexperience
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        height 100%
        span
          font-size 2rem
          line-height 2.3rem
          border-bottom 5px solid rgb(51,122,183)
      .mywork
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 2rem
          line-height 2.3rem
          border-bottom 5px solid rgb(51,122,183)
      .contactme
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 2rem
          line-height 2.3rem
          border-bottom 5px solid rgb(51,122,183)
@media screen and (max-width 519px)
  .mbbody
    position relative
    height 100%
    width 100%
    padding-bottom 9%
    .mb-content
      width 100%
      .myhome
        width 100%
      .aboutme
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 1.4rem
          line-height 2.3rem
          border-bottom 3px solid rgb(51,122,183)
      .myskill
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 1.4rem
          line-height 2.3rem
          border-bottom 3px solid rgb(51,122,183)
      .myexperience
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 1.4rem
          line-height 2.3rem
          border-bottom 3px solid rgb(51,122,183)
      .mywork
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 1.4rem
          line-height 2.3rem
          border-bottom 3px solid rgb(51,122,183)
      .contactme
        margin 0 auto 0
        padding-top calc(7% + 60px)
        width 90%
        span
          font-size 1.4rem
          line-height 2.3rem
          border-bottom 3px solid rgb(51,122,183)
</style>
