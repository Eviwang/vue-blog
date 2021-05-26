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
      <el-button type="primary" size="mini" @click="onCreate()"> 发起话题 </el-button>
    </div>
  </el-header>

  <el-dialog title="发布话题" :visible="dialogVisible">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="创建者" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-select v-model="ruleForm.tag" placeholder="请选择">
          <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.label"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCancel()">取 消</el-button>
        <el-button type="primary" @click="onConfirm()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
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
      dialogVisible:false,
      activeIndex:'home',
      options: [
        {
          label: '精华'
        },
        {
          label: '分享'
        },
        {
          label: '问答'
        }
      ],
      ruleForm:{
        title: '',
        author: '',
        tag: '',
        content: ''
      }
    }
  },
  methods:{
    onCreate(){
      this.dialogVisible = true;
    },
    onCancel(){
      this.dialogVisible = false;
    },
    onConfirm(){
      this.dialogVisible = false;
    }
  },
  async mounted(){
    const data = await api.get("posts");
    console.log("data", data.data);
  }
}
</script>
