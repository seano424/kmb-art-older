import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getPaintings } from "../../lib/api";
import PostTitle from "@/components/post-title";
import FeatureImage from "@/components/feature-image";
import Container from "@/components/container";

export default function Index({ preview, paintings }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background="images/background.jpg">
          <PostTitle>Art Series / Paintings</PostTitle>
          <FeatureImage content={paintings} />
        </Container>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPaintings = await getPaintings(preview);
  return {
    props: { preview, paintings: allPaintings },
    revalidate: 60,
  };
}
