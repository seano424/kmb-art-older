import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getSerie, getAllPaintingsWithSlug } from "../../lib/api";
import ImagesDisplay from "@/components/images-display";

export default function InkWork({ preview, inkWorks }) {
  console.log(inkWorks);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <ImagesDisplay series={inkWorks} />
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allInkWorks = await getSerie(params.slug, preview);
  return {
    props: { preview, inkWorks: allInkWorks },
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
