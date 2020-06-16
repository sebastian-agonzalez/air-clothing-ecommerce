import * as React from 'react';
//react-router
import { Switch, Route } from 'react-router-dom';
//pages
import * as P from '../pages/exportIndex';

//declaration of routes
export const GeneralRouting = () => {
    return (
        <Switch>
            <Route exact path='/' component={P.Home} />
            <Route exact path='/product/:Id' component={P.ProductDetail} />
            <Route exact path='/register' component={P.Register} />
            <Route exact path='/faqs' component={P.Faqs} />
            <Route component={P.NotFound} />
        </Switch>
    )
}