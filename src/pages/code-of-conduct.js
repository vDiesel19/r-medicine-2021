import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const CodeOfConduct = ({ data, }) => {
	return (
		<div>
			<Header />
			<div className="code-conduct">
				<h1>{data.markdown.frontmatter.id}</h1>
			</div>
			<Footer />
		</div>
	);
};

export default CodeOfConduct;

export const pageQuery = graphql`
	query CodeConductQuery {
		markdownRemark(frontmatter: {id: {eq: "code-of-conduct"}}) {
			frontmatter {
				id
			}
		}
	}
`