import jquery from 'jquery';
import {CALL_API} from './callApi'
export function callApi(endpoint , method, data) {
    let dataType  = '';
    let contentType  = "application/x-www-form-urlencoded";
    return jquery.ajax({
        url: endpoint,
        type: method || 'POST',
        contentType: contentType,
        //headers: myHeaders,
        data: data,
        dataType: dataType
    })
}
export default(store) => (next) => (action) => {
    const callAPI  = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    let {endpoint} = callAPI;
    const {method, types, data, success, errorfunc} = callAPI;
    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }
    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }
    const [requestType,successType,failureType] = types;
    next(actionWith({type:requestType}));
    return callApi(endpoint,method,data).done((response)=>{
        next(actionWith({type:successType,response:response}));
        if(typeof success==='function'){
            success(response);
        }
    }).fail((response)=>{
        next(actionWith({type:failureType,response:response}))
        if(typeof errorfunc ==='function'){
            errorfunc(response)
        }
    })
}