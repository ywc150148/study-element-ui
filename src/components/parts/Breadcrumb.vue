<template>
  <div class="breadcrumb-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in matched" :key="item.name">{{ $t(`aside_menu.${item.name}` == "aside_menu.undefined")?item.title:$t(`aside_menu.${item.name}`)}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    matched() {
      let arr = [];
      if (this.$route.matched.length > 0) {
        this.$route.matched.forEach(element => {
          if (element.meta.title && element.path) {
            arr.push({ name:element.name,title: element.meta.title, path: element.path });
          }
        });
      }

      return arr;
    }
  },
};
</script>

<style lang="less">
.breadcrumb-wrap {
  padding: 10px 20px;
  background: #dddddd;
}
</style>