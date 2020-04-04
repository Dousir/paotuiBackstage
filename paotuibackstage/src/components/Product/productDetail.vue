<template>
  <div class='productDeatil-box'>
    <div class="page-title">产品详情</div>
    <el-form ref="formData" :model="formData" label-width="80px">
      <el-form-item label="产品名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="产品图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="formData.dialogVisible">
          <img width="100%" :src="formData.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="产品分类">
        <el-select v-model="formData.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="formData.resource">
          <el-radio label="上架"></el-radio>
          <el-radio label="下架"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品原价">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品售价">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品重量">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return{
        formData:{
          name: '',
          region:'',
          resource:'',
          dialogImageUrl: '',
          desc:'',
          dialogVisible: false,
        }
        
      }
    },
    methods:{
      onSubmit(){ //搜索按钮

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.formData.dialogImageUrl = file.url;
        this.formData.dialogVisible = true;
      }
    }
  };
</script>
<style lang='scss' scoped>
</style>