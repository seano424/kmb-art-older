import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getPaintingExhibition, getAllPaintingsWithSlug } from "../../lib/api";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

export default function Painting({ preview, paintings }) {
  const artWork = paintings.results.map((r) => r.artWork);
  const artDisplay = artWork[0].map((art) => (
    <div className="mt-10 h-screen mb-40">
      <div className="relative w-5/5 h-full">
        <Image
          src={urlFor(art.artworkImage).url()}
          alt={art.caption}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <h1 className="text-center m-2">{art.caption}</h1>
    </div>
  ));
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div className="">
          <h1>PAINTING EXHIBITION</h1>
          {artDisplay}
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
