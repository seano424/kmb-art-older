import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getPaintings } from "../../lib/api";
import PostTitle from "@/components/post-title";
import FeatureImage from "@/components/feature-image";

export default function Index({ preview, paintings }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-16">
          <PostTitle>Art Series / Paintings</PostTitle>
          <FeatureImage content={paintings} />
        </main>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPaintings = await getPaintings(preview);
  return {
    props: { preview, paintings: allPaintings },
    revalidate: 1,
  };
}
