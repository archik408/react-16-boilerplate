import React from 'react';
import { connect } from 'react-redux';

import {
    performGetItems,
    performCreateItem,
    performDeleteItem
} from '../../action_performers/testItems';

import './Test.css';

/**
 * Test component (display test items)
 * @extends {React.Component}
 */
export class Test extends React.Component {

    /**
     * Map state to properties
     *
     * @param {Object} state - Application state
     * @returns {Object} Data from state
     */
    static mapStateToProps(state) {
        return {
            items: state.TestItems.items.data
        };
    }

    /**
     * Bind inner methods
     * @constructor
     * @param {Object} props - Component properties
     * @param {Object} context - Application context
     */
    constructor(props, context) {
        super(props, context);

        this.renderItems = this.renderItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    /**
     * Perform actions after component mount:
     * - get items;
     */
    componentDidMount() {
        performGetItems();
    }

    /**
     * Renders items
     * @returns {Array} Items
     */
    renderItems() {
        const { props: { items = [] } } = this;
        return items.map((item, index) => (
            <p key={index}>{item.name}</p>
        ));
    }

    /**
     * Add item with name '11'
     * @returns {void}
     */
    addItem() {
        performCreateItem({ name: '11' });
    }

    /**
     * Remove item with name '11'
     * @returns {void}
     */
    removeItem() {
        performDeleteItem('11');
    }

    /**
     * Renders the component
     * @returns {XML} Markup for the component
     */
    render() {
        return (
            <div className="Test">
                <button id="add" onClick={this.addItem}>Add '11'</button>
                <button id="remove" onClick={this.removeItem}>Remove '11'</button>
                <p>Items:</p><br/>
                <div id="items">{this.renderItems()}</div>
            </div>
        );
    }
}

export default connect(Test.mapStateToProps)(Test);