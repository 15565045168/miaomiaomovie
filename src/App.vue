<template>
  <div id="app">
    <router-view/>
    <div id="nav" v-show="isshow">
      <router-link to="/movie" tag="p" active-class="one">电影</router-link> |
      <router-link to="/center" tag="p" active-class="one">影院</router-link>
      <router-link to="/me" tag="p" active-class="one"> 我的</router-link>
    </div>
    
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(["isshow"])
  }
}
</script>

<style lang="scss">
.one{
  background: forestgreen;
}
#app{
  #nav{
    width:100%;
    height:50px;
    display: flex;
    background:#000;
    position:fixed;
    bottom:0;
    p{
      justify-content: center;
      flex:1;
      text-align: center;
      line-height:50px;
      color:#fff;
    }
  }
}
</style>
