/**
 * @module Backend API/Test Items Service
 */

import Axios from 'axios';
import { SESSION_API_URL } from '../../constants';

/**
 * Call specific endpoint via HTTP and read items
 *
 * @returns {AxiosPromise} Promise to return all items
 */
export function getItems() {
    return Axios.get(`${SESSION_API_URL}/items`);
}

/**
 * Call specific endpoint via HTTP and create item
 *
 * @param {Object} item - New item details
 * @returns {AxiosPromise} Promise to create new item
 */
export function createItem(item) {
    return Axios.post(`${SESSION_API_URL}/items`, item);
}

/**
 * Call specific endpoint via HTTP and update item
 *
 * @param {Object} updates - Item updates
 * @returns {AxiosPromise} Promise to update new item
 */
export function updateItem(updates) {
    return Axios.put(`${SESSION_API_URL}/items`, updates);
}

/**
 * Call specific endpoint via HTTP and delete item
 *
 * @param {String} id - Item identifier
 * @returns {AxiosPromise} Promise to create delete specific item
 */
export function deleteItem(id) {
    return Axios.delete(`${SESSION_API_URL}/items/${id}`);
}