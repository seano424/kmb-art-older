import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getCharcoals } from "../../lib/api";
import PostTitle from "@/components/post-title";
import FeatureImage from "@/components/feature-image";
import Container from "@/components/container";

export default function Charcoals({ preview, charcoals }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background="images/background.jpg">
          <PostTitle>Art Series / Charcoals & Pastels</PostTitle>
          <FeatureImage content={charcoals} />
        </Container>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allCharcoals = await getCharcoals(preview);
  return {
    props: { preview, charcoals: allCharcoals },
    revalidate: 1,
  };
}
