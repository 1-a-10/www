import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const staticQuery = graphql`
    query {
      splash: file(relativePath: { eq: "splash.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <HeroSection data={data} />}
    />
  );
};

function HeroSection({ data }) {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <h1 className="title is-1">1 à 10, l'application de quiz.</h1>

                <p>
                  Le 1 à 10 est un quiz pour jouer en famille ou entre amis.
                </p>
                <p>
                  Chaque joueur doit s'auto-estimer sur un thème de la vie de
                  tous les jours (fromage, bière, devinettes, etc...). Plus la
                  note est haute, plus c'est difficile, mais plus tu gagnes de
                  points !
                </p>

                <a
                  href="https://apps.apple.com/fr/app/1-%C3%A0-10/id1555319145"
                  className="button is-primary is-rounded mt-3"
                >
                  <span>Téléchargez l'app</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>
              </div>

              <div className="column is-offset-1-tablet">
                <Img
                  fluid={data.splash.childImageSharp.fluid}
                  alt="Splash screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
