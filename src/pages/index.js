import React from "react";
import { Layout } from "../components/layouts/Layout";
import { HeroSection } from "../components/sections/hero";
import { Nav } from "../components/layouts/Nav";

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <HeroSection />
    </Layout>
  );
}
