import React from 'react';
import arrow from '../assets/arrow.svg';

const Schedule = () => {

	const toggleSchedule = (e) => {
		e.currentTarget.classList.toggle('is-active');
	}

	return (
		<div className="schedule">
			<div className="schedule__container">
				<div className="schedule__content" onClick={(e) => toggleSchedule(e)} role="button" tabIndex="0">
					<div className="schedule__day-of-week">
						<p>Tuesday</p>
						<button className="schedule__arrow">
							<img src={arrow} alt="" />
						</button>
					</div>
					<div className="schedule__events">
						<p className="schedule__day">24th</p>
						<ul>
							<li>Workshops</li>
						</ul>
					</div>
				</div>
				<div className="schedule__content" onClick={(e) => toggleSchedule(e)} role="button" tabIndex="0">
					<div className="schedule__day-of-week">
						<p>Wednesday</p>
						<button className="schedule__arrow">
							<img src={arrow} alt="" />
						</button>
					</div>
					<div className="schedule__events">
						<p className="schedule__day">25th</p>
						<ul>
							<li>Workshops</li>
						</ul>
					</div>
				</div>
				<div className="schedule__content" onClick={(e) => toggleSchedule(e)} role="button" tabIndex="0">
					<div className="schedule__day-of-week">
						<p>Thursday</p>
						<button className="schedule__arrow">
							<img src={arrow} alt="" />
						</button>
					</div>
					<div className="schedule__events">
						<p className="schedule__day">26th</p>
						<ul>
							<li>Keynote</li>
							<li>Sessions</li>
						</ul>
					</div>
				</div>
				<div className="schedule__content" onClick={(e) => toggleSchedule(e)} role="button" tabIndex="0">
					<div className="schedule__day-of-week">
						<p>Friday</p>
						<button className="schedule__arrow">
							<img src={arrow} alt="" />
						</button>
					</div>
					<div className="schedule__events">
						<p className="schedule__day">27th</p>
						<ul>
							<li>Keynote</li>
							<li>Sessions</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Schedule;