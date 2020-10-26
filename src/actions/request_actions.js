import {postRequest} from '../services/post_api';
export const requestList = async(dispatch) => {
    let result = await postRequest();
    dispatch({
        type:"REQUEST_LIST",
        payload:result.data
    })
}