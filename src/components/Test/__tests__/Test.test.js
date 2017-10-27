import * as Lab from 'lab';

const lab = Lab.script();
const { describe, it, expect } = lab;


import React from 'react';
import { Test } from '../Test';

function renderComponent() {
    return shallow(<Test />);
}

describe('<Test /> Component', () => {
    const component = renderComponent();

    it('should contains <div> with class "Test"', (done) => {
        expect(component.debug().includes('div className="Test"')).to.equal(true);
        done();
    });
});

export { lab };