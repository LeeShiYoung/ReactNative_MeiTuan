/*
 * @Author: _coderYoung
 * @Date: 2019-05-14 20:48:27
 * @LastEditTime: 2019-05-17 18:26:30
 * @LastEditors: _coderYoung
 */
import Navigator from "./Navigator";
import { NavigationActions } from "react-navigation";


const initialState = Navigator.router.getStateForAction(NavigationActions.init(), null);

const navigationReducer = (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default navigationReducer
