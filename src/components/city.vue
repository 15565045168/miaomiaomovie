<template>
    <div>
        城市
    </div>
</template>
<script>
export default {
    created(){
        this.$store.commit("hello",false)
    },
    destroyed(){
        this.$store.commit("hello",true)
    }
}
</script>
<style lang="scss" scoped>

</style>