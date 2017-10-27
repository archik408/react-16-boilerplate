/**
 * @module Actions/Test Items
 */

import {
    getItems,
    createItem,
    updateItem,
    deleteItem
} from '../services/backend/testItems';

import { dispatcher } from '../store';

/**
 * Perform getItems action
 *
 * @returns {void}
 */
export function performGetItems() {
    dispatcher.dispatchPromise(
        getItems,
        'GET_ITEMS',
        (state) => state.TestItems.items.loading
    );
}

/**
 * Perform createItem action
 *
 * @param {Object} data - The new item
 *
 * @returns {void}
 */
export function performCreateItem(data) {
    dispatcher.dispatchPromise(
        createItem,
        'CREATE_ITEM',
        (state) => state.TestItems.createdItem.loading,
        [data]
    );
}

/**
 * Perform updateItem action
 *
 * @param {Object} data - The updated item
 *
 * @returns {void}
 */
export function performUpdateItem(data) {
    dispatcher.dispatchPromise(
        updateItem,
        'UPDATE_ITEM',
        (state) => state.TestItems.updatedItem.loading,
        [data]
    );
}

/**
 * Perform deleteItem action
 *
 * @param {String} id - The item identifier for delete
 *
 * @returns {void}
 */
export function performDeleteItem(id) {
    dispatcher.dispatchPromise(
        deleteItem,
        'DELETE_ITEM',
        (state) => state.TestItems.deletedItem.loading,
        [id]
    );
}