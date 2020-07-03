<template>
    <div >
        <loading v-if="isloading"></loading>
        <Scroll v-else  :end="end" :top="top" >
     <ul >
         <p>{{msg}}</p>
         <li v-for="(item,index) in list" :key="index">
          <div><img :src="item.cover" ></div>
          <div>
              <h4>{{item.title}}</h4>
              <p>观众评：<span>{{item.rate}}</span></p>
          </div>
          <div>
              <p @click="jinru(item.id)">购票</p>
          </div>
         </li>
     </ul>
     </Scroll>
    </div>
</template>
<script>
import Scroll from './scroll'
import { mapState } from 'vuex'
export default {
    components:{
       Scroll    
    },
    computed:{
     ...mapState(['isloading'])
    },
    data(){
        return{
            list:[],
            msg:'',
            node:0,
        }
    },
    mounted(){
    

         this.axios.get("http://localhost:4000/subjects").then((res)=>{
             this.list=res.data
             
             this.$store.commit("gailoading",false)
        //      this.$nextTick(() => { 
        // top.on("touchEnd",(pos)=>{
        //    if(pos.y>30){
        //     this.axios.get("http://localhost:4000/subjects").then((res)=>{
        //      setTimeout(()=>{
        //    this.list=res.data,
        //     this.msg="更新成功",
        //     setTimeout(()=>{
        //         this.msg=""
        //     },1000)
        //        },3000)
          
        //     })
            
           
        //    }
        // })

        //   } 
        //      )
        })
    },
    methods:{
        jinru(item){
            this.$router.push(`/mm/${item}`)
            // this.$router.push(`/detail/${id}`)
   
        },
          end(pos){
         if(pos.y>30){
             var time=null
             this.$store.commit("gailoading",true),
             time=setInterval(()=>{
               this.node++;
               console.log(this.node)
            if(this.node===1){
                clearInterval(time),
                this.node=0,
           this.axios.get("http://localhost:4000/subjects").then((res)=>{
            this.list=res.data,
            console.log(this.list)
            this.msg="更新成功",
            setTimeout(()=>{
                this.msg=""
            this.$store.commit("gailoading",false)   
            },1000)
            }) 
               }
               },1000) 
             
         
                  
           }
        },
        top(pos){
         if(pos.y>30){
         //this.$store.commit("gailoading",true)
         this.msg="正在更新中。。。。。。"
           }
        }
      
    }
}
</script>
<style lang="scss" scoped>
.haha{
    position:relative;
    width:100%;
    height:80vh;
    overflow:hidden;
}
ul{
       width:100%;
       height:auto;
       margin-top:55px;
    li{
        width:90%;
        height:150px;
        margin:auto;
        border-bottom:1px solid rgba(0,0,0,0.3);
        list-style: none;
       div{
           padding-top:10px;
           float:left;
           box-sizing: border-box;
           img{
               width:100px;
               height:130px;
           }
       }
       div:nth-child(2){
           width:150px;
           height:100%;
           padding-left:20px;
           h4{
               line-height:40px;
               font-size:20px;
           }
           p {
               span{
                   color:orange;
                   font-weight:300;
               }
           }

       }
       div:nth-child(3){
           width:50px;
           height:100%;
           padding-top:15%;
           p{
               width:50px;
               height:30px;
               text-align: center;
               line-height:30px;
               background: orangered;
               color:#fff;
           }
       }
    }
}
</style>