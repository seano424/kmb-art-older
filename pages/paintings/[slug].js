import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getSerie, getAllPaintingsWithSlug } from "../../lib/api";
import ImagesDisplay from "@/components/images-display";

export default function Painting({ preview, paintings }) {
  console.log(paintings);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <ImagesDisplay series={paintings} />
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allPaintings = await getSerie(params.slug, preview);
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
    fallback: false,
  };
}
