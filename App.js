import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "../utils/store";

import Posts from "./containers/Posts";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={Posts} exact />
                            <Route path="/Posts" component={Posts}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
