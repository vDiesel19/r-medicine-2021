import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = () => {
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
							image
							cardSummary
							siteUrl
						}
					}
				}
			`}
			render = {data => (
				<Helmet>
					{/* General tags */}
					<title>{data.markdownRemark.frontmatter.title}</title>
					<meta name="description" content={data.markdownRemark.frontmatter.description} />
					<meta name="image" content={data.markdownRemark.frontmatter.image} />
					<link rel="canonical" href={data.markdownRemark.frontmatter.siteUrl} />

					{/* OpenGraph tags */}
					<meta property="og:url" content={data.markdownRemark.frontmatter.siteUrl} />
					<meta property="og:title" content={data.markdownRemark.frontmatter.title} />
					<meta property="og:description" content={data.markdownRemark.frontmatter.description} />
					<meta property="og:image" content={data.markdownRemark.frontmatter.image} />

					{/* Twitter Card tags */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content={data.markdownRemark.frontmatter.author} />
					<meta name="twitter:title" content={data.markdownRemark.frontmatter.title} />
					<meta name="twitter:description" content={data.markdownRemark.frontmatter.description} />
					<meta name="twitter:image" content={data.markdownRemark.frontmatter.image} />
        </Helmet>
			)}
		/>
	)
};

export default SEO;