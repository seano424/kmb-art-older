import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getPaintings } from "../../lib/api";
import ImageCard from "../../components/image-card";

export default function Index({ preview, paintings }) {
  const content = paintings.map((painting) => (
    <ImageCard key={painting._id} image={painting} title={painting.title} />
  ));

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-16">
          <h1 className="pl-6 text-2xl mt-10 shadow-small opacity-25 mb-10">
            Art Series / Paintings
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8">{content}</div>
          </div>
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
