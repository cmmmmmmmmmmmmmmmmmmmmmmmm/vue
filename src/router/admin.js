import Home from '../views/admin/home.vue'
import Rule from '../views/admin/rule.vue'
import Upload from '../views/admin/upload.vue'
import Review from '../views/admin/review.vue'
import Dispose from '../views/admin/dispose.vue'
import Reward from '../views/admin/reward.vue'

export default [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            name: '首页',
            parentPath: [
                { parentUrl: '', parentName: '首页' },
            ],
            index: 0
        }
    },
    {
        path: '/rule',
        name: 'Rule',
        component: Rule,
        meta: {
            name: '综测及奖学金相关规则发布',
            parentPath: [
                { parentUrl: '', parentName: '规则发布' },
            ],
            index: 0
        }
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload,
        meta: {
            name: '学生成绩上传',
            parentPath: [
                { parentUrl: '', parentName: '成绩上传' },
            ],
            index: 0
        }
    },
    {
        path: '/review',
        name: 'Review',
        component: Review,
        meta: {
            name: '综测材料审核及发布公示',
            parentPath: [
                { parentUrl: '', parentName: '综测材料审核' },
            ],
            index: 0
        }
    },
    {
        path: '/reward',
        name: 'Reward',
        component: Reward,
        meta: {
            name: '奖学金评定及发布公示',
            parentPath: [
                { parentUrl: '', parentName: '奖学金评定' },
            ],
            index: 0
        }
    },
    {

        path: '/dispose',
        name: 'Dispose',
        component: Dispose,
        meta: {
            name: '申诉处理',
            parentPath: [
                { parentUrl: '', parentName: '申诉处理' },
            ],
            index: 0
        }
    }
]
