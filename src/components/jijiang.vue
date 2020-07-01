<template>
    <div ref="haha" class="haha">
     <ul >
         <p>{{msg}}</p>
         <li v-for="(item,index) in list" :key="index">
          <div><img :src="item.cover" ></div>
          <div>
              <h4>{{item.title}}</h4>
              <p>观众评：<span>{{item.rate}}</span></p>
          </div>
          <div>
              <p>购票</p>
          </div>
         </li>
     </ul>
    </div>
</template>
<script>
 import Better from 'better-scroll'
export default {
    data(){
        return{
            list:[],
            msg:''
        }
    },
    mounted(){
        this.axios.get("http://localhost:4000/subjects").then((res)=>{
            this.list=res.data,
             this.$nextTick(() => { 
          var top= new Better(this.$refs.haha,{
          tap:true,
          probeType:1
        })
        top.on("scroll",(pos)=>{
           if(pos.y>30){
         this.msg="正在更新中。。。。。。"
           }
        })
        top.on("touchEnd",(pos)=>{
           if(pos.y>30){
            this.axios.get("http://localhost:4000/subjects").then((res)=>{
             setTimeout(()=>{
           this.list=res.data,
            this.msg="更新成功",
            setTimeout(()=>{
                this.msg=""
            },1000)
               },3000)
          
            })
            
           
           }
        })

          } 
             )

           
        })
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