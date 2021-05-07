import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getBook } from "../../lib/api";
import BookDisplay from "../../components/book-display";
import PostTitle from "../../components/post-title";

export default function Index({ preview, book }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <main className="my-20 mx-28">
          <PostTitle>Dancing With A Thousand Bees</PostTitle>
          <BookDisplay book={book[0]} />
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
