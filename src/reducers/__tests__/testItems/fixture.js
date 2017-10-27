
export const ITEMS = [
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' }
];

export const ACTIONS = {
    getItems: {
        success: {
            type: 'GET_ITEMS',
            payload: [ ...ITEMS ],
            error: null,
            loading: false
        },
        fail: {
            type: 'GET_ITEMS',
            payload: null,
            error: 'Error Message',
            loading: false
        },
        pending: {
            type: 'GET_ITEMS',
            payload: null,
            error: null,
            loading: true
        }
    },
    createItem: {
        success: {
            type: 'CREATE_ITEM',
            payload: { name: 'created item' },
            error: null,
            loading: false
        },
        fail: {
            type: 'CREATE_ITEM',
            payload: null,
            error: 'Error Message',
            loading: false
        },
        pending: {
            type: 'CREATE_ITEM',
            payload: null,
            error: null,
            loading: true
        }
    },
    updatedItem: {
        success: {
            type: 'UPDATE_ITEM',
            payload: { name: 'item 5' },
            error: null,
            loading: false
        },
        fail: {
            type: 'UPDATE_ITEM',
            payload: null,
            error: 'Error Message',
            loading: false
        },
        pending: {
            type: 'UPDATE_ITEM',
            payload: null,
            error: null,
            loading: true
        }
    },
    deletedItem: {
        success: {
            type: 'DELETE_ITEM',
            payload: { name: 'item 5' },
            error: null,
            loading: false,
            meta: ['item 5']
        },
        fail: {
            type: 'DELETE_ITEM',
            payload: null,
            error: 'Error Message',
            loading: false,
            meta: ['item 5']
        },
        pending: {
            type: 'DELETE_ITEM',
            payload: null,
            error: null,
            loading: true,
            meta: ['item 5']
        }
    }
};