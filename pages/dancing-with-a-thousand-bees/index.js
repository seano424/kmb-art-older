import React from "react";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";
import { getBook } from "../../lib/api";
import BookDisplay from "../../components/book-display";
import PostTitle from "../../components/post-title";
import Container from "@/components/container";

export default function Index({ preview, book }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container>
          <PostTitle>
            Dancing With A Thousand Bees by Karrie Marie Baxley
          </PostTitle>
          <BookDisplay book={book[0]} />
        </Container>
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
