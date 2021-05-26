<template>
  <div>
    <el-header>
    <el-menu
      :default-active="activeIndex"
      class="menu"
      mode="horizontal"
      background-color="#444"
      text-color="#ccc"
      active-text-color="#fff"
    >
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="getStart">新手入门</el-menu-item>
    </el-menu>
    <div>
      <el-button type="primary" size="mini" @click="onCreate"> 发起话题 </el-button>
    </div>
  </el-header>
  </div>
</template>
<style scoped>
.el-header {
  background-color: #444;
  line-height: 60px;
  display: flex;
  justify-content: center;
}
.el-header .menu {
  width: 960px;
  border-bottom: none !important;
}
</style>
<script>
import api from './api/index';

export default{
  data(){
    return {
      activeIndex:'home',

    }
  },
  methods:{
    onCreate(){
      
    }
  },
  async mounted(){
    const data = await api.get("posts");
    console.log("data", data.data);
  }
}
</script>
