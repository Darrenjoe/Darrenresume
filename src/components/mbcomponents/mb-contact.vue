<template>
  <div class="mb-contact">
    <div class="title">
      CONTACTFOR ME
    </div>
    <ul class="text">
      <li v-for="(item, index) in callmes" :key="index">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width 520px)
  .mb-contact
    margin 9% auto 0
    padding 30px
    width 80%
    background rgba(200,200,200,0.5)
    border-radius 10px
    .title
      padding 15px
      border-bottom 3px solid yellow
      word-wrap break-word
      font-size 2.25rem
      font-weight  600
      font-family Rockwell Extra Bold
    .text
      margin-top 1rem
      font-size 1.35rem
      li
        margin-top 1rem
@media screen and (max-width 519px)
  .mb-contact
    margin 9% auto 0
    padding 30px
    width 80%
    background rgba(200,200,200,0.5)
    border-radius 10px
    .title
      padding 15px
      border-bottom 3px solid yellow
      word-wrap break-word
      font-size 1.5rem
      font-weight  600
      font-family Rockwell Extra Bold
    .text
      margin-top 1rem
      font-size 1rem
      li
        margin-top 1rem
</style>
