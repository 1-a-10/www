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
          <p>
            Envoyez un courriel à{" "}
            <a href="mailto:baptiste.lecocq@gmail.com">Baptiste Lecocq</a> et
            présentez la carte de questions que vous souhaitez ajouter.
          </p>

          <p>
            Encore merci pour l'investissement que vous souhaitez apporter à 1 à
            10.
          </p>
        </div>
      </section>
    </Layout>
  );
}
