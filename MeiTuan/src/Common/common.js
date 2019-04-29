/*
 * @Author: Young 
 * @Date: 2019-04-25 19:20:01 
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 22:16:57
 */

import {
    Dimensions
} from 'react-native';

export default {
    FULFILLED: '_FULFILLED',
    PENDING: '_PENDING',
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    menuInfos: [{
            title: '美食',
            icon: require('../img/home/icon_homepage_food_category.png')
        },
        {
            title: '电影',
            icon: require('../img/home/icon_homepage_movie_category.png')
        },
        {
            title: '酒店',
            icon: require('../img/home/icon_homepage_hotel_category.png')
        },
        {
            title: 'KTV',
            icon: require('../img/home/icon_homepage_ktv_category.png')
        },
        {
            title: '优惠买单',
            icon: require('../img/home/icon_homepage_default.png')
        },
        {
            title: '周边游',
            icon: require('../img/home/icon_homepage_foottreat_category.png')
        },
        {
            title: '生活服务',
            icon: require('../img/home/icon_homepage_life_service_category.png')
        },
        {
            title: '休闲娱乐',
            icon: require('../img/home/icon_homepage_entertainment_category.png')
        },
        {
            title: '丽人/美发',
            icon: require('../img/home/icon_homepage_beauty_category.png')
        },
        {
            title: '购物',
            icon: require('../img/home/icon_homepage_shopping_category.png')
        },

        {
            title: '丽人/美发',
            icon: require('../img/home/icon_homepage_beauty_category.png')
        },
        {
            title: '电影',
            icon: require('../img/home/icon_homepage_movie_category.png')
        },
        {
            title: '周边游',
            icon: require('../img/home/icon_homepage_foottreat_category.png')
        },
        {
            title: '酒店',
            icon: require('../img/home/icon_homepage_hotel_category.png')
        },
        {
            title: '优惠买单',
            icon: require('../img/home/icon_homepage_default.png')
        },
        {
            title: '休闲娱乐',
            icon: require('../img/home/icon_homepage_entertainment_category.png')
        },
        {
            title: 'KTV',
            icon: require('../img/home/icon_homepage_ktv_category.png')
        },
    ],

    gridInfos: [
        {
            title: '免费拍',
            subTitle: '拍照写真',
            color: '',
            icon: 'http://06imgmini.eastday.com/mobile/20190429/20190429220446_71b49152dfc9975ccbeddaf9c36e74fb_1_mwpm_03200403.jpg'
        },
        {
            title: '大片特惠',
            subTitle: '复仇者联盟4',
            icon: 'http://00imgmini.eastday.com/mobile/20190429/20190429220405_e5268b3a6ac7771cc35c4891156bbc2e_2_mwpm_03200403.jpg',
            color: ''
        },
        {
            title: '特价日',
            subTitle: '跟团游清仓',
            color: '',
            icon: 'http://02imgmini.eastday.com/mobile/20190429/20190429215825_2f7c27ee796fefa928c93795293e6b9b_7_mwpm_03200403.jpg'
        },
        {
            title: '今日推荐',
            subTitle: '品质生活指南',
            icon: 'http://06imgmini.eastday.com/mobile/20190429/2019042921_7911776f47f9482092bfab3e3f623b68_4405_cover_mwpm_03200403.jpg',
            color: ''
        }
    ]
}