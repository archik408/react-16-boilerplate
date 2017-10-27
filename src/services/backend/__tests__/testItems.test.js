import * as Lab from 'lab';
import Soother from 'soother';

const lab = Lab.script();
const { describe, it, expect, beforeEach } = lab;

import {
    getItems,
    createItem,
    deleteItem,
    updateItem
} from '../testItems';

describe('Test Item API Service', () => {
    let fakeAjax = null;

    beforeEach(done => {
        fakeAjax = Soother.fakeXMLHttpRequest();
        done();
    });

    it('should provide method for getting items', done => {
        getItems().then(() => {
            const [call] = fakeAjax.calls();

            expect(call.method).to.be.equal('GET');
            expect(call.url).to.be.equal('/api/v1/items');

            done();
        }).catch(done);
    });

    it('should provide method for creating new item', done => {
        createItem({ name: 'test' }).then(() => {
            const [call] = fakeAjax.calls();

            expect(call.method).to.be.equal('POST');
            expect(call.url).to.be.equal('/api/v1/items');

            const data = JSON.parse(call.data);
            expect(data.name).to.be.equal('test');

            done();
        }).catch(done);
    });

    it('should provide method for deleting item', done => {
        updateItem({ name: 'test' }).then(() => {
            const [call] = fakeAjax.calls();

            expect(call.method).to.be.equal('PUT');
            expect(call.url).to.be.equal('/api/v1/items');

            const data = JSON.parse(call.data);
            expect(data.name).to.be.equal('test');

            done();
        }).catch(done);
    });

    it('should provide method for updating item', done => {
        deleteItem('1').then(() => {
            const [call] = fakeAjax.calls();

            expect(call.method).to.be.equal('DELETE');
            expect(call.url).to.be.equal('/api/v1/items/1');

            done();
        }).catch(done);
    });

});

export { lab };