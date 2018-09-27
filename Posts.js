import React from "react";
import '../css/App.css';
import {connect} from "react-redux";
import { requestApiData } from "../../utils/actions";
import { requestApiData_images } from "../../utils/actions";
import { requestApiData_user } from "../../utils/actions";

class Posts extends React.Component {
    componentDidMount() {
        this.props.requestApiData();
        this.props.requestApiData_images();
        this.props.requestApiData_user();
    }



    render() {
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.dataPost,
        image: state.dataImage,
        user: state.dataUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestApiData: () => {
            dispatch(requestApiData());
        },
        requestApiData_images: () => {
            dispatch(requestApiData_images());
        },
        requestApiData_user: () => {
            dispatch(requestApiData_user());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

