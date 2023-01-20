import React from 'react';
import './Testimonials.css';
import TCardList from './TCardList';
import { data } from './data';

const Testimonials = () => {

    return (
        <section id="Testimonials2" class="s-testimonials target-section">
            <div class="overlay"></div>
            <div class="row testimonials-header">
                <div class="col-full">
                    <h1 class="h02">Testimonials</h1>
                </div>
            </div>
            <div class="row testimonials">
                <div class="col-full testimonials__slider">
                    <TCardList data={data} />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
