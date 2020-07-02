<template>
  <div>
    
    <div class="zuiwai" ref="two">
      
      <div class="fudong" ref="one">
         <Better ref="haha">
           <div class="box">
        <div v-for="(item,index) in list" :key="index" class="center" id="1">
          <h3>{{item.title}}</h3>
          <p
            v-for="(subitem,index) in item.arr"
            :key="index"
            @click="mm(subitem.name,index)"
           
          >{{subitem.name}}</p>
        </div>
        </div>
         </Better >
      </div>
      
      <div class="fudong" id="2">
        <ul v-for="(item,index) in list" :key="item.arr.zip" @click="hand(index,item)" :class="dian==index?'active':''">
          <li>{{item.title}}</li>
        </ul>
        <div class="centerone" v-show="isshow">{{hehe}}</div>
      </div>
    </div>
   
  </div>
</template>
<script>
 import Better from './scroll'
export default {
  components:{
      Better
  },
  created() {
    //this.$store.commit("hello", false);
  },
  mounted() {
    this.axios.get("http://localhost:3000/city").then(res => {
      this.citylist(res.data);
    });
  },
  destroyed() {
   // this.$store.commit("hello", true);
  },
  data() {
    return {
      list: [],
      isshow: false,
      hehe: "",
      dian:''
    };
  },
  methods: {
    mm(data) {
      this.$store.commit("huan", data),
      this.$router.push(`/movie/jijiang`)
    },
    citylist(data) {
      var arr = [];
      for (var i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i));
      }
      for (var j = 0; j < arr.length; j++) {
        var shuju = [];
        data.filter(item => {
          if (item.pinyin.slice(0, 1) == arr[j]) {
            return shuju.push(item);
          }
        });
        if (shuju.length > 0) {
          this.list.push({
            title: arr[j],
            arr: shuju
          });
        }
      }
    },
    hand(index, item) {
      this.dian=index
      var top = this.$refs.one.getElementsByTagName("h3");
      this.$refs.haha.ee(-top[index].offsetTop) 
      this.isshow = true;
      this.hehe = item.title;
      setTimeout(() => {
        this.isshow = false;
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
.active{
  background:green;
}
.zuiwai{
  width:100%;
  height:90vh;
}
.fudong {
  float: left;
}
.fudong:nth-child(1) {
  width: 90%;
  .center {
    width: 100%;
    height:auto;
    h3 {
      width: 100%;
      line-height: 40px;
      text-align: center;
      background: cornflowerblue;
    }
    p {
      line-height: 25px;
      background: darkgray;
      color: #fff;
      text-align: center;
      z-index:9999;
    }
  }
}
.fudong:nth-child(2) {
 margin-top:8%;
  width: 10%;
  position: fixed;
  box-sizing: border-box;
  right: 0;
  li {
    list-style: none;
    line-height: 25px;
    text-align: center;
  }
}
.centerone {
  width: 150px;
  height: 150px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 150px;
  font-size: 40px;
  color: #fff;
}
</style>