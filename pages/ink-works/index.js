import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getInkWorks } from "../../lib/api";
import PostTitle from "@/components/post-title";
import FeatureImage from "@/components/feature-image";
import Container from "@/components/container";

export default function Index({ preview, inkWorks }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container>
          <PostTitle>Art Series / Ink Works</PostTitle>
          <FeatureImage content={inkWorks} />
        </Container>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allInkWorks = await getInkWorks(preview);
  return {
    props: { preview, inkWorks: allInkWorks },
    revalidate: 1,
  };
}
