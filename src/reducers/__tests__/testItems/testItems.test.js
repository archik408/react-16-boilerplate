import * as Lab from 'lab';

const lab = Lab.script();
const { describe, it, expect } = lab;

import { itemsReducer, initialState } from '../../testItems';
import {
    ITEMS,
    ACTIONS
} from './fixture';

const DIRTY_STATE = { ...initialState, items: { ...initialState.items, data: ITEMS } };

describe('Test items reducer:', () => {
    describe('Pending cases:', () => {
        it('should handle GET_ITEMS', (done) => {
            const result = itemsReducer(initialState, ACTIONS.getItems.pending);
            expect(result.items.loading).to.equal(true);
            expect(result.items.error).to.equal(null);
            expect(result.items.data.length).to.equal(0);

            done();
        });
        it('should handle CREATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.createItem.pending);
            expect(result.createdItem.loading).to.equal(true);
            expect(result.createdItem.error).to.equal(null);
            expect(result.createdItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
        it('should handle UPDATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.updatedItem.pending);
            expect(result.updatedItem.loading).to.equal(true);
            expect(result.updatedItem.error).to.equal(null);
            expect(result.updatedItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
        it('should handle DELETE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.deletedItem.pending);
            expect(result.deletedItem.loading).to.equal(true);
            expect(result.deletedItem.error).to.equal(null);
            expect(result.deletedItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
    });
    describe('Error cases:', () => {
        it('should handle GET_ITEMS', (done) => {
            const result = itemsReducer(initialState, ACTIONS.getItems.fail);
            expect(result.items.loading).to.equal(false);
            expect(result.items.error).to.equal('Error Message');
            expect(result.items.data.length).to.equal(0);

            done();
        });
        it('should handle CREATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.createItem.fail);
            expect(result.createdItem.loading).to.equal(false);
            expect(result.createdItem.error).to.equal('Error Message');
            expect(result.createdItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
        it('should handle UPDATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.updatedItem.fail);
            expect(result.updatedItem.loading).to.equal(false);
            expect(result.updatedItem.error).to.equal('Error Message');
            expect(result.updatedItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
        it('should handle DELETE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.deletedItem.fail);
            expect(result.deletedItem.loading).to.equal(false);
            expect(result.deletedItem.error).to.equal('Error Message');
            expect(result.deletedItem.data).to.equal({});
            expect(result.items.data.length).to.equal(5);

            done();
        });
    });
    describe('Success cases:', () => {
        it('should handle GET_ITEMS', (done) => {
            const result = itemsReducer(initialState, ACTIONS.getItems.success);
            expect(result.items.loading).to.be.equal(false);
            expect(result.items.error).to.be.equal(null);
            expect(result.items.data.length).to.equal(5);
            expect(result.items.data).to.only.include(ITEMS);

            done();
        });
        it('should handle CREATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.createItem.success);
            expect(result.createdItem.loading).to.equal(false);
            expect(result.createdItem.error).to.equal(null);
            expect(result.createdItem.data.name).to.equal('created item');
            expect(result.items.data.length).to.equal(6);

            done();
        });
        it('should handle UPDATE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.updatedItem.success);
            expect(result.updatedItem.loading).to.equal(false);
            expect(result.updatedItem.error).to.equal(null);
            expect(result.updatedItem.data.name).to.equal('item 5');
            expect(result.items.data.length).to.equal(5);

            done();
        });
        it('should handle DELETE_ITEM', (done) => {
            const result = itemsReducer(DIRTY_STATE, ACTIONS.deletedItem.success);
            expect(result.deletedItem.loading).to.equal(false);
            expect(result.deletedItem.error).to.equal(null);
            expect(result.deletedItem.data.name).to.equal('item 5');
            expect(result.items.data.length).to.equal(4);

            done();
        });
    });
});

export { lab };