import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import { getAboutContent } from "../../lib/api";
import PostTitle from "@/components/post-title";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import { imageBuilder } from "../../lib/sanity";
import Image from "next/image";

export default function About({ preview, content }) {
  const image = content[0].main_image;
  const body = content[0].body;
  const title = content[0].title;
  console.log(image);
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background="images/background.jpg">
          <PostTitle>{title}</PostTitle>
          <article className="grid grid-cols-6">
            <div className="lg:col-span-2 col-span-6 m-auto my-10 lg:my-0">
              <Image
                className="rounded"
                src={imageBuilder(image).url()}
                title="image of Karrie Marie Baxley"
                height={600}
                width={400}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="lg:col-span-4 col-span-6 bg-transparent bg-white flex items-center mb-1">
              <PostBody content={body} />
            </div>
          </article>
        </Container>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = await getAboutContent(preview);
  return {
    props: { preview, content },
    revalidate: 1,
  };
}
