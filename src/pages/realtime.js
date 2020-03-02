import React from "react";

import Seo from "../components/seo";
import Map from "../components/realtime/map";
import Sidebar from "../components/realtime/sidebar";
import MaskProvider from "../store/realtime/maskProvider";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <Seo title="Mask map" />
      <MaskProvider>
        <Sidebar />
        <Map />
      </MaskProvider>
    </Layout>
  );
};
