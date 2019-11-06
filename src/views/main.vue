<template>
  <el-container style="border: 1px solid;height: 100% ">
    
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
      <el-menu-item><div class="logo">CCHotel</div></el-menu-item>
        <el-menu-item index="1">
          <!-- 房态盘路由链接 -->
          <router-link :to="{name: 'roomStatus'}">房态盘</router-link>
        </el-menu-item>
        <!-- 客人信息路由链接 -->
        <el-menu-item index="2">
          <router-link :to="{name: 'guestInfo'}">客人信息</router-link>
        </el-menu-item>
        <!-- 客人帐路由链接 -->
        <el-menu-item index="3">
          <router-link :to="{name: 'guestBill'}">客人帐</router-link>
        </el-menu-item>
        <!-- 会员卡查询路由链接 -->
        <el-menu-item index="4">
          <router-link :to="{name: 'vipQuery'}">会员卡查询</router-link>
        </el-menu-item>

        <el-submenu index="5">
          <template slot="title">更多</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: #CAD3C8">
        <el-menu :default-openeds="['1', '3']" style="background-color: #CAD3C8">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>导航二
            </template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>导航三
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <div class="box">
          <router-view></router-view>
          <!--标签卡 
          <el-tabs type="card">
          <el-tab-pane label="房态盘">
            <router-view />
          </el-tab-pane>
          <el-tab-pane label="客人信息">
            <router-view />
          </el-tab-pane>
          <el-tab-pane label="客人帐">
            <router-view />
          </el-tab-pane>
          <el-tab-pane label="会员卡查询">
            <router-view />
          </el-tab-pane>
          </el-tabs>-->
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      activeIndex: "1",
      // 添加标签页数据
      addTabsValue: "2",
      editableTabs: [
        {
          title: "", //标签标题
          name: "1",
          content: "---内容---"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    // 点击header头部数组  0: "1"length: 1为第一个
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 标签业务代码
    //新增标签页
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      this.addTabsValue = newTabName;
    },
    // 删除标签
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.addTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.addTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
  background-color: white;
}
.logo{
  width: 180px;
  font-size: 30px;
  /* display: inline-block; */
}
.el-header {
  padding: 0;
}
a {
  display: inline-block;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>