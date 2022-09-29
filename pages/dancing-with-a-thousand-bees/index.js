import React from "react";
import Layout from "../../components/Layout";
import SidebarLayout from "../../components/SidebarLayout";
import { getBook } from "../../lib/api";
import BookDisplay from "../../components/BookDisplay";
import PostTitle from "../../components/post-title";
import Container from "@/components/container";

export default function Index({ preview, book }) {
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background>
          <PostTitle>Dancing With A Thousand Bees</PostTitle>
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
