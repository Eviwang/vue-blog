<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
import api from './api/index';

export default{
  async mounted(){
    const data = await api.get("posts");
    console.log("data", data.data);
  }
}
</script>
