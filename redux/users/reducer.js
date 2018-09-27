import { RECEIVE_API_DATA_USER} from "../../utils/actions";

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA_USER:
            return data;
        default:
            return state;
    }
};