<template>
    <div ref="wrapper" class="wrapper">
        <slot></slot>
        </div>
</template>
<script>
import Better from 'better-scroll'
export default {
    data(){
        return{
         hehe:{
             type:Function
         }
        }
    },
    props:{
         end:{
            type:Function,
            default:function(){}
        },
        top:{
            type:Function,
            default:function(){}
        },
       
    },
    mounted(){
        var haha =new Better(this.$refs.wrapper,{
            tao:true,
           probeType:7,
           click:true,
        })
        haha.on("scroll",(pos)=>{
           this.top(pos)
        })
        haha.on("touchEnd",(pos)=>{
            this.end(pos)
        })
        this.hehe=haha
    },
    methods:{
        ee(y){
            this.hehe.scrollTo(0,y)
        }
    }
}
</script>
<style scoped>
.wrapper{
    position:relative;
    width:100%;
    height:80vh !important;
    overflow:hidden;
}
</style>