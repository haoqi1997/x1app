const routes = [{
        path: "/",
        redirect: '/index/home'
    },
    {
        path: '/index',
        name: '首页盒子',
        meta: {
            title: '欢迎来到净慈寺首页'
        },
        component: resolve => require(['../views/Home.vue'], resolve),
        children: [{
                path: 'home',
                name: '首页',
                meta: {
                    title: '首页'
                },
                component: resolve => require(['../views/homepage'], resolve),
            },
            {
                path: 'regards',
                name: '关于净慈',
                meta: {
                    title: '关于净慈'
                },
                component: resolve => require(['../views/homepage/Regards.vue'], resolve),
            },
            {
                path: 'dynamic',
                name: '净慈动态',
                meta: {
                    title: '净慈动态'
                },
                component: resolve => require(['../views/homepage/Dynamic.vue'], resolve),
            },
            {
                path: 'figure',
                name: '净慈人物',
                meta: {
                    title: '净慈人物'
                },
                component: resolve => require(['../views/homepage/Figure.vue'], resolve),
            },
            {
                path: 'culture',
                name: '净慈文化',
                meta: {
                    title: '净慈文化'
                },
                component: resolve => require(['../views/homepage/Culture.vue'], resolve),
            },
            {
                path: 'law',
                name: '净慈法务',
                meta: {
                    title: '净慈法务'
                },
                component: resolve => require(['../views/homepage/Law.vue'], resolve),
            },
            {
                path: 'help',
                name: '助建净慈',
                meta: {
                    title: '助建净慈'
                },
                component: resolve => require(['../views/homepage/Help.vue'], resolve),
            },
            {
                path: 'volunteer',
                name: '净慈义工',
                meta: {
                    title: '净慈义工'
                },
                component: resolve => require(['../views/homepage/Volunteer.vue'], resolve),
            },
            {
                path: 'contactUS',
                name: '联系我们',
                meta: {
                    title: '联系我们'
                },
                component: resolve => require(['../views/homepage/ContactUS.vue'], resolve),
            }
        ]
    }
]

export default routes