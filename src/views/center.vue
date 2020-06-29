<template>
    <div>
       <Header :title="hello"/>
        </div>
</template>
<script>
import Header from '@/components/header.vue'
export default {
    data(){
     return{
         hello:'喵喵影院'
     }
    },
    components:{
        Header
    }
}
</script>
<style scoped lang="scss">

</style>