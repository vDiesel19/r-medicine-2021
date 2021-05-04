import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Organizers = (props) => {
	return (
		<StaticQuery
		  	query={graphql`
			  	query OrganizersQuery {
					markdownRemark(frontmatter: {id: {eq: "organizers"}}) {
						frontmatter {
							organizing_committee {
								name
								company
							}
							program_committee {
								name
								company
							}
					  	}
					}
				}
				
		  	`}
		  	render={data => (
				<div className="organizers">
					<div className="organizers__container">
						<div className="organizers__content">
							<h3>{props.titleOne}</h3>
							{data.markdownRemark.frontmatter.organizing_committee.map(committee => {
								return (
									<div className="organizers__name-container" key={committee.name}>
										<p className="organizers__name">{committee.name}</p>
										<p className="organizers__company">{committee.company}</p>
									</div>
								);
							})}
						</div>
						<div className="organizers__content">
							<h3>{props.titleTwo}</h3>
							{data.markdownRemark.frontmatter.program_committee.map(committee => {
								return (
									<div className="organizers__name-container" key={committee.name}>
										<p className="organizers__name">{committee.name}</p>
										<p className="organizers__company">{committee.company}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
		  	)}
		/>

	)
};

export default Organizers;