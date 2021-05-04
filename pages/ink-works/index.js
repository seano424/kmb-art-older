import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getInkWorks } from "../../lib/api";
import ImageCard from "../../components/image-card";

export default function Index({ preview, inkWorks }) {
  const content = inkWorks.map((inkWork) => (
    <ImageCard key={inkWork._id} image={inkWork} />
  ));
  console.log(inkWorks);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-16">
          <h1 className=" text-8xl">Ink Works by Karrie</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3">{content}</div>
          </div>
        </main>
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
