import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AppContext from '../context/appContext';
import parse from 'html-react-parser';

const CodeConductModal = () => {
	const [context] = useContext(AppContext);

	return (
		<StaticQuery
			query={graphql`
				query codeOfConductQuery {
					markdownRemark(frontmatter: {id: {eq: "code-of-conduct"}}) {
						frontmatter {
							id
							sections {
								header
								text
							}
						}
					}
				}
			`}
			render={data => (
				<div className={`cc-modal${context.showModal ? " show-modal" : ""}`}>
					<div className="cc-modal__wrapper">
						{data.markdownRemark.frontmatter.sections.map(section => {
							return (
								<div className="cc-modal__content" key={section.header}>
									<h2 className="cc-modal__header">{section.header}</h2>
									<div className="cc-modal__text">{parse(section.text)}</div>
								</div>
							)
						})}
					</div>
				</div>
			)}
		/>
	)
};

export default CodeConductModal;