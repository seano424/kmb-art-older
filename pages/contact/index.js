import React from "react";
import Layout from "@/components/layout";
import SidebarLayout from "@/components/sidebar-layout";
import PostTitle from "@/components/post-title";
import Container from "@/components/container";

export default function index() {
  return (
    <Layout>
      <SidebarLayout>
        <Container background="images/background.jpg">
          <PostTitle>Contact Karrie</PostTitle>
          <div>
            <h4>Karrie Marie Baxley, Kansas City</h4>
            <a className="text-base" href="mailto:someone@yoursite.com">
              bluemoonkmo@yahoo.com
            </a>
          </div>
        </Container>
      </SidebarLayout>
    </Layout>
  );
}
