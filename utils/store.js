import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../redux/reducers";
import mySagaPost from "../redux/posts/sagas";
import mySagaImage from "../redux/images/sagas";
import mySagaUser from "../redux/users/sagas";
// create the saga middleware
const sagaMiddlewarePost = createSagaMiddleware();
const sagaMiddlewareImage = createSagaMiddleware();
const sagaMiddlewareUser = createSagaMiddleware();
// mount it on the Store
export default createStore(reducer, applyMiddleware(sagaMiddlewarePost, sagaMiddlewareImage, sagaMiddlewareUser));
// then run the saga
sagaMiddlewarePost.run(mySagaPost);
sagaMiddlewareImage.run(mySagaImage);
sagaMiddlewareUser.run(mySagaUser);