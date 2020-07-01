<template>
    <div>
        <div class="shuju" ref="top">
        <input type="text" v-model="text" ref="inputs" :class="haha?'dingone':''">
        <div class="one" v-for="(item,index) in one" :key="index">
            <h3 @click="fn(index,item)" :class="isshow===index?'active':''">{{item.name}}</h3>
        </div>
    </div>
    <div class="shang" @click="shang">上</div>
    </div>
</template>
<script>
export default {
    created(){
     this.axios.get("http://localhost:3000/city").then((res)=>{
         this.list=res.data
         console.log(this.list)
     })
    },
     data(){
         return {
             text:"",
             list:[],
             isshow:"",
             haha:false
         }
     },
     mounted(){
       window.onscroll=this.toptwo
     },
     methods:{
        fn(index,item){
            this.isshow=index
        },
      shang(){
        document.documentElement.scrollTop=0
      },
      toptwo(){
         if(document.documentElement.scrollTop>=100){
             console.log(document.documentElement.scrollTop)
        this.haha=true
         }else{
             this.haha=false
         }
      }
     },
     destroyed(){
      window.onscroll=null
     },
  watch:{
    
  },

    computed:{
        one(){
            if(this.text===""){
                return
            }else{
                return this.list.filter((item)=>{
               return  item.label.indexOf(this.text)>-1
            })
            }
        }
    }
}
</script>
<style scoped lang="scss" >
.dingone{
    position:fixed;
    top:50px;
}
.shang{
    width:100px;
    height:100px;
    font-size:30px;
    line-height: 100px;
    background:rgba(0,0,0,0.4);
    color:#fff;
    text-align: center;
    position:fixed;
    right:0;
    bottom:9%;
}
.active{
    color:aqua;
}
.shuju{
    margin-bottom:100px;
}
input{
    width:400px;
    height:50px;
    font-size:30px;
}
.one{
    width:359px;
    height:auto;
    background:#fff;
    margin:auto;
    h3{
    width:100%;
    height:30px;
    line-height: 30px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    }
}
</style>