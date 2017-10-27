import * as Lab from 'lab';
import fakeBackend from '../mockup';

const lab = Lab.script();
const { test, expect, experiment, before } = lab;

import {
    getItems,
    createItem,
    deleteItem,
    updateItem
} from '../testItems';

experiment('Learn Test Item API end-points', () => {
    before(done => {
        // TODO remove after integration with real API
        fakeBackend();
        done();
    });


    test('GET /api/v1/items', done => {
        getItems()
            .then((response) => {
                expect(response.status).to.equal(200);
                const [ firstItem, secondItem ] = response.data;
                expect(firstItem.name).to.equal('9');
                expect(secondItem.name).to.equal('10');
                done();
            })
            .catch(done);
    });

    test('DELETE /api/v1/items/11', done => {
        deleteItem('11')
            .then((response) => {
                expect(response.status).to.equal(200);
                const firstItem = response.data;
                expect(firstItem.name).to.equal('11');
                done();
            })
            .catch(done);
    });

    test('POST /api/v1/items', done => {
        createItem({ name: '11' })
            .then((response) => {
                expect(response.status).to.equal(200);
                const firstItem = response.data;
                expect(firstItem.name).to.equal('11');
                done();
            })
            .catch(done);
    });

    test('PUT /api/v1/items', done => {
        updateItem({ name: '11' })
            .then((response) => {
                expect(response.status).to.equal(200);
                const firstItem = response.data;
                expect(firstItem.name).to.equal('11');
                done();
            })
            .catch(done);
    });
});


export { lab };