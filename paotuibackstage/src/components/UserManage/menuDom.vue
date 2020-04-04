
<template>
<el-submenu index="1">
    <el-menu-item-group>
        <template slot="title">产品管理</template>
        <el-menu-item @click="toProductManagement" index='/home'>产品管理</el-menu-item>
        <el-menu-item index="/sort">分类管理</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="会员管理">
        <el-menu-item index="/memberManagement">会员管理</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="订单管理">
        <el-menu-item index="/orderlist">订单管理</el-menu-item>
    </el-menu-item-group>
</el-submenu>
</template>
<script>
    export default{
        name:'menuDom',//模板名称
        data(){
            return {
               
            }
        },
        beforeMount(){},
        mounted(){
        },
        methods:{
            toProductManagement(){
               console.log(this.$router)
            },
        }

    }
</script>
<style lang="scss" scoped>
.menu-box{
    width: 201px;
    height: 100%;
}
.el-menu-vertical{
    height: 100%;
}
.tac{
    height: 100%;
}
.el-menu.el-menu--inline .el-menu.el-menu--inline .el-menu-item i:before{content: ""}
.el-menu.el-menu--inline .el-submenu__title i:before{content: "\E61F"}
.el-menu.el-menu--inline .el-submenu.is-opened .el-submenu__title i:before,
.el-menu.el-menu--inline .el-menu-item.is-active i:before{content: "\e61d"}
</style>
