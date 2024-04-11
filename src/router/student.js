import Sys from '../views/student/sys.vue'
import Scholar from '../views/student/scholar.vue'
import Appeal from '../views/student/appeal.vue'
import Main from '../views/student/main.vue'
import AppealDetail from '../views/student/appealDetail.vue'
import Message from '../views/student/message.vue'

export default [
    {
        path: '/main',
        name: 'Main',
        component: Main,
        meta: {
            name: '首页',
            parentPath: [
                { parentUrl: '', parentName: '首页' },
            ],
            index: 0
        }
    },
    {
        path: '/sys',
        name: 'Sys',
        component: Sys,
        meta: {
            name: '综测申报',
            parentPath: [
                { parentUrl: '/main', parentName: '首页' },
            ],
            index: 0
        }
    },

    {
        path: '/scholar',
        name: 'Scholar',
        component: Scholar,
        meta: {
            name: '奖学金申报',
            parentPath: [
                { parentUrl: '/main', parentName: '首页' },

            ],
            index: 0
        }
    },
    {
        path: '/appealDetail',
        name: 'AppealDetail',
        component: AppealDetail,
        meta: {
            name: '奖学金公示详情',
            parentPath: [
                { parentUrl: '/main', parentName: '首页' },
                { parentUrl: '/appeal', parentName: '公示及申诉' },
            ],
            index: 0
        }
    },
    {
        path: '/appeal',
        name: 'Appeal',
        component: Appeal,
        meta: {
            name: '公示及申诉',
            parentPath: [
                { parentUrl: '/main', parentName: '首页' },
            ],
            index: 0
        }
    },{
        path: '/message',
        name: 'Message',
        component: Message,
        meta: {
            name: '消息通知',
            parentPath: [
                { parentUrl: '/main', parentName: '首页' },
            ],
            index: 0
        }
    }
]