<template>
    <div>
     <ul>
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
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.axios.get("http://localhost:4000/subjects").then((res)=>{
            this.list=res.data
            console.log(res.data)
        })
    }
}
</script>
<style lang="scss" scoped>
ul{
    width:100%;
    height:auto;
    margin-top:60px;
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
           width:200px;
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