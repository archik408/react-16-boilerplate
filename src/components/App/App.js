import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

/**
 * Main application component
 * @extends {React.Component}
 */
class App extends React.Component {

    /**
     * Bind inner methods
     * @constructor
     * @param {Object} props - Component properties
     * @param {Object} context - Application context
     */
    constructor(props, context) {
        super(props, context);
        this.openTestPage = this.openTestPage.bind(this);
    }

    /**
     * Open Test Page
     * @returns {void}
     */
    openTestPage() {
        this.context.router.history.push('/test');
    }

    /**
     * Renders the component
     * @returns {XML} Markup for the component
     */
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button id="openTest" onClick={this.openTestPage}>Open Test Page</button>
            </div>
        );
    }
}

/**
 * Application context types
 *
 * @type {Object}
 */
App.contextTypes = {
    router: PropTypes.object
};

export default App;
