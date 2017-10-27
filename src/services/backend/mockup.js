
import Soother from 'soother';

// TODO remove after integration
export default function fakeBackend() {
    const fakeAjax = Soother.fakeXMLHttpRequest();

    const url = '/api/v1/items';

    const list = [{ name: '9' }, { name: '10' }];
    const item = { name: '11' };

    fakeAjax.register('GET', url, list);
    fakeAjax.register('POST', url, item);
    fakeAjax.register('PUT', url, item);
    fakeAjax.register('DELETE', `${url}/11`, item);
}

