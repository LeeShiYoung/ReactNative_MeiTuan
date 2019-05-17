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
    console.log('🍎🍎🍎🍎🍎🍎');
    console.log(action);
    console.log(state);
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default navigationReducer


// export default AppRouteConfigs.router.getStateForAction = (action, state) => {
//     console.log(action);
//     console.log(state);
//     return defaultGetStateForAction(action, state);
// }