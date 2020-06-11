import * as React from 'react';

import { ImgShowcase } from '../../components/exportIndex';

//function component that renders Home 
export const Home = () => {
    return (
        <div style={{ minHeight: '500px'}}>
            <div style={{height: '5rem'}}></div>
            <ImgShowcase />
        </div>
    )
}