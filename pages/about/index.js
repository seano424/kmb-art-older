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
          <article className="flex flex-wrap justify-center">
            <div className="">
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
            <div className="md:m-20 mb-10 my-8 md:p-8 xl:m-0 xl:p-0 xl:w-1/2 bg-transparent lg:bg-white flex items-center">
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
