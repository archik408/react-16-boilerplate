import * as Lab from 'lab';

const lab = Lab.script();
const { describe, it, expect } = lab;

import React from 'react';
import Soother from 'soother'
import App from '../App';

function renderComponent(context = {  }) {
    return mount(<App context={context} />);
}

describe('Main <App /> Component', () => {

    it(`should contains following controls:
        - <div> with class "App";
        - <img> with class "App-logo"
        - <h1> with class "App-title"
        - <p> with class "App-intro"
        - <button> with text "Open Test Page"`, (done) => {
        const component = renderComponent();
        const text = component.debug();

        expect(text.includes('div className="App"')).to.equal(true);
        expect(text.includes('img') && text.includes(' className="App-title"')).to.equal(true);
        expect(text.includes('h1 className="App-title"')).to.equal(true);
        expect(text.includes('p className="App-intro"')).to.equal(true);
        expect(text.includes('button') && text.includes('Open Test Page')).to.equal(true);

        done();
    });
    it('should provide possibility navigate to test page', (done) => {
        App.prototype.openTestPage = Soother.dummy();
        const component = renderComponent();

        component.find('button').at(0).simulate('click');
        expect(App.prototype.openTestPage.calls.length).to.equal(1);

        done();
    });
});

export { lab };