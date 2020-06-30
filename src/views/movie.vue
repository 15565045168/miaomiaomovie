<template>
    <div>
       <Header title="喵喵电影"/>
       <div class="title">
       <p @click="city">{{data}}</p>
       <router-link tag="p" to="/movie/jijiang" active-class="active">即将热映</router-link>
       <router-link tag="p" to="/movie/zhengzai" active-class="active">正在热映</router-link>
       <p>搜索</p>
       </div>
       <keep-alive>
        <router-view/>
       </keep-alive>
        </div>
</template>
<script>
import Header from '../components/header'
import { mapState } from 'vuex'
export default {
    data(){
        return{
      
        }
    },
    computed:{
     ...mapState(["data"])
    },
    components:{
     Header
    },
   methods:{
      city(){
          this.$router.push(`/city`)
      }
   }
}
</script>
<style scoped lang="scss">
.active{
    border-bottom:2px solid orange;
}
.title{
     p{
     float:left;
     width:25%;
     height:50px;
     text-align: center;
     font-size:20px;
     line-height:50px;
 }
}
</style>