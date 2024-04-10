import Home from '../views/admin/home.vue'
import Rule from '../views/admin/rule.vue'
import Upload from '../views/admin/upload.vue'
import Dispose from '../views/admin/dispose.vue'
import Reward from '../views/admin/reward.vue'
import Review from '../views/admin/review/review.vue'
import ReviewDetail from '../views/admin/review/reviewDetail.vue'
import DisposeDetail from '../views/admin/disposeDetail.vue'

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
                { parentUrl: '/home', parentName: '首页' },
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
                { parentUrl: '/home', parentName: '首页' },
            ],
            index: 0
        }
    },
    {
        path: '/review',
        name: 'Review',
        component: Review,
        meta: {
            name: '综测材料审核',
            parentPath: [
                { parentUrl: '/home', parentName: '首页' },
            ],
            index: 0
        }
    },
    {
        path: '/reviewDetail',
        name: 'ReviewDetail',
        component: ReviewDetail,
        meta: {
            name: '综测材料审核详情',
            parentPath: [
                { parentUrl: '/home', parentName: '首页' },
                { parentUrl: '/review', parentName: '综测材料审核' },
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
                { parentUrl: '/home', parentName: '首页' },
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
                { parentUrl: '/home', parentName: '首页' },
            ],
            index: 0
        }
    },
    {
        path: '/disposeDetail',
        name: 'DisposeDetail',
        component: DisposeDetail,
        meta: {
            name: '申诉处理详情',
            parentPath: [
                { parentUrl: '/home', parentName: '首页' },
                { parentUrl: '/dispose', parentName: '申诉处理' },
            ],
            index: 0
        }
    }
]
