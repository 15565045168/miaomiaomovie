<template>
    <div>
      <h3>{{title}}</h3>
    </div>
</template>
<script>
export default{
 props:["title"]
}
</script>
<style scoped lang="scss">
  h3{
      width:100%;
      text-align: center;
      line-height:50px;
      font-size:30px;
      color:#fff;
      background:chocolate;
  }
</style>