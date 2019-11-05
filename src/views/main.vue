<template>
  <el-container>
  <el-header>Header<br>555
    <ul>
      <!-- 路由链接 -->
      <li><router-link :to="{name: 'vipQuery'}">会员卡查询</router-link></li>
    </ul>
  </el-header>
  <!-- <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container> -->
</el-container>
</template>

<script>

export default {
    name: 'main',
}
</script>

<style>

</style>