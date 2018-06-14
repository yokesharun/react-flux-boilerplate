import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './Components/App';
import Page from './Components/Page';

export default class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
             	<Switch>
                	<Route exact path="/" component={App} />
                    <Route exact path="/page" component={Page} />
            	</Switch>
            </BrowserRouter>
        );
    }
}