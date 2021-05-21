import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const About = ({ data, }) => {
	return (
		<div>
			<Header />
			<div className="about">
				<h1 className="about__header">{data.markdownRemark.frontmatter.header}</h1>
				<div className="about__content">
					{data.markdownRemark.frontmatter.content.map(item => {
						return (
							<p className="about__text" key={item.text}>{item.text}</p>
						)
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;

export const pageQuery = graphql`
	query AboutQuery {
		markdownRemark(frontmatter: {id: {eq: "about"}}) {
			frontmatter {
				id
				header
				content {
					text
				}
			}
		}
	}
`