import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";
import Seo from "../Seo";

export default function Layout(props) {
  return (
    <>
      <Seo title={props.title} />
      <Helmet>
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

Layout.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
