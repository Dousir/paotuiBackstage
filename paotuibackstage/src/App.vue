<template>
  <div class="index" :style="{height:windowsHeight}">
    <div class="menuBox">
      <div class="logo">
        <span class="title">新零售后台</span>
      </div>
      <!-- 左侧导航菜单 -->
      <el-menu class="el-menu-vertical"
        default-active="2"
        background-color="#545c64"
        :default-openeds="openeds"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
          <menuDom></menuDom>
      </el-menu>
    </div>
    <div class="mainBox">
      <div class="user">
        <div class="headPortrait">
          <i class="iconfont iconshezhi"></i>
          <div class="shuxian"></div>
          <!-- <img src="../assets/img/avaster.jpg"> -->
           <el-dropdown>
                <div class="el-dropdown-link">
                    <span>这个杀手有点冷</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
      </div>
      <!-- 路由视图 -->
      <div class="main">
        <div class="router">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuDom from './components/UserManage/menuDom';

export default {
  components: {
      menuDom
  },
  data() {
    return {
      windowsWidth:10,
      windowsHeight:10,
      openeds:['1']
    };
  },
  mounted(){
    this.windowsHeight = document.documentElement.clientHeight+'px'
  },
  methods: {
    
  },

  created() {}
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.menuBox {
  min-width: 200px;
  height: 100%;
  background-color: #5167c0;
  position: relative;
  z-index: 2;
}
.mainBox {
  width: 100%;
  overflow: hidden;
}
.user {
  height: 48px;
  box-shadow:0px 2px 4px -2px rgba(85, 90, 135, 0.2);
  padding: 0px 20px;
  position: relative;
  z-index: 2;
}
.main {
  padding: 10px;
  background-color: #eee;
  height: calc(100% - 68px);
  overflow: hidden;
}
.router {
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(85, 90, 135, 0.2);
  overflow-y: auto;
}

.logo{
  color: #FFF;
  line-height: 46px;
  text-align: center;
}
.logo>i{
  font-size: 28px !important;
  position: relative;
  top: 3px;
}
.logo>.title{
  font-size:18px;
}
.headPortrait{
  display: flex;
  float: right;
}
.el-menu-vertical{
  height: 100%;
}
.headPortrait>*{
  line-height: 48px;
}
.headPortrait .iconshezhi{
  font-size: 24px !important;
}
.headPortrait .shuxian{
  width: 1px;
  height: 24px;
  margin: 12px 20px;
  background-color: #DCDFE6;
}
.headPortrait>img{
  margin: 8px 20px 0px 0px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
.headPortrait .el-icon-arrow-down:before{
  content: "\e790"
}
</style>