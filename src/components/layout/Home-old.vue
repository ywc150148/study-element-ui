<template>
  <div class="layout-home">
    <el-container style="border: 1px solid #eee">
      <nav-menu></nav-menu>
      <el-container>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/parts/NavMenu.vue";
import VueEvent from "../../config/VueEvent.js";

export default {
  name: "HelloWorld",
  components: { NavMenu },
  props: {
    msg: String
  },
  data() {
    return {
      clientHeight: 500
    };
  },
  created() {
    this.$nextTick(function() {
      // DOM 更新了
    });
  },
  mounted() {
    VueEvent.$on("changeClientHeight", height => {
      this.clientHeight = height;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
