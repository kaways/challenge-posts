import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA_USER, receiveApiData_user } from "../../utils/actions";
import { fetchDataUser } from "../../utils/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchDataUser);
        yield put(receiveApiData_user(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA_USER, getApiData);
}
