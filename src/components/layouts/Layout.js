import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";

export default function Layout(props) {
  const staticQuery = graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <LayoutComponent static={data} {...props} />}
    />
  );
}

function LayoutComponent(props) {
  const title = props.title
    ? `${props.title} - ${props.static.site.siteMetadata.title}`
    : props.static.site.siteMetadata.title;

  return (
    <>
      <Helmet htmlAttributes={{ lang: "fr" }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, minimal-ui"
        />
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "SoftwareApplication",
            "name": "1 à 10",
            "operatingSystem": "iOS, ANDROID",
            "applicationCategory": "MobileApplication",
            "downloadUrl": "https://apps.apple.com/fr/app/1-%C3%A0-10/id1555319145",
            "offers": {
              "@type": "Offer",
              "price": "0"
            }
          }
        `}</script>
      </Helmet>
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}

LayoutComponent.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
