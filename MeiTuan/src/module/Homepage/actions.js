/*
 * @Author: Young
 * @Date: 2019-04-26 10:03:48
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 22:11:14
 */

import {
  HOMEPAGE_FETCH,
  HOMEPAGE_FETCH_SEARCHBAR,
  HOMEPAGE_MENU_PAGECHANGE,
  HOMEPAGE_GRID_FETCH,
} from "./actionTypes";
import common from "../../Common/common";
import API from "../../Common/API";

export const homePageFetch = (str) => ({
  type: HOMEPAGE_FETCH,
  payload: API.get('/index', {
    baseURL: 'http://v.juhe.cn/toutiao',
    params: {
      'type': 'toutiao',
      'key': 'c470dae6931d85934a3ee3ec566485ef'
    }
  })
});

export const searchBarFetch = (text) => ({
  type: HOMEPAGE_FETCH_SEARCHBAR,
  text: text
});

export const updateHomePageMenuPage = (page) => ({
  type: HOMEPAGE_MENU_PAGECHANGE,
  currentPage: page
});

export const fetchGrid = () => ({
  type: HOMEPAGE_GRID_FETCH,
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(common.gridInfos);
    }, 1000);
  })
});