import React from 'react'
import { Route } from 'react-router-dom';
import { Test, App } from '../components';

/**
 * Application routes (use react-route v4)
 * @constructor
 */
export const Routes = () => (<div>
    <Route path="/" component={App}/>
    <Route path="/test" component={Test}/>
</div>);
