import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getCharcoals } from "../../lib/api";
import PostTitle from "@/components/post-title";
import FeatureImage from "@/components/feature-image";

export default function Charcoals({ preview, charcoals }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-16">
          <PostTitle>Art Series / Charcoals & Pastels</PostTitle>
          <FeatureImage content={charcoals} />
        </main>
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
