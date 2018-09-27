import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA_IMAGES, receiveApiData_images } from "../../utils/actions";
import { fetchDataImages } from "../../utils/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchDataImages);
        yield put(receiveApiData_images(data));
    } catch (e) {
        console.log(e);
    }
}
export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA_IMAGES, getApiData);
}
