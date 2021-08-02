import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const SchedulePage = ({data, }) => {
    return (
        <div>
            <Header />
                <div className="schedule-page">
                    THIS IS THE SCHEDULE PAGE
                </div>
            <Footer />
        </div>
    );
};

export default SchedulePage;