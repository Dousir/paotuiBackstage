<template>
  <div class='sort-box'>
    <div class="page-title">
      分类管理
    </div>
    <div class="search-box">
      <el-form ref="form" :model="form" label-width="80px" class="clearfix mt-20 mb-40">
        <el-form-item label="分类名称" class="el-form-input-item-f-l">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" class="el-form-input-item-f-l">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="启用" value="shanghai"></el-option>
            <el-option label="停用" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="el-form-input-item-f-l">
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <el-button type="primary" class="mb-20"  @click="dialogFormVisible = true">新增分类</el-button>
      <el-table :data="tableData" stripe style="width: 100%" >
        <el-table-column prop="date" label="序号" width=""></el-table-column>
        <el-table-column prop="name" label="标签名称" width=""></el-table-column>
        <el-table-column prop="name" label="状态" width=""></el-table-column>
        <el-table-column prop="name" label="排序" width=""></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template >
            <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
            <el-button type="text" size="small"  @click="centerDialogVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加分类框 -->
    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 确定删除提示框 -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>确定删除当前分类？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return{
        dialogFormVisible: false, //添加分类弹窗
        centerDialogVisible:false,  //删除分类弹框
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods:{
      onSubmit(){ //搜索按钮

      },
    }
  };
</script>
<style lang='scss' scoped>
</style>