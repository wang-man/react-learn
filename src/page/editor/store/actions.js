import axios from 'axios';
import * as types from "./actionTypes";

// 获取页面初始数据
const getHomeData = (params) => {
  return (dispatch) => {
    axios.get("api/home.json", { params }).then((res) => {
      const data = res.data.data;
      const action = {
        type: types.GET_HOME_DATA,
        topicList: data.topicList,
        artList: data.artList,
        channelList: data.channelList,
        authorList: data.users
      }
      dispatch(action);
    })
  }
}

export { getHomeData }