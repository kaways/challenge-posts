import { combineReducers } from "redux";

import dataPost from "../redux/posts/reducer";
import dataImage from "../redux/images/reducer";
import dataUser from "../redux/users/reducer";

export default combineReducers({
    dataPost, dataImage, dataUser
});
