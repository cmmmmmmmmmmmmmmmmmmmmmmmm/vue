
//   德育的测评类型
export const DEYU_OPTION_OPTIONS = [
    { label: '思想表现', value: '思想表现' },
    { label: '文明守纪', value: '文明守纪' },
    { label: '学习态度', value: '学习态度' },
    { label: '班团工作', value: '班团工作' },
    { label: '社会责任', value: '社会责任' },

]

// 能力的测评类型
export const NENGLI_OPTION_OPTIONS = [
    { label: '自主学习能力 ', value: '自主学习能力 ' },
    { label: '社会实践能力', value: '社会实践能力' },
    { label: '组织交流能力', value: '组织交流能力' },
    { label: '创新创业能力 ', value: '创新创业能力 ' },
    { label: '文体特长', value: '文体特长' },
]

// 测评分类
export const TYPE_OPTIONS = [
    { label: '德育', value: '德育', children: DEYU_OPTION_OPTIONS },
    { label: '能力', value: '能力', children: NENGLI_OPTION_OPTIONS },
]



export const SYS_LIST = {

    "currPage": 1,
    "list": [
        {
            id: 1,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '思想表现',
            // 测评分值
            score: 18,
            name: '大一入党积极分子',
            // 附件
            attachment: [
                {
                    name: '大一入党积极分子',
                    url: require('@/assets/review/zs01.png')
                }
            ],
        }, {
            id: 2,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '文明守纪',
            // 测评分值
            score: 5,
            // 附件
            name: '2023年 10月文明室安全卫生检查优秀',
            attachment:[{name:'文明室安全卫生检查优秀',url:require('@/assets/review/zs02.png')}],

            // attachment: [require('@/assets/review/zs02.png')],
        },
        {
            id: 3,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '文明守纪',
            // 测评分值
            score: 5,
            // 附件
            name: '2023年 12月文明室安全卫生检查优秀',
            attachment:[{name:'文明室安全卫生检查优秀',url:require('@/assets/review/zs03.png')}],
            // attachment: [require('@/assets/review/zs03.png')],
        }, {
            id: 4,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '学习态度 ',
            // 测评分值
            score: 10,
            name: '2021 年中国大学生创新创业项目立项',
            // 附件
            attachment:[{name:'2021 年中国大学生创新创业项目立项',url:require('@/assets/review/zs07.png')}],
            // attachment: [
            //     require('@/assets/review/zs07.png'),
            // ],
        },
        {
            id: 5,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '学习态度 ',
            // 测评分值
            score: 10,
            name: '2021 年中国大学生计算机设计大赛三等奖',
            // 附件
            attachment:[{name:'2021 年中国大学生计算机设计大赛三等奖',url:require('@/assets/review/zs01.png')}],
            // attachment: ['2021 年中国大学生计算机设计大赛三等奖'
            // ],
        }, {
            id: 6,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '班团工作',
            // 测评分值
            score: 19,
            name: '安吉校区社团优秀学生社团干部',
            // 附件
            attachment:[{name:'安吉校区社团优秀学生社团干部',url:require('@/assets/review/zs01.png')}],
            // attachment: [
            //     require('@/assets/review/zs01.png')
            // ]
        },
        {
            id: 7,
            // 测评分类
            type: '德育',
            // 测评类型
            option: '社会责任',
            // 测评分值
            score: 10,
            name: '献血',
            // 附件
            attachment:[{name:'献血',url:require('@/assets/review/zs02.png')}],
            // attachment: [
            //     require('@/assets/review/zs02.png')

            // ]
        },
        {
            id: 8,
            type: '能力',
            option: '自主学习能力',

            score: 3,
            name: '学科竞赛 2021年中国大学生计算机设计大赛三等奖',
            attachment:[{name:'学科竞赛 2021年中国大学生计算机设计大赛三等奖',url:require('@/assets/review/zs04.png')}],
            // attachment: [
            //     require('@/assets/review/zs04.png')
            // ],

        },
        {
            id: 9,
            type: '能力',
            option: '自主学习能力',

            score: 3,
            name: '英语四级',
            attachment:[{name:'英语四级',url:require('@/assets/review/zs05.png')}],
            // attachment: [

            //     require('@/assets/review/zs05.png')
            // ],

        },
        {
            id: 10,
            type: '能力',
            option: '组织交流能力',
            score: 5,
            name: '安吉校区社团优秀学生社团干部',
            attachment:[{name:'安吉校区社团优秀学生社团干部',url:require('@/assets/review/zs08.png')}],
            // attachment: [
            //     require('@/assets/review/zs08.png')
            // ],
        }, {
            id: 11,
            type: '能力',
            option: '创新创业能力',
            score: 40,
            name: '2023年中国大学生计算机设计大赛三等奖',
            attachment:[{name:'2023年中国大学生计算机设计大赛三等奖',url:require('@/assets/review/zs09.png')}],
            // attachment: [
            //     require('@/assets/review/zs09.png')

            // ],
        },
        {
            id: 12,
            type: '能力',
            option: '创新创业能力',
            score: 12,
            name: '2023年中国大学生创新创业项目立项',
            attachment:[{name:'2023年中国大学生创新创业项目立项',url:require('@/assets/review/zs07.png')}],
            // attachment: [

            //     require('@/assets/review/zs01.png'),
            // ],
        }, {
            id: 13,
            type: '能力',
            option: '文体特长',
            score: 2,
            name: '浙江科技学院安吉校区“诚信在我心中”创意设计比赛二等奖',
            attachment:[{name:'浙江科技学院安吉校区“诚信在我心中”创意设计比赛二等奖',url:require('@/assets/review/zs06.png')}],
            // attachment: [
            //     require('@/assets/review/zs04.png')

            // ],
        }
    ],


    "pageSize": 10,
    "totalCount": 13,
    "totalPage": 2


}
