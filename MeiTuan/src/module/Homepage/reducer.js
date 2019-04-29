/*
 * @Author: Young 
 * @Date: 2019-04-26 10:11:48 
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 18:26:40
 */

import {
    HOMEPAGE_FETCH,
    HOMEPAGE_FETCH_SEARCHBAR,
    HOMEPAGE_FETCH_FAIL,
    HOMEPAGE_MENU_PAGECHANGE,
    HOMEPAGE_GRID_FETCH,
} from "./actionTypes";
import common from "../../Common/common";

const initialState = {
    homepage: {
        menuInfo: {
            items: common.menuInfos,
            currentPage: 0
        },
        gridInfos: [],
        sections: [{
            title: '',
            data: []
        }],
    },

    searchBar: {
        text: '搜一下'
    }
};

export default (state = initialState, action) => {

    switch (action.type) {
        // case `${HOMEPAGE_FETCH}${common.PENDING}`:
        // {
        //     return {
        //         ...state,
        //         homepage: {
        //             menuInfo: state.homepage.menuInfo,
        //             gridInfos: state.homepage.gridInfos,
        //             datas: ['请求中']
        //         },
        //     }
        // }

        case `${HOMEPAGE_FETCH}${common.FULFILLED}`:
            {
                return {
                    ...state,
                    homepage: {
                        menuInfo: state.homepage.menuInfo,
                        gridInfos: state.homepage.gridInfos,
                        sections: [{
                            title: '猜你喜欢',
                            data: action.payload.data.result.data
                        }]
                    },
                }
            }

            // case HOMEPAGE_FETCH_FAIL:
            //     {
            //         return {
            //             ...state,
            //             homepage: {
            //                 menuInfos: state.homepage.menuInfo,
            //                 gridInfos: state.homepage.gridInfos,
            //                 datas: ['错误了']
            //             }
            //         }
            //     }
        case HOMEPAGE_FETCH_SEARCHBAR:
            {
                return {
                    ...state,
                    searchBar: {
                        text: action.text
                    }
                };
            }

        case HOMEPAGE_MENU_PAGECHANGE:
            {
                return {
                    ...state,
                    homepage: {
                        menuInfo: {
                            items: state.homepage.menuInfo.items,
                            currentPage: action.currentPage
                        },
                        gridInfos: state.homepage.gridInfos,
                        sections: state.homepage.sections
                    }
                }
            }

        case `${HOMEPAGE_GRID_FETCH}${common.FULFILLED}`:
            {
                return {
                    ...state,
                    homepage: {
                        menuInfo: state.homepage.menuInfo,
                        gridInfos: action.payload,
                        sections: state.homepage.sections
                    }
                }
            }
    }
    return state;
};