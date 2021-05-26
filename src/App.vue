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
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
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

    <el-main class="main">
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部" name="all">
          <el-table :data="tableData" ref="table">
            <el-table-column label="标题" width="180" prop="title"> </el-table-column>
            <el-table-column label="发布者" width="180" prop="author"> </el-table-column>
            <el-table-column label="内容" width="180" prop="content"> </el-table-column>
            <el-table-column label="标签" width="180">
              <template #default="scope">
                <el-tag size="medium">{{ scope.row.tag }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-button size="mini" @click="onEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="onDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="精华" name="good">精华</el-tab-pane>
        <el-tab-pane label="分享" name="shared">分享</el-tab-pane>
        <el-tab-pane label="问答" name="question">问答</el-tab-pane>
      </el-tabs>
    </el-main>
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

.main {
  width: 960px;
  margin: auto;
  background: white;
  min-height: 600px;
  margin-top: 16px;
}
</style>
<script>
import api from './api/index';

export default {
  data() {
    return {
      dialogVisible: false,
      activeIndex: 'home',
      activeName: 'all',
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
      tableData:[],
      ruleForm: {
        title: '',
        author: '',
        tag: '',
        content: ''
      }
    };
  },
  methods: {
    onCreate() {
      this.dialogVisible = true;
    },
    onCancel() {
      this.dialogVisible = false;
    },
    onConfirm() {
      this.dialogVisible = false;
    }
  },
  async mounted() {
    const data = await api.get('posts');
    console.log('data', data.data);
  }
};
</script>
