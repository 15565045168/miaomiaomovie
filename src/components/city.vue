<template>
  <div>
    <div class="zuiwai" ref="two">
      <div class="fudong" ref="one">
        <ul v-for="(item,index) in list" :key="index" class="center" id="1">
          <h3>{{item.title}}</h3>
          <p
            v-for="(subitem,index) in item.arr"
            :key="index"
            @click="fn(subitem.name)"
          >{{subitem.name}}</p>
        </ul>
      </div>
      <div class="fudong" id="2">
        <ul v-for="(item,index) in list" :key="item.arr.zip" @click="hand(index,item)">
          <li>{{item.title}}</li>
        </ul>
        <div class="centerone" v-show="isshow">{{hehe}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("hello", false);
  },
  mounted() {
    this.axios.get("http://localhost:3000/city").then(res => {
      this.citylist(res.data);
    });
  },
  destroyed() {
    this.$store.commit("hello", true);
  },
  data() {
    return {
      list: [],
      isshow: false,
      hehe: ""
    };
  },
  methods: {
    fn(data) {
      this.$store.commit("huan", data);
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
      var top = this.$refs.one.getElementsByTagName("h3");
      document.documentElement.scrollTop = top[index].offsetTop;
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
.zuiwai {
  width: 100%;
}
.fudong {
  float: left;
}
.fudong:nth-child(1) {
  width: 90%;
  .center {
    width: 100%;
    height: auto;
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
    }
  }
}
.fudong:nth-child(2) {
  width: 10%;
  height: 700px;
  position: fixed;
  border: 1px solid #000;
  box-sizing: border-box;
  right: 0;
  li {
    list-style: none;
    line-height: 30px;
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