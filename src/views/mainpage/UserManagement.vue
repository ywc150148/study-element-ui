<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "mainpage",
  components: {},
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1518 弄",
      zip: 200333
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  mounted() {},
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
