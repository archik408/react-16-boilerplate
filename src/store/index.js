/**
 * @module Store
 *
 * @desc Module provide access to store (brings together actions and reducers) and store dispatcher instances.
 * The store singleton object has the following responsibilities:
 * - Holds application state;
 * - Allows access to state via getState();
 * - Allows state to be updated via dispatch(action);
 * - Registers listeners via subscribe(listener);
 * - Handles unregistering of listeners via the function returned by subscribe(listener)
 */

import store from './storeSingleton';
import Dispatcher from './dispatcher';

const dispatcher = new Dispatcher(store);

export { dispatcher, store };