import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getCharcoals } from "../../lib/api";

export default function Charcoals({ preview, charcoals }) {
  console.log(charcoals);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <div>
          <h1>Charcoals</h1>
        </div>
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
