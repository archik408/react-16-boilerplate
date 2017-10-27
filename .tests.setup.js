/**
 * @TODO
 */

const Soother = require('soother');
require('babel-register')();

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

if (typeof global.Node === 'undefined') {
    global.Node = document.defaultView.Node;
}

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;

/**
 * @TODO
 */

const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');
enzyme.configure({ adapter: new Adapter() });

global.mount = enzyme.mount;
global.shallow = enzyme.shallow;
global.render = enzyme.render;

const stubber = Soother.moduleSoother();
stubber.stubModule('.\.css$');
stubber.stubModule('.\.svg$');


