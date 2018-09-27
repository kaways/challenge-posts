import { RECEIVE_API_DATA_IMAGES} from "../../utils/actions";

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA_IMAGES:
            return data;
        default:
            return state;
    }
};