import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getPaintingExhibition, getAllPaintingsWithSlug } from "../../lib/api";

export default function Painting({ preview, paintings }) {
  console.log(paintings);

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div>
          <h1>PAINTING EXHIBITION</h1>
        </div>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allPaintings = await getPaintingExhibition(params.slug, preview);
  return {
    props: { preview, paintings: allPaintings },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPaintingsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
