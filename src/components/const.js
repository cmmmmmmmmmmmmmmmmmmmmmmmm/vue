// 管理员菜单
export const ADMIN_MENU = [
    {

        name: '首页',
        icon: 'House',
        key: 0,
        path: '/home'
    }, {
        name: '规则发布',
        icon: 'EditPen',
        key: 1,
        path: '/rule'
    },{
        name:'成绩上传'
        ,icon:'MessageBox'
        ,key:2
        ,path:'/upload'
    },{
        name:'综测材料审核',
        icon:'Edit',
        key:3,
        path:'/review'
    },
    {
        name:'奖学金评定',
        icon:'PieChart',
        key:4,
        path:'/reward'
    },
    {
        name:'申诉处理',
        icon:'Message',
        key:4,
        path:'/dispose'
    }
]

// 学生菜单
export const STUDENT_MENU = [
    {

        name: '综测申报',
        icon: 'Notification',
        key: 1,
        path: '/sys'
    }, {
        name: '奖学金申报',
        icon: 'Connection',
        key: 2,
        path: '/scholar'
    },{
        name:'公示及申诉',
        icon:'EditPen',
        key:3,
        path:'/appeal'
    }
]