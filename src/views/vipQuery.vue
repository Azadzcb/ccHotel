<template>
  <div class="page-vip">
    <div class="vip-table">
      <el-table stripe :data="tableData" height="700" border max-height="1000" highlight-current-row>//@selection-change="handleSelectionChange"
        <el-table-column sortable type="selection" width="55"></el-table-column>
        <el-table-column sortable prop="leixing" label="类型"></el-table-column>
        <el-table-column sortable prop="kahao" label="卡号"></el-table-column>
        <el-table-column sortable prop="name" label="姓名"></el-table-column>
        <el-table-column sortable prop="phone" label="手机号"></el-table-column>
        <el-table-column sortable prop="dizhi" label="地址"></el-table-column>
        <el-table-column sortable prop="yue" label="余额"></el-table-column>
        <el-table-column sortable prop="jifen" label="积分"></el-table-column>
        <el-table-column sortable prop="xiaoshoyuan" label="销售员"></el-table-column>
        <el-table-column sortable prop="beizhu" label="备注"></el-table-column>
        <el-table-column sortable prop="chuangjianriqi" label="创建日期"></el-table-column>
      </el-table>
    </div>
    <div class="vip-foot">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">
          下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <el-button type="primary" icon="el-icon-search" @click="fuwuqi_guazhang_tijiao(indx)">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "vipQuery",
  data() {
    return {
      tableData: [],
      currentRow: null,
      multipleSelection: []
    };
  },
  methods: {},
  mounted() {
    this.axios
      .get("http://139.9.66.6:8080/kerenzhang_huiyuan", {
        params: {
          // quanxian: 1,
          // userName: this.$cookies.get("userName"),
          // nameid: this.$cookies.get("nameid"),
          // token: this.$cookies.get("yztoken"),
          // hotelId: this.$cookies.get("hotelid"),
          // leixing: indx /*类型*/,
          // zubie: this.zubie_xuanzhon /*组别*/,
          // pageNo: this.currentPage4 - 1 /*当前页数*/,
          // pageSize: this.pageSize /*每页条数*/,
          // name: this.huiyuan_name /*名称*/,
          // phone: this.huiyuan_phon /*电话*/,
          // idno: this.huiyuan_kahao /*卡号*/
          hotelId: 2,
          nameid: 4,
          token: "5749475a5e5d564c545150415d505c5a4f52564f4750575e524e54",
          quanxian: 1,
          pageNo: 0,
          pageSize: 10,
          leixing: 3
        }
      })
      .then(result => {
        // console.log("这是result.data.data");
        // console.log(result.data.data);
        var obj = result.data.data;
        // console.log("-------obj---------");
        // console.log(obj);
        this.tableData = obj;
        // console.log("----tableData----");
        // console.log(this.tableData);
        // console.log("----tableData[0]----");
        // console.log(this.tableData[0]);
        var code = result.data.code;
        // console.log("----code----");
        // console.log(code);
        if (code == "202") {
          this.guazhang_list = result.data.data;
          this.huiyuan_count = result.data.count;
          // console.log("----huiyuan_count----");
          // console.log(this.huiyuan_count);
        }
      })
      .catch(err => {
        this.$message.error("网络故障！请求失败!");
        // console.log(err);
      });
  }
};
</script>

<style>
.page-vip {
  /* background-color: red; */
  height: 100%;
}
</style>