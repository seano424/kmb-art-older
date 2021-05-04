import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getExhibition, getAllPaintingsWithSlug } from "../../lib/api";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

export default function Painting({ preview, charcoals }) {
  const artWork = charcoals?.results?.map((r) => r.artWork);
  const title = charcoals?.results[0]?.title;
  const artDisplay = charcoals ? (
    artWork[0]?.map((art) => (
      <div key={art._key} className="mt-10 h-screen mb-40">
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
    ))
  ) : (
    <h1>No artwork has been added to this exhibit so far...</h1>
  );
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div className="">
          <h1 className="text-2xl mt-10 shadow opacity-25">{title}</h1>
          {artDisplay}
        </div>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allCharcoals = await getExhibition(params.slug, preview);
  return {
    props: { preview, charcoals: allCharcoals },
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
