import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, image: metaImage, title, pathname }) => {
	const { site } = useStaticQuery(
    graphql`
			query SEOQuery {
				markdownRemark(frontmatter: {id: {eq: "seo"}}) {
					frontmatter {
						title
						description
						author
						keywords
						siteUrl
					}
				}
			}
    `
	)
	
	const metaDescription = description || site.markdownRemark.frontmatter.description;
	const image =
    metaImage && metaImage.src
      ? `${site.markdownRemark.frontmatter.siteUrl}${metaImage.src}`
			: null
	const canonical = pathname ? `${site.markdownRemark.frontmatter.siteUrl}${pathname}` : null

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.markdownRemark.frontmatter.title}`}
			link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: "keywords",
					content: site.markdownRemark.frontmatter.keywords.join(","),
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:creator`,
					content: site.markdownRemark.frontmatter.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					metaImage
						? [
								{
									property: "og:image",
									content: image,
								},
								{
									property: "og:image:width",
									content: metaImage.width,
								},
								{
									property: "og:image:height",
									content: metaImage.height,
								},
								{
									name: "twitter:card",
									content: "summary_large_image",
								},
							]
						: [
								{
									name: "twitter:card",
									content: "Join us to learn about and discuss R based tools to improve clinical research and practice!",
								},
							]
				)
				.concat(meta)}
		/>
	)
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
	}),
	pathname: PropTypes.string,
}

export default SEO;