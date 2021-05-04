import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getCharcoals } from "../../lib/api";
import ImageCard from "../../components/image-card";

export default function Charcoals({ preview, charcoals }) {
  console.log(charcoals);
  const content = charcoals.map((charcoal) => (
    <ImageCard key={charcoal._id} image={charcoal} title={charcoal.title} />
  ));
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-16">
          <h1 className="pl-6 text-2xl mt-10 shadow-small opacity-25 mb-10">
            Art Series / Charcoals & Pastels
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3">{content}</div>
          </div>
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
