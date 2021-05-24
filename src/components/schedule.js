import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import arrow from '../assets/arrow.svg';

const Schedule = () => {

	const toggleSchedule = (e) => {
		e.currentTarget.classList.toggle('is-active');
	}

	return (
		<StaticQuery
		  	query={graphql`
				query ScheduleQuery {
					markdownRemark(frontmatter: {id: {eq: "schedule-glance"}}) {
						frontmatter {
							subheader
							schedules {
								day_week
								date
								event_line_1
								event_line_2
							}
						}
					}
				}
		  	`}
		  	render={data => (
				<div className="schedule">
					<p className="schedule__subheader">{data.markdownRemark.frontmatter.subheader}</p>
					<div className="schedule__container">
						{data.markdownRemark.frontmatter.schedules.map(schedule => {
							return (
								<div className="schedule__content" onClick={(e) => toggleSchedule(e)} role="button" tabIndex="0" key={schedule.day_week}>
									<div className="schedule__day-of-week">
										<p>{schedule.day_week}</p>
										<button className="schedule__arrow">
											<img src={arrow} alt="" />
										</button>
									</div>
									<div className="schedule__events">
										<p className="schedule__day">{schedule.date}</p>
										<ul>
											<li>{schedule.event_line_1}</li>
											<li>{schedule.event_line_2}</li>
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</div>
		  	)}
		/>
	)
};

export default Schedule;