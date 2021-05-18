import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import parse from 'html-react-parser';

const CodeOfConduct = ({ data, }) => {
	return (
		<div>
			<Header />
			<div className="code-conduct">
				<h1 className="code-conduct__top-header">{data.markdownRemark.frontmatter.topHeader}</h1>
				<div className="code-conduct__container">
					{data.markdownRemark.frontmatter.sections.map(section => {
						return (
							<div className="code-conduct__content" key={section.header}>
								<h2 className="code-conduct__header">{section.header}</h2>
								<div className="code-conduct__text">{parse(section.text)}</div>
							</div>
						)
					})}
				</div>
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
				topHeader
				sections {
					header
					text
				}
			}
		}
	}
`