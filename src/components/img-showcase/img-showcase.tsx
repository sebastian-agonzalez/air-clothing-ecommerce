import React from 'react';
import './img-showcase.scss';
//images
import m_1 from '../../assets/img/showcase/m-1.jpg';
import m_2 from '../../assets/img/showcase/m-2.jpg';
import m_3 from '../../assets/img/showcase/m-3.jpg';
import m_4 from '../../assets/img/showcase/m-4.jpg';
import w_1 from '../../assets/img/showcase/w-1.jpg';
import w_2 from '../../assets/img/showcase/w-2.jpg';
import w_3 from '../../assets/img/showcase/w-3.jpg';


//function component that renders Home product images to showcase
export const ImgShowcase = () => {
    return (
        // <section className="section">
        //     <div className="container">
                <nav id="imagesLanding" className="level">
                    <img src={m_2} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="m-2" />
                    <img src={m_1} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="m-1" />
                    <img src={w_1} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="w-1" />
                    <img src={m_4} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="m-4" />
                    <img src={m_3} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="m-3" />
                    <img src={w_3} className="img-showcase-max-width mx-2 level-item has-text-centered shadow" alt="w-3" />
                </nav>
        
        //     </div>
        // </section>
    )
}