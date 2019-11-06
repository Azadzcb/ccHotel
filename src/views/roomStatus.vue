<template>
  <el-container>
    <div class="box">
      <el-header height="50px">
        <div class="rs-header-box">
          <!-- 选择器 -->
          <div class="rs-box-select">
            <el-select v-model="value" placeholder="请选择" class="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select v-model="value" placeholder="请选择" class="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select v-model="value" placeholder="请选择" class="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- 搜索框 -->
          <div class="input-serach">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <span>
              <el-button class="button-refresh" type="primary" icon="el-icon-refresh">刷新</el-button>
          </span>
          <!-- <div style="clear: both"></div> -->
        </div>
      </el-header>
      <el-main v-loading="Loading">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "roomStatus",
  data() {
    return {
      // 不加载
      Loading: false,
      // 选择器参数
      options: [
        {
          value: "选项1",
          label: "选项1"
        },
        {
          value: "选项2",
          label: "选项2"
        },
        {
          value: "选项3",
          label: "选项3"
        },
        {
          value: "选项4",
          label: "选项4"
        }
      ],
      value: ""
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
/* 主要内容样式 */
.el-main {
  padding: 10px;
}
/* 行列样式 */
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 100px;
}
/* 行背景颜色 */
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

/* 装header的盒子样式 */
.rs-header-box {
  width: 100%;
  text-align: left;
  line-height: 59px;
  padding-left: 10px;
  /* position: relative; */
}
/* header中选择器样式 */
.el-select {
  width: 95px;
  margin-right: 10px;
}
/* header中装选择器的盒子 */
.rs-box-select{
    display: inline-block;
}
/* header中搜索框样式 */
.input-serach {
  display: inline-block;
  padding-right: 20px;
}
/* 刷新图标样式 */
.rs-header-box > span {
    float: right;
    line-height: 0;
    position: relative;
    top: 13px;
    right: 20px;
}
.button-refresh{
    padding: 10px;
    font-size: 15px;
    /* float: right; */
}
</style>