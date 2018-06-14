import dispatcher from "../Dispatcher";
import { EventEmitter } from "events";
import * as Constants from "../Constants";

class AppStore extends EventEmitter{

	constructor() {
        super();
        this.items = [];
    }

    handleActions(action) {
        switch (action.type) {
            case Constants.APP_ACTIONS.CREATE_ITEM: {
                this.items.push(action.item);
                this.emit("storeUpdated");
                break;
            }

            case Constants.APP_ACTIONS.CLEAR_ITEMS: {
            	this.items = [];
            	this.emit("storeUpdated");
                break;
            }

            default: {
            }
        }
    }

    getAllItems() {
        return this.items;
    }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;