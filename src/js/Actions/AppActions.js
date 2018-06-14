import dispatcher from "../Dispatcher";
import * as Constants from "../Constants";

export function createItem(item) {
    dispatcher.dispatch({
        type: Constants.APP_ACTIONS.CREATE_ITEM,
        item: item
    });
}

export function clearItems(){
	dispatcher.dispatch({
		type : Constants.APP_ACTIONS.CLEAR_ITEMS
	});
}