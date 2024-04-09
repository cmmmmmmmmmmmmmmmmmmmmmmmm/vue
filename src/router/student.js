import Sys from '../views/student/sys.vue'
import Scholar from '../views/student/scholar.vue'
import Appeal from '../views/student/appeal.vue'

export default [
    {
        path: '/sys',
        name: 'Sys',
        component: Sys,
        meta: {
            name: '综测申报',
            parentPath: [
                { parentUrl: '', parentName: '综测申报' },
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
                { parentUrl: '', parentName: '奖学金申报' },
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
                { parentUrl: '', parentName: '公示及申诉' },
            ],
            index: 0
        }
    }
]