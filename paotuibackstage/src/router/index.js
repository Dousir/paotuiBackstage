import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 获取动态路由组件
 * @param componentName dirNameIndex  组件名字，目录(模块)索引
 * **/
const _loadComponent = (componentName, dirNameIndex) => {
    // 首页，
    let dirNameArr = ['Home','Product']
    return () =>
        import (`@/components/${dirNameArr[dirNameIndex]}/${componentName}`)
}

/**
 * 获取路由配置
 * @param pathName dirNameIndex restParams  名称，目录(模块)索引, metaParam为字符串时设置title，其它则解构参数
 * **/
const _getRouterPath = (pathName, dirNameIndex, restParams) => (Object.assign({}, {
    path: pathName,
    name: pathName,
    component: _loadComponent(pathName, dirNameIndex)
}, typeof restParams === 'string' ? { meta: { title: restParams } } : restParams))



/* 初始路由 */
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            redirect: 'home',
            component: () => import ('@/components/index'),
            children: [
                _getRouterPath('home', 0, '首页'),
                _getRouterPath('productmanagement', 1, '产品管理'),
            ]
        },
    ]
})
console.log()