<template>
  <div class="callmemap">
    <div class="callmeContent">
      <div class="title">
        CONTACTFOR ME
      </div>
      <ul class="text">
        <li v-for="(item, index) in callmes" :key="index">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="call-bot">
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '../contact/contact'
export default {
  data() {
    return {
      callmes: [
        {'text': '路漫漫其修远兮，任重而道远'},
        {'text': '灵感来自于生活'},
        {'text': '始于前端，忠于成长'},
        {'text': '去尝试，去体会，去未来'},
        {'text': '怎么生活，怎么编码'}
      ]
    }
  },
  components: {
    Contact
  }
}
</script>

<style scoped lang="stylus">
.callmemap
  height 100%
  width 100%
  .callmeContent
    .title
      padding 15px
      border-bottom 2px solid yellow
      font-size 43px
      font-weight  600
      font-family Rockwell Extra Bold
    .text
      margin-top 15px
      font-size 23px
      color white
      li
        line-height 40px
    .call-bot
      margin-top 20px
      padding-top 20px
</style>
