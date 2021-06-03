import React from "react";
import Layout from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";

export default function PrivacyPage() {
  return (
    <Layout title="Vie privée">
      <Nav />
      <section className="section">
        <div className="container content">
          <h1 className="title is-1">
            Nous prenons au sérieux votre vie privée.
          </h1>
          <p>
            L'application 1 à 10 tient compte de votre vie privée et ne collecte
            absolument aucune donnée sur vous et vos activités.
          </p>
        </div>
      </section>
    </Layout>
  );
}
