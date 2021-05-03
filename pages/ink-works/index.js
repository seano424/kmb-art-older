import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getInkWorks } from "../../lib/api";

export default function Index({ preview, inkWorks }) {
  console.log(inkWorks);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div>
          <h1>Ink Works</h1>
        </div>
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
