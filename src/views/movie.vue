<template>
    <div>
       <Header ref="one" title="喵喵电影"/>
       <div class="title" ref="two" :class="isshow?'guding':''">
       <router-link tag="p" to="/movie/city">{{data}}</router-link>
       <router-link tag="p" to="/movie/jijiang" active-class="active">即将热映</router-link>
       <router-link tag="p" to="/movie/zhengzai" active-class="active">正在热映</router-link>
       <router-link tag="p" to="/movie/search">搜索</router-link>
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
       isshow:false
        }
    },
    computed:{
     ...mapState(["data"])
    },
    components:{
     Header
    },
   methods:{
       fn(){
           if(document.documentElement.scrollTop>=(this.$refs.one.$el.offsetHeight)){
               this.isshow=true
           }else{
               this.isshow=false
           }
       }
   },
   mounted(){
       window.onscroll=this.fn
   },
   destroyed(){
     window.onscroll=null
   }
}
</script>
<style scoped lang="scss">
.guding{
    width:100%;
    position: fixed;
    top:0;
    background:#fff;
}
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