import React from "react";

import Seo from "../components/seo";
import Map from "../components/map";
import Sidebar from "../components/sidebar";
import Provider from "../store/provider";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Provider>
        <Seo title="Mask map" />
        <Sidebar />
        <Map />
      </Provider>
    </Layout>
  );
};

export default IndexPage;
