import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Workshop from '../components/workshop';
import { SCHEDULES } from '../helpers/schedules';

const SchedulePage = () => {
    return (
        <div>
            <Header />
                <div className="schedule-page">
					<h1 className="schedule-page__top-header">Conference Schedule</h1>
					<div className="schedule-page__container">
						{SCHEDULES.map(schedule => {
							return (
								<div className="schedule-page__section">
									<h2 className="schedule-page__day">{schedule.day}</h2>
									{schedule.workshops.map(workshop => {
										return (
											<Workshop
												time={workshop.time}
												title={workshop.title}
												videoUrl={workshop.videoUrl}
												speakers={workshop.speakers}
											/>
										)
									})}
								</div>
							);
						})}
					</div>
                </div>
            <Footer />
        </div>
    );
};

export default SchedulePage;
