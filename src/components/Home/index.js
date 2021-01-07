import React from 'react';

// Components
import Header from '../../microComponents/Header';
import Aside from '../../microComponents/Aside';
import Footer from '../../microComponents/Footer';
import Intro from '../../microComponents/Intro';

import './index.scss';

const Home = () => {
    return (
       <>
            <Header />
            <div className="home">
                <Aside />
                <Intro />
            </div>


            
            <Footer />
        </>
    )
};

export default Home;