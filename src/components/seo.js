import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import twitterCard from '../assets/r_medicine_twitter_card.jpg';

const SEO = ({ lang, meta }) => {
	return (
		<StaticQuery
			query={graphql`
				query SEOQuery {
					markdownRemark(frontmatter: {id: {eq: "seo"}}) {
						frontmatter {
							title
							description
							author
							keywords
							cardSummary
							siteUrl
						}
					}
				}
			`}
			render = {data => (
				<Helmet
					htmlAttributes={{
						lang,
					}}
					title={data.markdownRemark.frontmatter.title}
					titleTemplate={`%s | ${data.markdownRemark.frontmatter.title}`}
					meta={[
						{
							name: `description`,
							content: data.markdownRemark.frontmatter.description,
						},
						{
							property: `og:title`,
							content: data.markdownRemark.frontmatter.title,
						},
						{
							property: `og:description`,
							content: data.markdownRemark.frontmatter.description,
						},
						{
							property: `og:type`,
							content: `website`,
						},
						{
							name: `twitter:creator`,
							content: data.markdownRemark.frontmatter.author,
						},
						{
							name: `twitter:title`,
							content: data.markdownRemark.frontmatter.title,
						},
						{
							name: `twitter:description`,
							content: data.markdownRemark.frontmatter.description,
						},
					]
					.concat(
						twitterCard
							? [
									{
										property: "og:image",
										content: twitterCard,
									},
									{
										property: "og:image:width",
										content: twitterCard.width,
									},
									{
										property: "og:image:height",
										content: twitterCard.height,
									},
									{
										name: "twitter:card",
										content: "summary_large_image",
									},
								]
							: [
									{
										name: "twitter:card",
										content: `${data.markdownRemark.frontmatter.cardSummary}`,
									},
								]
					)
					.concat(meta)}
				/>
			)}

		/>
	)
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO;