import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
    lang: {
        name: "中文",
        locale: "cn"
    },
    message: {
        'hello': '你好，世界',
    },
    aside_menu: {
        admin:"管理员",
        homePage: "首页",
        systemSetup: "系统设置",
        userManagement: "用户管理",
        fundManagement: "资金管理",
        navigation: "导航",
        navigationSub: {
            roleManagement: "角色管理",
            userManagement: "用户管理",
            userPrivileges: "角色权限",
            activity: "活动"
        },
        navigationSubChild: {
            roleManagement: "角色管理",
            userManagement: "用户管理",
            userPrivileges: "角色权限",
            activity: "活动"
        },
        errorPage: "错误页面"
    },
    head_menu: {
        personalInformation: "个人信息",
        modifyInformation: "修改信息",
        signOut: "退出登录"
    },
    ...zhLocale
}

export default cn