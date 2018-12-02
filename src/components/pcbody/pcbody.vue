<template>
  <div class="pcbody">
    <div class="swiper-container" ref="swiperContainer">
      <keep-alive>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="myhome" ref="myhome">
              <div class="bgfilter"></div>
              <div class="myhome-content" ref="myhomeContent">
                <myhome-map></myhome-map>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="aboutme" ref="aboutme">
              <div class="bgfilter"></div>
              <div class="aboutme-content" ref="aboutmeContent">
                <aboutme-map></aboutme-map>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class=" myskill" ref="myskill">
              <div class="bgfilter"></div>
              <div class="myskill-content" ref="myskillContent">
                <skill-map></skill-map>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="experience" ref="experience">
              <div class="bgfilter"></div>
              <div class="experience-content" ref="experienceContent">
                <experience-map></experience-map>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="works"  ref="works">
              <div class="bgfilter"></div>
              <div class="works-content" ref="worksContent">
                <works-map></works-map>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="callme" ref="callme">
              <div class="bgfilter"></div>
              <div class="callme-content" ref="callmeContent">
                <callme-map></callme-map>
              </div>
            </div>
          </div>
        </div>
      </keep-alive>
      <div class="swiper-pagination"></div>
    </div>
    <keep-alive>
      <m-nav @Scroll="moveIndex" :scrollY="getscrollY"></m-nav>
    </keep-alive>
  </div>
</template>

<script>
import Swiper from 'swiper'
import MNav from '../nav/nav'
import AboutmeMap from '../aboutme-map/aboutme-map'
import MyhomeMap from '../myhome-map/myhome-map'
import CallmeMap from '../callme-map/callme-map'
import WorksMap from '../works-map/works-map'
import ExperienceMap from '../experience-map/experience-map'
import SkillMap from '../skillmap/skillmap'
export default {
  data() {
    return {
      mySwipper: '',
      h: 0
    }
  },
  mounted() {
    this._initSwipper()
    this._getScreenHeigt()
  },
  computed: {
    getscrollY() {
      let scrollY = this.mySwipper.realIndex
      return scrollY
    }
  },
  methods: {
    moveIndex(index) {
      this.mySwipper.slideTo(index, 1000, false)
    },
    _initSwipper() {
      this.mySwipper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        mousewheelControl: true,
        speed: 1000,
        autoHeigth: true
      })
    },
    _getScreenHeigt() {
      this.h = document.documentElement.clientHeight

      this.$refs.swiperContainer.style.height = `${this.h}px`

      this.$refs.myhome.style.height = `${this.h}px`
      this.$refs.myhomeContent.style.marginLeft = '-350px'
      this.$refs.myhomeContent.style.marginTop = '-140px'

      this.$refs.aboutme.style.height = `${this.h}px`
      this.$refs.aboutmeContent.style.marginLeft = '-400px'
      this.$refs.aboutmeContent.style.marginTop = '-250px'

      this.$refs.myskill.style.height = `${this.h}px`
      this.$refs.myskillContent.style.marginLeft = '-400px'
      this.$refs.myskillContent.style.marginTop = '-200px'

      this.$refs.experience.style.height = `${this.h}px`
      this.$refs.experienceContent.style.marginLeft = '-400px'
      this.$refs.experienceContent.style.marginTop = '-200px'

      this.$refs.works.style.height = `${this.h}px`
      this.$refs.worksContent.style.marginLeft = '-450px'
      this.$refs.worksContent.style.marginTop = '-200px'

      this.$refs.callme.style.height = `${this.h}px`
      this.$refs.callmeContent.style.marginLeft = '-250px'
      this.$refs.callmeContent.style.marginTop = '-230px'
    }
  },
  components: {
    SkillMap,
    ExperienceMap,
    WorksMap,
    CallmeMap,
    MyhomeMap,
    AboutmeMap,
    MNav
  }
}
</script>

<style scoped lang="stylus">
@import 'swiper/dist/css/swiper.min.css'
.pcbody
  position relative
  height 100%
  .myhome
    position relative
    width: 100%
    background url('../../assets/bg1.jpg') no-repeat
    background-size 100% 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, 0.5)
      top 0
      left 0
      width 100%
      height 100%
    .myhome-content
      position: absolute
      z-index 2
      top: 50%
      left: 50%
      width: 700px
      height: 280px
  .aboutme
    position: relative
    background url('../../assets/bg2.jpg') no-repeat
    background-size 100% 100%
    width: 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, .7)
      top 0
      left 0
      width 100%
      height 100%
    .aboutme-content
      position: absolute
      z-index 2
      top: 50%
      left: 50%
      width: 800px
      height: 500px
  .myskill
    position: relative
    background url('../../assets/bg3.jpg') no-repeat
    background-size 100% 100%
    width: 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, .7)
      top 0
      left 0
      width 100%
      height 100%
    .myskill-content
      position: absolute
      z-index 2
      top: 50%
      left: 50%
      width: 800px
      height: 400px
  .experience
    position: relative
    background url('../../assets/bg4.jpg') no-repeat
    background-size 100% 100%
    width: 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, .7)
      top 0
      left 0
      width 100%
      height 100%
    .experience-content
      position: absolute
      top: 50%
      left: 50%
      width: 800px
      height: 400px
  .works
    position: relative
    background url('../../assets/bg5.jpg') no-repeat
    background-size 100% 100%
    width: 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, .7)
      top 0
      left 0
      width 100%
      height 100%
    .works-content
      position: absolute
      z-index 2
      top: 50%
      left: 50%
      width: 900px
      height: 400px
  .callme
    position: relative
    background url('../../assets/bg6.jpg') no-repeat
    background-size 100% 100%
    width: 100%
    .bgfilter
      position absolute
      background-color rgba(86, 83, 100, .7)
      top 0
      left 0
      width 100%
      height 100%
    .callme-content
      position: absolute
      z-index 2
      top: 50%
      left: 50%
      width: 500px
      height: 460px
</style>
