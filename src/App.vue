<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>| -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <p>{{$t('message.hello')}}</p> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import VueEvent from "./config/VueEvent.js";
export default {
  data() {
    return {
      clientHeight: 0
    };
  },
  watch: {
    $route(n) {
      // console.log("n", n);
    },
    clientHeight(n, o) {
      VueEvent.$emit("changeClientHeight", n);
    }
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem("locale") || "cn";
    this.clientHeight = this.$tools.getClientHeight();
    window.onresize = () => {
      this.clientHeight = this.$tools.getClientHeight();
    };
  },
  methods: {}
};
</script>

<style lang="less">
* {
  margin: 0;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// #nav {

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
