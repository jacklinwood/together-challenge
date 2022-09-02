import React from 'react';

import NewsTicker from './components/NewsTicker';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Masthead from './components/Masthead/Masthead';
import WhyHubble from './components/WhyHubble/WhyHubble';
import StackedCards from './components/StackedCards';
import TabbedCards from './components/TabbedCards';
import PreFooterCta from './components/PreFooterCta';
import ExplorePlatform from './components/ExplorePlatform';

export default function App() {
    return (
        <React.Fragment>
            <NewsTicker />
            <Header />

            <main>
                <Masthead />
                <WhyHubble />
                <StackedCards />
                <ExplorePlatform />
                <TabbedCards />
                <PreFooterCta />
            </main>

            <Footer />
        </React.Fragment>
    );
}