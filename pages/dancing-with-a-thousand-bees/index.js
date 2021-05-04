import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import Image from "next/image";
import { getBook } from "../../lib/api";
import { urlFor } from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function Index({ preview, book }) {
  console.log(book);
  const bookDisplay = book.map((b) => (
    <div key={b._id} className="grid grid-cols-2 gap-8">
      <div>
        <Image
          src={urlFor(b.image).url()}
          alt="Dancing With A Thousand Bees Book"
          height={700}
          width={500}
        />
      </div>
      <div>
        <BlockContent
          className="text-2xl"
          blocks={b.bio}
          serializers={serializers}
        />
      </div>
    </div>
  ));

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-28">
          <h1 className="pl-6 text-2xl mt-10 shadow-small opacity-25 mb-10">
            Dancing With A Thousand Bees
          </h1>
          {bookDisplay}
        </main>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const book = await getBook(preview);
  return {
    props: { preview, book },
    revalidate: 1,
  };
}
