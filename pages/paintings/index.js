import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getPaintings } from "../../lib/api";
import ImageCard from "../../components/image-card";

export default function Index({ preview, paintings }) {
  const content = paintings.map((painting) => <ImageCard image={painting} />);

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="mt-28 mx-16">
          {/* <h1 className=" text-8xl">Exhibitions</h1> */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-3">{content}</div>
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
