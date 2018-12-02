<template>
  <div id="app">
    <m-header></m-header>
    <pcbody class="pcbody"></pcbody>
    <mobilebody class="mobilebody"></mobilebody>
  </div>
</template>

<script>
import MHeader from './components/header/header'
import Pcbody from './components/pcbody/pcbody'
import Mobilebody from './components/mobilebody/mobilebody'
export default {
  mounted() {
    console.log('谢谢您打开控制台调试代码,如果您有什么建议请联系QQ或微信')
  },
  components: {
    MHeader,
    Pcbody,
    Mobilebody
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media screen and (min-width: 1001px) {
  .mobilebody {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  .pcbody {
    display: none;
  }
}
</style>
