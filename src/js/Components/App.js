import React, { Component } from 'react';
import '../../css/App.css';
import * as AppActions from '../Actions/AppActions';
import AppStore from '../Stores/AppStore';
import NavBar from './NavBar';
import { 
    Button, 
} from 'react-bootstrap';

export default class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
            items: AppStore.getAllItems()
        }
    }

    componentDidMount() {
        AppStore.on("storeUpdated", this.updateItems);
    }

    componentWillUnmount() {
        AppStore.removeListener("storeUpdated", this.updateItems);
    }

    updateItems = () => {
        this.setState({items: AppStore.getAllItems()})
    };

    onCreateItem = () => {
    	AppActions.createItem(Date.now());
    }

    onClearItems = () => {
    	AppActions.clearItems();
    }

    render() {

    	const listItems = this.state.items.map((item) =>
			<li className="item">{item}</li>
		);

        return (
            <div className="App">
            	<NavBar/>
                <h2>
                    React JS Flux BoilerPlate - Create / Clear Items
                </h2>
                <div className="Description">
                	<code>React JS</code> + <code>Flux</code> + <code>Bootstrap</code> + <code>React Router</code>
                </div>
                <Button className="item-btn" onClick={this.onCreateItem}> Create Item </Button>
                <Button className="item-btn" onClick={this.onClearItems}> Clear Items </Button>
                <ul>{listItems}</ul>
            </div>
        );
    }
}
