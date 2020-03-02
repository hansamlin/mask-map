import React from "react";

import Seo from "../components/seo";
import Map from "../components/realtime/map";
import Sidebar from "../components/realtime/sidebar";
import Provider from "../store/realtime/provider";
import Layout from "../components/layout";

export default () => {
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
