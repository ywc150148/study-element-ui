export default [{
        path: '/admin',
        name: 'admin',
        redirect: '/admin/index',
        component: resolve => require(['@/components/layout/Home.vue'], resolve),
        meta: {
            title: '首页'
        },
        children: [{
            path: '/admin/index',
            name: 'homePage',
            component: resolve => require(['./Index.vue'], resolve),
            meta: {
                title: '系统首页'
            }
        }, {
            path: '/admin/UserManagement',
            name:"userManagement",
            component: resolve => require(['./UserManagement.vue'], resolve),
            meta: {
                title: '用户管理'
            }
        }, {
            path: '/admin/navigation',
            name: "navigation",
            component: resolve => require(['./navigation/index.vue'], resolve),
            meta: {
                title: '导航'
            },
            children: [{
                path: '/admin/navigation/n1',
                component: resolve => require(['./navigation/n1.vue'], resolve),
                meta: {
                    title: 'n1'
                }
            }, {
                path: '/admin/navigation/n2',
                component: resolve => require(['./navigation/n2.vue'], resolve),
                meta: {
                    title: 'n2'
                }
            }, {
                path: '/admin/navigation/n3',
                component: resolve => require(['./navigation/n3.vue'], resolve),
                meta: {
                    title: 'n3'
                }
            }, {
                path: '/admin/navigation/n4',
                component: resolve => require(['./navigation/n4.vue'], resolve),
                meta: {
                    title: 'n4'
                }
            }, ]
        }, ]
    },

]