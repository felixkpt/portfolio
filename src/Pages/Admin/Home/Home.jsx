import React from 'react';

import Contact from '../../Components/Contact/Contact';
import Experience from '../../Components/Experience/Experience';
import Intro from '../../Components/Intro/Intro';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Works from '../../Components/Works/Works';

const Home = () => {
    return (
        <>
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home