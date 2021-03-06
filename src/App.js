import React from 'react';
import './App.css'

import { Footer, WhatGPT3, Blog, Possibility, Header, Features } from './containers/index';
import { Navbar, CTA, Brand } from './components/index';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;