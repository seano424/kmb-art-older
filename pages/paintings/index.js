import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getPaintings } from "../../lib/api";
import ImageCard from "../../components/image-card";

export default function Index({ preview, paintings }) {
  console.log(paintings);

  const content = paintings.map((painting) => <ImageCard image={painting} />);

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div className="w-full flex-wrap mt-28">
          <div className="flex w-full flex-wrap">{content}</div>
        </div>
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
