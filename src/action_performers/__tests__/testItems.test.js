import * as Lab from 'lab';
import Soother from 'soother';

const lab = Lab.script();
const { describe, it, expect, beforeEach } = lab;

import { dispatcher } from '../../store';

import {
    performGetItems,
    performCreateItem,
    performUpdateItem,
    performDeleteItem
} from '../testItems';

describe('Test Item action performers:', () => {
    beforeEach((done) => {
        dispatcher.dispatchPromise = Soother.dummy();
        done();
    });

    it('should call dispatch method for get test items', (done) => {
        performGetItems();

        const [firstCall] = dispatcher.dispatchPromise.calls;
        const [method, type, loadingFunc, meta] = firstCall.args;
        const loading = loadingFunc({ TestItems: { items: { loading: 'TEST' } } });

        expect(dispatcher.dispatchPromise.calls.length).to.equal(1);
        expect(method.name).to.be.equal('getItems');
        expect(type).to.be.equal('GET_ITEMS');
        expect(loading).to.be.equal('TEST');
        expect(meta).to.be.equal(undefined);

        done();
    });

    it('should call dispatch method for create new test item', (done) => {
        const data = { name: 'new item' };
        performCreateItem(data);

        const [firstCall] = dispatcher.dispatchPromise.calls;
        const [method, type, loadingFunc, meta] = firstCall.args;
        const loading = loadingFunc({ TestItems: { createdItem: { loading: 'TEST' } } });
        const [item] = meta;

        expect(dispatcher.dispatchPromise.calls.length).to.equal(1);
        expect(method.name).to.be.equal('createItem');
        expect(type).to.be.equal('CREATE_ITEM');
        expect(loading).to.be.equal('TEST');
        expect(item).to.be.equal(data);

        done();
    });

    it('should call dispatch method for update test item', (done) => {
        const data = { name: 'updated item' };
        performUpdateItem(data);

        const [firstCall] = dispatcher.dispatchPromise.calls;
        const [method, type, loadingFunc, meta] = firstCall.args;
        const loading = loadingFunc({ TestItems: { updatedItem: { loading: 'TEST' } } });
        const [item] = meta;

        expect(dispatcher.dispatchPromise.calls.length).to.equal(1);
        expect(method.name).to.equal('updateItem');
        expect(type).to.equal('UPDATE_ITEM');
        expect(loading).to.equal('TEST');
        expect(item).to.equal(data);

        done();
    });

    it('should call dispatch method for delete test item', (done) => {
        const id = '1';
        performDeleteItem(id);

        const [firstCall] = dispatcher.dispatchPromise.calls;
        const [method, type, loadingFunc, meta] = firstCall.args;
        const loading = loadingFunc({ TestItems: { deletedItem: { loading: 'TEST' } } });
        const [itemId] = meta;

        expect(dispatcher.dispatchPromise.calls.length).to.equal(1);
        expect(method.name).to.equal('deleteItem');
        expect(type).to.equal('DELETE_ITEM');
        expect(loading).to.equal('TEST');
        expect(itemId).to.equal(id);

        done();
    });
});

export { lab };