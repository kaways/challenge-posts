import React from "react";
import '../css/App.css';
import {connect} from "react-redux";
import { requestApiData } from "../../utils/actions";
import { requestApiData_images } from "../../utils/actions";
import { requestApiData_user } from "../../utils/actions";

import { Cards } from "../components/Cards";
import { Header } from "../components/Header";

class Posts extends React.Component {
    constructor(){
        super();
        this.state = {
            json: {},
            list: {},
            howManyCardsShouldLoad: 9,
            loadingState: false,
            updatedList: {},
            items: [],
            it: true
        };
    }

    componentDidMount() {
        this.props.requestApiData();
        this.props.requestApiData_images();
        this.props.requestApiData_user();
        this.refs.iScroll.addEventListener("scroll", () => {
            if (
                this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
                this.refs.iScroll.scrollHeight
            ) {
                this.loadMoreItems();
            }
        });
    }

    loadMoreItems() {
        var cards;
        this.setState({ loadingState: true });
        this.setState({ howManyCardsShouldLoad: this.state.howManyCardsShouldLoad + 9, loadingState: false });
        cards = this.displayItems(this.json);
        this.setState({items: cards})
    }


    ConcatJson(user, image, post){
        var cards;
        var hash = new Map();
        user.concat(image, post).forEach(function(obj) {
            hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj))
        });
        this.json = Array.from(hash.values());
        this.list = this.json;
        cards = this.displayItems(this.json);
        this.setState({items: cards, it: false})
    }

    displayItems(data) {
        var cards = [];
        if (typeof(data[0]) === "undefined") {
            return cards;
        } else {
            for (var i = 0; i < this.state.howManyCardsShouldLoad; i++) {
                if (typeof(data[i].company) === "undefined") {
                    data[i].company = "";
                }
                cards.push({
                    image: data[i].url,
                    title: data[i].title,
                    text: data[i].body,
                    autor: data[i].name,
                    company: data[i].company.name
                });
            }
            return cards;
        }
    }

    searchCards (event){
        var cards;
        this.updatedList = this.list;
        var filtered = this.updatedList.filter(function(item){
            return item.title.toLowerCase().search(
                event.toLowerCase()) !== -1;
        });
        if(event !== "") {
            filtered.sort(function (a, b) {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            });
        }
        this.json = filtered;
        cards = this.displayItems(filtered);
        this.setState({items: cards})
    }


    render() {
        return (
            <div className="post" ref="iScroll">
                <div className="container">
                    <Header
                        onKeyUp={this.searchCards.bind(this)}
                    />
                    {  this.props.user.length && this.props.image.length && this.props.post.length ?
                        <div className="loading">
                            { this.state.it ?
                                <div>{
                                    this.ConcatJson(this.props.user, this.props.image, this.props.post) }
                                    {this.state.it = true
                                    } </div>
                                : ""
                            }
                            { <Cards items={this.state.items} /> }
                        </div>
                        : "Loading..."}
                </div>
            </div>
        );
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

