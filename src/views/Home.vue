<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="primary">
      <i class="el-icon-arrow-right el-icon--right"></i>
    </el-button>

    <el-button type="primary">
      <i class="el-icon-arrow-right el-icon--right">  {{$t('message.hello')}}</i>
    </el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Button } from "element-ui";
import qs from "qs";

export default {
  name: "home",
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  data() {
    return {};
  },
  mounted() {
    // this.getData()
  },
  methods: {
    getData() {
      this.$axios
        .get(this.RESTFULAPI.public.blog, {
          params: {
            limit: 20,
            previousId: ""
          }
        })
        .then(response => {
          console.log("response", response);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>
