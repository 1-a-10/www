import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";

export default function ContributePage() {
  return (
    <Layout title="Contribution">
      <Nav />
      <section className="section">
        <div className="container content">
          <h1 className="title is-1">Je veux contribuer à 1 à 10.</h1>
          <iframe
            title="Contribution"
            src="https://docs.google.com/forms/d/e/1FAIpQLScoukKsCi3NgOIcAlX1RmPayqw9WBJD7wrlZB1gCL7vUlmqpA/viewform?embedded=true"
            width="100%"
            height="3243"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Chargement…
          </iframe>
        </div>
      </section>
    </Layout>
  );
}
