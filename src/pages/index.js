import React, { useState } from "react";
import AppContext from '../context/appContext';
import Header from '../components/header';
import HeroBanner from '../components/heroBanner';
import SectionHeader from '../components/sectionHeader';
import SponsorsTop from '../components/sponsorsTop';
import Organizers from '../components/organizers';
import Schedule from '../components/schedule';
import Footer from '../components/footer';

export default function Home() {
  let stateHook = useState({
    first_name: '',
    last_name: '',
    email: '',
    successMessage: false,
  });

  return (
    <AppContext.Provider value={stateHook}>
      <div className="app">
        <Header />
        <HeroBanner />
        <SectionHeader header="Brought to You By" />
        <SponsorsTop />
        <SectionHeader header="Organizers" />
        <Organizers titleOne="Organizing Committee" titleTwo="Program Committee" />
        <SectionHeader header="Schedule At-A-Glance" />
        <Schedule />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}