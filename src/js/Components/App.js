import React, { Component } from 'react';
import '../../css/App.css';
import * as AppActions from '../Actions/AppActions';
import AppStore from '../Stores/AppStore';

class App extends Component {

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
			<li key={item}>{item}</li>
		);

        return (
            <div className="App">
                <h2>
                    React JS Flux BoilerPlate
                </h2>
                <button onClick={this.onCreateItem}> Create Item </button>
                <button onClick={this.onClearItems}> Clear Items </button>
                {listItems}
            </div>
        );
    }
}

export default App;
