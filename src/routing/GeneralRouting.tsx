import * as React from 'react';
//react-router
import { Switch, Route } from 'react-router-dom';
//pages
import * as P from '../pages/exportIndex';


export const GeneralRouting = () => {
    return(
            <Switch>
                <Route exact path='/' component={P.Home} />
                <Route exact path='/product/:Id' component={P.ProductDetail} />
                <Route component={P.NotFound} />
            </Switch>
    )
}