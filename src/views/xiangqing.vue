<template>
    <div>
        <h3>这是详情页</h3>
        <ul v-for="(item,index) in list" :key="index" v-show="item.id==mima">
          <img :src="item.cover">
        </ul>
    </div>
</template>
<script>
export default {
    created(){
       this.$store.commit("hello",false)
    },
    mounted(){
        var na=window.localStorage.getItem("cun")
        if(na){
             this.list=JSON.parse(na)
             console.log("拿数据")
        }else{
           this.axios.get("http://localhost:4000/subjects").then((res)=>{
            window.localStorage.setItem("cun",JSON.stringify(res.data))
             this.list=res.data
        })
        }
      
        this.mima=this.$route.params.move
    },
    data(){
        return{
            list:[],
            mima:''
        }
    },
    destroyed(){
        this.$store.commit("hello",true)
    }
} 
</script>
<style lang="scss" scoped>
 h3{
     font-size:30px;
 }
</style>